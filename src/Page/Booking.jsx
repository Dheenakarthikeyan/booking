import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import BookingSuccess from "./BookingSuccess";
import Notification from "../Components/Notification";

const MovieBooking = ({ url }) => {

  const { id: rawId } = useParams();
  const id = rawId?.trim();
  const navigate = useNavigate();



  const { data: movie } = useFetch(url);

  const fetchBookings = async () => {
    try {
      const response = await fetch(`http://localhost:3000/bookings/${id}`);
      if (response.ok) {
        const data = await response.json();
        setBookedSeats(data);
      }
    } catch (error) {
      console.error("Failed to fetch bookings:", error);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, [id]);


  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState({});
  const [showPayment, setShowPayment] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [notification, setNotification] = useState(null);

  const showNotify = (message, type = "success") => {
    setNotification({ message, type });
  };

  console.log(bookedSeats,selectedDate,selectedTime,selectedSeats)

  // 🎯 100 Seats
  const seats = Array.from({ length: 100 }, (_, i) => i + 1);
  const rows = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];

  // 📅 Generate 2 Months Dates (60 Days)
  const generateDates = () => {
    const dates = [];
    const today = new Date();

    for (let i = 0; i < 60; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);

      dates.push(
        d.toLocaleDateString("en-IN", {
          day: "numeric",
          month: "short",
        })
      );
    }
    return dates;
  };

  const dates = generateDates();

  // ⏰ 5 Time Slots
  const times = ["10:00 AM", "12:00 PM", "3:00 PM", "6:00 PM", "8:00 PM"];

  useEffect(() => {
    setSelectedSeats([]);
  }, [selectedDate, selectedTime]);

  const toggleSeat = (seat) => {
    const isBooked =
      bookedSeats[selectedDate]?.[selectedTime]?.includes(seat);

    if (isBooked) return;

    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter((s) => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleInitiatePayment = () => {
    if (!selectedDate || !selectedTime || selectedSeats.length === 0) {
      showNotify("Please select Date, Time and Seats.", "error");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
        showNotify("Please login first to book tickets! 🚪🚶", "error");
        setTimeout(() => navigate("/login"), 2000);
        return;
    }

    setShowPayment(true);
  };

  const handleConfirmBooking = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const token = localStorage.getItem("token");

    try {
      // Simulate 2s payment processing delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      const response = await fetch("http://localhost:3000/bookings", {
        method: "POST",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          movieId: id.trim(),
          date: selectedDate,
          time: selectedTime,
          selectedSeats: selectedSeats.map(s => s.id),
          paymentStatus: "Completed"
        }),
      });

      const result = await response.json();

      if (response.ok) {
        showNotify("Booking confirmed successfully! 🎉");
        // Also update local state for immediate feedback
        const updated = { ...bookedSeats };
        if (!updated[selectedDate]) updated[selectedDate] = {};
        if (!updated[selectedDate][selectedTime])
          updated[selectedDate][selectedTime] = [];

        updated[selectedDate][selectedTime] = [
          ...updated[selectedDate][selectedTime],
          ...selectedSeats.map(s => s.id),
        ];

        setBookedSeats(updated);
        const latestPrice = selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
        const bookedSeatIds = selectedSeats.map(s => s.id);
        
        setSelectedSeats([]);
        setShowPayment(false);
        setIsProcessing(false);
        setTimeout(() => {
            navigate(`/BookingSuccess/${id}`, { state: { date: selectedDate, time: selectedTime, seats: bookedSeatIds, totalPrice: latestPrice } });
        }, 1500);
      } else {
        showNotify(result.error || "Failed to confirm booking.", "error");
        setShowPayment(false);
        setIsProcessing(false);
      }
    } catch (error) {
      console.error("Error confirming booking:", error);
      showNotify("Error confirming booking.", "error");
      setShowPayment(false);
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-6">
      {notification && (
        <Notification 
          message={notification.message} 
          type={notification.type} 
          onClose={() => setNotification(null)} 
        />
      )}
      <h1 className="text-4xl text-center font-bold mb-6">
        🎬 Theatre Booking
      </h1>

      {movie
        .filter((movie1) => movie1.id == id)
        .map((movie1) => (
          <div key={movie1.id} >
            <div className="flex items-center gap-15 container mx-auto pl-30  m-10">
              <figure>
                <img className="w-[350px] h-[550px] object-cover border-[2px] border-white rounded-2xl" src={movie1.movieImage} alt="Movie" />
              </figure>

              <div >
                <h2 className="text-9xl text-white italic  font-bold">{movie1.title}</h2>
                <p className="text-2xl text-white italic font-medium my-10">{movie1.description}</p>

                <div className="mt-3 text-2xl italic flex flex-wrap gap-6">
                  <span className="bg-white text-black px-2 py-1 rounded">
                    🎬 {movie1.language}
                  </span>
                  <span className="bg-white text-black px-2 py-1 rounded">
                    ⏱️ {movie1.duration}
                  </span>
                  <span className="bg-white text-black px-2 py-1 rounded">
                    📅 {movie1.releaseDate}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}


      {/* 📅 DATE SELECTOR */}
      <div className="flex gap-3 overflow-x-auto mb-6 pb-2">
        {dates.map((date) => (
          <button
            key={date}
            onClick={() => setSelectedDate(date)}
            className={`px-4 py-2 rounded-lg whitespace-nowrap transition
              ${selectedDate === date
                ? "bg-red-500 scale-105"
                : "bg-gray-800 hover:bg-gray-600"}
            `}
          >
            {date}
          </button>
        ))}
      </div>

      {/* ⏰ TIME SELECTOR */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        {times.map((time) => (
          <button
            key={time}
            onClick={() => setSelectedTime(time)}
            className={`px-6 py-2 rounded-lg transition
              ${selectedTime === time
                ? "bg-green-500 scale-105"
                : "bg-gray-800 hover:bg-gray-600"}
            `}
          >
            {time}
          </button>
        ))}
      </div>

      {/* 🎬 CURVED SCREEN */}
      <div className="flex flex-col items-center mb-16 mt-10">
        <div className="w-[85%] h-16 bg-gradient-to-t from-indigo-500/30 to-transparent rounded-b-[40%] border-b-8 border-indigo-400/50 shadow-[0_20px_40px_-10px_rgba(99,102,241,0.3)] flex items-center justify-center pb-4 backdrop-blur-sm">
          <p className="text-center tracking-[1.5em] text-xs text-indigo-200 font-black uppercase drop-shadow-lg animate-pulse">
            SCREEN THIS WAY
          </p>
        </div>
      </div>

      {/* 💺 COMPLEX SEATING LAYOUT */}
      <div className="space-y-8 flex flex-col items-center max-w-4xl mx-auto overflow-x-auto pb-6">
        {[
          {
            tier: "₹480 VIP GOLD",
            price: 480,
            rows: [
              { label: "A", seats: 12, gaps: [2, 10] },
              { label: "B", seats: 12, gaps: [2, 10] }
            ],
            color: "border-yellow-500"
          },
          {
            tier: "₹260 PREMIUM SILVER",
            price: 260,
            rows: [
              { label: "C", seats: 16, gaps: [4, 12] },
              { label: "D", seats: 16, gaps: [4, 12] },
              { label: "E", seats: 16, gaps: [4, 12] },
              { label: "F", seats: 16, gaps: [4, 12] }
            ],
            color: "border-gray-400"
          },
          {
            tier: "₹190 EXECUTIVE",
            price: 190,
            rows: [
              { label: "G", seats: 16, gaps: [4, 12] },
              { label: "H", seats: 16, gaps: [4, 12] }
            ],
            color: "border-blue-400"
          },
          {
            tier: "₹100 NORMAL",
            price: 100,
            rows: [
              { label: "I", seats: 16, gaps: [4, 12] },
              { label: "J", seats: 10, gaps: [3, 7] }
            ],
            color: "border-green-400"
          }
        ].map((section, secIdx) => (
          <div key={secIdx} className="w-full flex flex-col items-center relative group">
             <div className="text-[10px] text-gray-500 font-black tracking-[0.3em] mb-4 border-b border-white/5 w-full text-center pb-2 uppercase italic transition group-hover:text-white/50">
                 {section.tier}
             </div>
             <div className="space-y-4">
               {section.rows.map((row) => (
                 <div key={row.label} className="flex items-center justify-center gap-2 md:gap-3">
                    <span className="w-8 text-gray-600 font-black text-xs text-center">{row.label}</span>
                    
                    {Array.from({ length: row.seats }, (_, i) => i + 1).map((seatIndex) => {
                       const seatId = `${row.label}${seatIndex}`;
                       const isBooked = bookedSeats[selectedDate]?.[selectedTime]?.includes(seatId);
                       const isSelected = selectedSeats.find(s => s.id === seatId);

                       // Determine Aisles (gap) based on section config
                       const isGap = section.rows.find(r => r.label === row.label).gaps.includes(seatIndex);

                       return (
                         <React.Fragment key={seatId}>
                           <div
                             onClick={() => {
                               if (isBooked) return;
                               if (isSelected) {
                                  setSelectedSeats(selectedSeats.filter((s) => s.id !== seatId));
                               } else {
                                  setSelectedSeats([...selectedSeats, { id: seatId, price: section.price, tier: section.tier }]);
                               }
                             }}
                             className={`relative w-7 h-7 sm:w-10 sm:h-10 flex items-center justify-center text-[10px] sm:text-[11px] rounded-xl border-b-[4px] cursor-pointer transition-all duration-300 font-black overflow-hidden group/seat
                               ${isBooked ? "bg-white/5 border-white/10 text-gray-700 cursor-not-allowed grayscale" : ""}
                               ${!isBooked && !isSelected ? `bg-white/10 text-white/40 ${section.color} hover:bg-white/20 hover:scale-110 active:scale-95 shadow-lg shadow-black/20` : ""}
                               ${isSelected ? "bg-green-500 border-green-700 text-white scale-125 shadow-[0_0_20px_rgba(34,197,94,0.4)] z-10" : ""}
                             `}
                           >
                              <div className={`absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none`}></div>
                              {seatIndex}
                           </div>
                           {isGap && <div className="w-4 sm:w-8"></div> /* Aisle gap */}
                         </React.Fragment>
                       );
                    })}

                 </div>
               ))}
             </div>
          </div>
        ))}
      </div>

      {/* 🎟 LEGEND */}
      <div className="flex justify-center gap-6 mt-8 text-sm">
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-gray-700 rounded"></span> Available
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-yellow-400 rounded"></span> Selected
        </div>
        <div className="flex items-center gap-2">
          <span className="w-4 h-4 bg-red-600 rounded"></span> Booked
        </div>
      </div>

      {/* 📄 SUMMARY */}
      {
        movie.map( s => ( s.id == id ? <div key={s.id} className="bg-gray-900 border border-gray-800 p-6 rounded-lg mt-6 max-w-md mx-auto shadow-xl">
        <h3 className="font-bold text-lg mb-4 text-gray-300 border-b border-gray-700 pb-2">Booking Summary</h3>
        <p className="flex justify-between mb-2"><span className="text-gray-400">Date:</span> <span className="font-medium">{selectedDate || "Select Date"}</span></p>
        <p className="flex justify-between mb-2"><span className="text-gray-400">Time:</span> <span className="font-medium">{selectedTime || "Select Time"}</span></p>
        <p className="flex justify-between mb-2">
            <span className="text-gray-400">Seats ({selectedSeats.length}):</span> 
            <span className="font-medium text-right max-w-[200px] break-words">
                {selectedSeats.length > 0 ? selectedSeats.map(s => s.id).join(", ") : "None"}
            </span>
        </p>

        <div className="font-bold border-t border-gray-600 mt-4 pt-4 flex justify-between text-xl text-green-400">
          <span>Total:</span>
          <span>₹{selectedSeats.reduce((sum, seat) => sum + seat.price, 0)}</span>
        </div>

      </div> : null))
      }

      {/* ✅ BUTTONS */}
      <div className="max-w-md mx-auto mt-10 grid grid-cols-2 gap-4">
          <button
            onClick={handleInitiatePayment}
            className="group relative bg-indigo-600 font-black py-4 rounded-2xl overflow-hidden transition-all hover:bg-indigo-500 hover:scale-105 active:scale-95 shadow-[0_10px_20px_-5px_rgba(79,70,229,0.5)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            Book Tickets 🎫
          </button>

        <Link to="/" className="w-full">
          <button
            className="w-full bg-white/5 backdrop-blur-md border border-white/10 font-black py-4 rounded-2xl hover:bg-white/10 transition-all text-white shadow-xl"
          >
            Cancel
          </button>
        </Link>
      </div>

      {/* 💳 REALTIME PAYMENT OVERLAY */}
      {showPayment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
             <div className="bg-gray-900 border border-gray-700 w-full max-w-md rounded-2xl p-6 shadow-2xl relative">
                
                {!isProcessing && (
                    <button 
                       onClick={() => setShowPayment(false)}
                       className="absolute top-4 right-4 text-gray-400 hover:text-white"
                    >
                       ✕
                    </button>
                )}

                <h2 className="text-2xl font-bold text-white mb-6 text-center">Secure Checkout</h2>
                
                <div className="bg-gray-800 p-4 rounded-lg mb-6 shadow-inner">
                   <div className="flex justify-between items-center text-sm mb-2 text-gray-300">
                       <span>Merchant</span>
                       <span className="font-bold text-white">MovieTicket Pro</span>
                   </div>
                   <div className="flex justify-between items-center text-sm mb-2 text-gray-300">
                       <span>Seats</span>
                       <span className="font-bold text-white">{selectedSeats.length} Selected</span>
                   </div>
                   <div className="border-t border-gray-600 my-2 pt-2 flex justify-between items-center">
                       <span className="text-gray-400">Total Due</span>
                       <span className="text-2xl font-bold text-green-400">₹{selectedSeats.reduce((sum, seat) => sum + seat.price, 0)}</span>
                   </div>
                </div>

                <form onSubmit={handleConfirmBooking} className="space-y-4">
                   <div>
                       <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">Card Details</label>
                       <div className="bg-gray-800 border border-gray-700 rounded p-3 flex items-center">
                           <span className="text-gray-400 mr-2">💳</span>
                           <input 
                              type="text" 
                              required
                              placeholder="0000 0000 0000 0000" 
                              maxLength="19"
                              className="bg-transparent w-full outline-none text-white font-mono text-sm"
                           />
                       </div>
                   </div>
                   <div className="flex gap-4">
                       <div className="w-1/2">
                           <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">Expiry</label>
                           <input type="text" required placeholder="MM/YY" maxLength="5" className="w-full bg-gray-800 border border-gray-700 rounded p-3 outline-none text-white font-mono text-sm" />
                       </div>
                       <div className="w-1/2">
                           <label className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1 block">CVC</label>
                           <input type="password" required placeholder="•••" maxLength="3" className="w-full bg-gray-800 border border-gray-700 rounded p-3 outline-none text-white font-mono text-sm" />
                       </div>
                   </div>

                   <button 
                       type="submit" 
                       disabled={isProcessing}
                       className={`w-full font-bold py-4 rounded-lg mt-6 flex justify-center items-center transition
                          ${isProcessing ? 'bg-indigo-600 cursor-not-allowed' : 'bg-indigo-500 hover:bg-indigo-600'}
                       `}
                   >
                       {isProcessing ? (
                           <div className="flex items-center gap-2">
                               <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                               Processing Payment...
                           </div>
                       ) : (
                           `Pay ₹${selectedSeats.reduce((sum, seat) => sum + seat.price, 0)} Securely`
                       )}
                   </button>
                </form>

                <p className="text-center text-xs text-gray-500 mt-4 flex items-center justify-center gap-1">
                   🔒 Payments are processed dynamically via AES 256.
                </p>
             </div>
          </div>
      )}

    </div>
  );
};

export default MovieBooking;