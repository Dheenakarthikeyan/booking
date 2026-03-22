import express from "express";
import cors from "cors";
import AllMovie from "./data/AllMovie.js";
import AllPopular from "./data/AllPopular.js"
import AllUpcoming from "./data/AllUpcoming.js"
import sqlite3 from "sqlite3";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import path from "path";
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;
const JWT_SECRET = "super_secret_movie_key_123"; // In prod, keep in .env

app.use(cors());
app.use(express.json());

// Initialize SQLite Database
const dbPath = path.join(__dirname, 'data', 'bookings.sqlite');
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    // Users table
    db.run(`CREATE TABLE IF NOT EXISTS Users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT UNIQUE,
      password TEXT
    )`);

    // Bookings table
    db.run(`CREATE TABLE IF NOT EXISTS Bookings (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      movieId TEXT,
      date TEXT,
      time TEXT,
      seatNumber TEXT,
      userId INTEGER,
      paymentStatus TEXT DEFAULT 'Completed'
    )`);
  }
});

// Middleware to verify JWT Token
const authenticateJWT = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access Denied ❌" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid Token ❌" });
    req.user = user;
    next();
  });
};

/* --- AUTHENTICATION ROUTES --- */

app.post("/register", async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) return res.status(400).json({ error: "All fields are required" });

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        
        db.run(`INSERT INTO Users (name, email, password) VALUES (?, ?, ?)`, [name, email, hashedPassword], function(err) {
            if (err) {
                if(err.message.includes('UNIQUE')) return res.status(400).json({ error: "Email already exists" });
                return res.status(500).json({ error: err.message });
            }
            res.json({ message: "Registration successful 🎉" });
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: "All fields are required" });

    db.get(`SELECT * FROM Users WHERE email = ?`, [email], async (err, user) => {
        if (err) return res.status(500).json({ error: err.message });
        if (!user) return res.status(400).json({ error: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

        // Generate JWT Token
        const token = jwt.sign({ id: user.id, name: user.name, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
        res.json({ message: "Login successful ✅", token, user: { id: user.id, name: user.name, email: user.email } });
    });
});


/* --- MOVIE ROUTES --- */

app.get("/", (req, res) => {
  res.send("Server is running ✅");
});

app.get("/movies", (req, res) => {
  res.json(AllMovie);
});

app.get("/movies/search", (req, res) => {
  const query = req.query.q?.toLowerCase() || '';
  if (!query) return res.json(AllMovie);
  
  const results = AllMovie.filter(m => 
      m.title.toLowerCase().includes(query) || 
      m.genre?.some(g => g.toLowerCase().includes(query)) ||
      m.language?.toLowerCase().includes(query)
  );
  res.json(results);
});

app.get("/movies/popular", (req, res) => {
  res.json(AllPopular);
});
app.get("/movies/upcoming", (req, res) => {
  res.json(AllUpcoming);
});

app.get("/movies/:id", (req, res) => {
  const movie = AllMovie.find((data) => data.id == req.params.id);
  if (!movie) return res.status(404).json({ message: "Movie not found ❌" });
  res.json(movie);
});

/* --- BOOKING ROUTES --- */

// Get bookings for a movie
app.get("/bookings/:movieId", (req, res) => {
    const movieId = req.params.movieId;
    db.all("SELECT * FROM Bookings WHERE movieId = ?", [movieId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        
        // Group by date and time
        const bookedSeats = {};
        rows.forEach(row => {
            if (!bookedSeats[row.date]) bookedSeats[row.date] = {};
            if (!bookedSeats[row.date][row.time]) bookedSeats[row.date][row.time] = [];
            bookedSeats[row.date][row.time].push(row.seatNumber);
        });

        res.json(bookedSeats);
    });
});

// Get user specific bookings
app.get("/my-bookings", authenticateJWT, (req, res) => {
    const userId = req.user.id;
    db.all("SELECT * FROM Bookings WHERE userId = ?", [userId], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        
        // Attach movie basic details to each booking for frontend
        const detailedBookings = rows.map(b => {
            const movie = AllMovie.find(m => m.id == b.movieId);
            return {
                ...b,
                movieTitle: movie ? movie.title : "Unknown Movie",
                movieImage: movie ? movie.movieImage : ""
            };
        });
        
        res.json(detailedBookings);
    });
});

// Admin Route to get ALL bookings
app.get("/admin/bookings", authenticateJWT, (req, res) => {
    if (req.user.email !== 'admin@movie.com') {
         return res.status(403).json({ error: "Access Denied: Admins Only" });
    }
    
    db.all(`
        SELECT Bookings.*, Users.email as userEmail, Users.name as userName 
        FROM Bookings 
        JOIN Users ON Bookings.userId = Users.id
    `, [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        
        const detailedBookings = rows.map(b => {
            const movie = AllMovie.find(m => m.id == b.movieId);
            return {
                ...b,
                movieTitle: movie ? movie.title : "Unknown Movie"
            };
        });
        
        res.json(detailedBookings);
    });
});

// Save a booking (Requires JWT authentication)
app.post("/bookings", authenticateJWT, (req, res) => {
    let { movieId, date, time, selectedSeats, paymentStatus } = req.body;
    const userId = req.user.id;
    
    // Trim movieId if it's a string
    if (typeof movieId === 'string') movieId = movieId.trim();

    if (!movieId || !date || !time || !selectedSeats || selectedSeats.length === 0) {
        console.log("Booking failed: Missing fields", { movieId, date, time, selectedSeats });
        return res.status(400).json({ error: "Missing fields" });
    }

    const placeholders = selectedSeats.map(() => "(?, ?, ?, ?, ?, ?)").join(", ");
    const values = [];
    selectedSeats.forEach(seat => {
        values.push(movieId, date, time, seat, userId, paymentStatus || 'Completed');
    });

    db.run(`INSERT INTO Bookings (movieId, date, time, seatNumber, userId, paymentStatus) VALUES ${placeholders}`, values, function(err) {
        if (err) {
            console.error("Database error during booking:", err.message);
            return res.status(500).json({ error: err.message });
        }
        res.json({ message: "Booking saved successfully with payment" });
    });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});