import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const themes = [
    { name: "Dark Default", grad: "linear-gradient(to bottom right, #000000, #1a1a1a, #000000)" },
    { name: "Cyberpunk", grad: "linear-gradient(135deg, #ff007f 0%, #7928ca 50%, #ff007f 100%)" },
    { name: "Sunset", grad: "linear-gradient(45deg, #ff512f 0%, #dd2476 50%, #ff512f 100%)" },
    { name: "Ocean", grad: "linear-gradient(to right, #203a43, #0f2027, #2c5364)" },
    { name: "Aurora", grad: "linear-gradient(135deg, #00b09b, #228b22, #96c93d)" },
    { name: "Neon Blue", grad: "linear-gradient(135deg, #00c6ff, #0072ff, #0a0b2e)" },
    { name: "Lava", grad: "linear-gradient(to bottom, #f12711, #f5af19, #f12711)" },
    { name: "Miami", grad: "linear-gradient(45deg, #fc466b, #1f0322, #3f5efb)" },
    { name: "Deep Space", grad: "linear-gradient(to bottom, #434343 0%, #111111 50%, #000000 100%)" },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [inputvalue, setinputvalue] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [user, setUser] = useState(null);
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const applyTheme = (theme) => {
        document.documentElement.style.setProperty('--app-bg-gradient', theme.grad);
        localStorage.setItem('customTheme', JSON.stringify(theme));
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
        
        const savedTheme = localStorage.getItem("customTheme");
        if (savedTheme) applyTheme(JSON.parse(savedTheme));
    }, []);

    const search = async (e) => {
        const val = e.target.value;
        setinputvalue(val);
        if (val.trim()) {
            try {
                const res = await fetch(`http://localhost:3000/movies/search?q=${val}`);
                const data = await res.json();
                setSuggestions(data.slice(0, 5));
            } catch (err) { }
        } else {
            setSuggestions([]);
        }
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`/Search/?q=${inputvalue}`);
        setSuggestions([]);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };

    return (
        <div className="absolute top-0 w-full z-[100] p-8">
            <div className="w-[93%] mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link to="/">
                    <img src={logo} alt="logo" className="w-28 md:w-36 hover:scale-105 transition" />
                </Link>

                {/* Desktop Navbar */}
                <div className="hidden md:block">
                    <nav className="flex items-center gap-6 lg:gap-10 px-8 py-3 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white">
                        <Link to="/" className="hover:text-red-500 transition">Home</Link>
                        <Link to="/movies/Popular" className="hover:text-red-500 transition">Popular</Link>
                        <Link to="/movies/Upcoming" className="hover:text-red-500 transition">Upcoming</Link>
                        <Link to="/MovieShowList" className="hover:text-red-500 transition">MovieList</Link>
                    </nav>
                </div>

                {/* Right Section */}
                <div className="flex items-center gap-3 md:gap-6">
                    <div className="relative hidden sm:block">
                        <form onSubmit={handleSearchSubmit}>
                            <div className="border border-white/20 bg-black/40 backdrop-blur-md rounded-full px-4 py-2 flex items-center">
                                <input
                                    onChange={search}
                                    type="search"
                                    placeholder="Search movies..."
                                    className="bg-transparent outline-none text-white text-sm w-48"
                                    value={inputvalue}
                                    autoComplete="off"
                                />
                                <button type="submit">🔍</button>
                            </div>
                        </form>

                        {suggestions.length > 0 && (
                            <div className="absolute top-12 w-full left-0 bg-gray-900 border border-gray-700 shadow-2xl rounded-xl overflow-hidden">
                                {suggestions.map(movie => (
                                    <div
                                        key={movie.id}
                                        className="flex items-center gap-3 p-3 hover:bg-gray-800 cursor-pointer text-white text-sm border-b border-gray-800 last:border-b-0"
                                        onClick={() => {
                                            setSuggestions([]);
                                            setinputvalue('');
                                            navigate(`/movieDetails/${movie.id}`);
                                        }}
                                    >
                                        <img src={movie.movieImage} className="w-10 h-10 rounded-md object-cover" alt={movie.title} />
                                        <div className="flex flex-col">
                                            <span className="font-bold">{movie.title}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {user ? (
                        <div className="relative">
                            <div onClick={() => setShowDropdown(!showDropdown)} className="cursor-pointer">
                                {user.logo ? (
                                    <img src={user.logo} className="w-10 h-10 rounded-full border-2 border-white/20" alt="profile" />
                                ) : (
                                    <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-bold text-white uppercase">{user.name.charAt(0)}</div>
                                )}
                            </div>
                            {showDropdown && (
                                <div className="absolute right-0 top-14 bg-gray-900/95 backdrop-blur-lg border border-gray-800 shadow-2xl rounded-2xl p-4 min-w-[220px]">
                                    <p className="text-white font-bold mb-3">{user.name}</p>
                                    <hr className="border-gray-800 mb-3" />
                                    <div className="space-y-3">
                                        <Link to="/profile" className="block text-sm text-gray-300 hover:text-white" onClick={() => setShowDropdown(false)}>Account Settings</Link>
                                        <Link to="/bookings" className="block text-sm text-gray-300 hover:text-white" onClick={() => setShowDropdown(false)}>My Bookings</Link>
                                        {user.email === 'admin@movie.com' && (
                                            <Link to="/admin/bookings" className="block text-sm text-red-500 font-bold" onClick={() => setShowDropdown(false)}>Admin Dashboard</Link>
                                        )}
                                        <button onClick={handleLogout} className="block text-sm text-gray-400 hover:text-red-400 w-full text-left">Logout</button>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <Link to="/login" className="bg-red-600 text-white font-bold px-6 py-2 rounded-full hover:bg-red-700 transition">Sign In</Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
