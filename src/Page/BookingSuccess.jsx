import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import useFetchDetails from "../hooks/useFetchDetails";


const BookingSuccess = () => {

  const { id } = useParams();
  const location = useLocation();
  const ticket = location.state;

  console.log(ticket)

  const { data: movie } = useFetchDetails(`http://localhost:3000/movies/${id}`);

  if (!movie) {
    return <div className="text-center mt-20 text-xl">Loading...</div>;
  }
  return (
    <div className="fixed inset-0 min-h-screen bg-cover bg-top bg-no-repeat z-50 flex items-center justify-center overflow-y-auto" style={{ backgroundImage: `url(${movie.movieImage})` }}>
       
       {/* Glassmorphic Ambient Gradient Overlay */}
       <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
       <div className="absolute inset-0 backdrop-blur-[8px] bg-black/30"></div>
       
       <div className="relative w-full flex items-center justify-center py-10 z-10">

        {/* Ticket Card */}
        <div className="relative bg-white/5 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in duration-500">
           
           {/* Top Section */}
           <div className="p-8 pb-4 text-center">
              {/* Success Icon */}
              <div className="flex justify-center mb-4">
                <div className="bg-green-500 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl shadow-lg ring-8 ring-green-500/20 animate-bounce">
                  ✓
                </div>
              </div>

              <h1 className="text-3xl font-extrabold text-white mb-2">
                Booking Success! 🎉
              </h1>

              <p className="text-gray-400 mb-6 font-medium">
                Your cinematic journey starts here. 🎬
              </p>

              {/* Movie Info Header */}
              <div className="mb-6">
                 <h2 className="text-3xl font-black text-green-400 tracking-tight">{movie.title}</h2>
                 <p className="text-sm text-gray-400 font-bold uppercase tracking-widest mt-1">
                    Starring: <span className="text-white">{movie.hero?.name || "N/A"}</span>
                 </p>
                 <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] mt-3">{movie.language} • {movie.duration}</p>
              </div>
           </div>

           {/* Perforated Divider (Real Ticket Effect) */}
           <div className="relative h-6 flex items-center justify-center px-4 overflow-hidden">
             <div className="absolute left-[-16px] w-8 h-8 bg-black rounded-full border border-white/10"></div>
             <div className="absolute right-[-16px] w-8 h-8 bg-black rounded-full border border-white/10"></div>
             <div className="w-full border-b-2 border-dashed border-white/20"></div>
           </div>

           {/* Ticket Details Body */}
           <div className="p-8 pt-6 space-y-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                 <div className="space-y-1">
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Release Date</p>
                    <p className="text-white font-semibold">{movie.releaseDate}</p>
                 </div>
                 <div className="space-y-1 text-right">
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Show Time</p>
                    <p className="text-green-400 font-bold text-lg">{ticket?.time || "N/A"}</p>
                 </div>
                 <div className="space-y-1">
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Booking Date</p>
                    <p className="text-white font-semibold">{ticket?.date || "N/A"}</p>
                 </div>
                 <div className="space-y-1 text-right">
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Theater</p>
                    <p className="text-white font-semibold">CR Cinema Hall 1</p>
                 </div>
              </div>

              <div className="bg-white/10 rounded-2xl p-4 flex justify-between items-center border border-white/5">
                 <div>
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Seats ({ticket?.seats?.length || 0})</p>
                    <p className="text-white font-bold text-lg">{ticket?.seats?.length > 0 ? ticket.seats.join(", ") : "N/A"}</p>
                 </div>
                 <div className="text-right">
                    <p className="text-gray-500 font-bold uppercase text-[10px]">Total Price</p>
                    <p className="text-green-400 font-black text-xl italic">₹{ticket?.totalPrice || "0"}</p>
                 </div>
              </div>

              {/* QR Code Section */}
              <div className="flex flex-col items-center pt-4 border-t border-white/10">
                 <div className="bg-white p-2 rounded-xl shadow-inner mb-2 w-32 h-32 flex items-center justify-center">
                    {/* Placeholder for QR Code */}
                    <img src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=BOOKING_${ticket?.id || 'TEST'}_${movie.title}`} alt="QR Code" className="w-full h-full" />
                 </div>
                 <p className="text-[10px] text-gray-500 font-mono tracking-widest">SCAN AT ENTRANCE • CONFIRMED</p>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4 mt-6 print:hidden">
                <button 
                  onClick={() => window.print()}
                  className="flex-1 bg-white hover:bg-gray-200 text-black font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition transform hover:scale-105 active:scale-95 shadow-lg"
                >
                  🖨️ Print Ticket
                </button>
                <Link to="/bookings" className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl flex items-center justify-center gap-2 transition transform hover:scale-105 active:scale-95 shadow-lg">
                   🎟️ My Tickets
                </Link>
              </div>

              <Link to="/" className="block text-center text-gray-400 hover:text-white text-sm font-medium mt-4 transition hover:underline">
                 ← Back to Cinema Home
              </Link>
           </div>
        </div>
      </div>
    </div>
  );
};

export default BookingSuccess;