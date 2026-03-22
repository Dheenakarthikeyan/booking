import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/login");
        return;
    }

    fetch('http://localhost:3000/my-bookings', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(res => res.json())
    .then(data => {
        setBookings(data);
        setLoading(false);
    })
    .catch(err => {
        console.error(err);
        setLoading(false);
    });
  }, [navigate]);

  return (
    <div className="bg-black min-h-screen text-white pt-24 px-6 md:px-12 pb-12">
      <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-4">
        <h2 className="text-3xl font-bold">My Bookings</h2>
        <Link to="/" className="text-red-500 hover:text-red-400">Back to Home</Link>
      </div>
      
      {loading ? (
          <p className="text-gray-400">Loading your tickets...</p>
      ) : bookings.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookings.map((booking) => (
              <div key={booking.id} className="bg-gray-900 rounded-lg p-5 border border-gray-800 hover:border-gray-600 transition flex gap-4">
                 {booking.movieImage && (
                     <img src={booking.movieImage} alt={booking.movieTitle} className="w-24 h-36 object-cover rounded-md shadow-lg" />
                 )}
                 <div className="flex flex-col flex-1 text-sm">
                    <h3 className="font-bold text-lg mb-2 text-white">{booking.movieTitle}</h3>
                    <p className="text-gray-400"><span className="text-white">Date:</span> {booking.date}</p>
                    <p className="text-gray-400"><span className="text-white">Time:</span> {booking.time}</p>
                    <p className="text-gray-400"><span className="text-white">Seat:</span> {booking.seatNumber}</p>
                    <div className="bg-gray-800 p-2 rounded mt-2 text-xs border border-gray-700">
                        <p className="text-gray-400 mb-1"><strong>Payment History:</strong></p>
                        <p className="text-gray-300">Transaction ID: <span className="font-mono text-blue-400">TXN-000{booking.id}</span></p>
                        <p className="text-gray-300">Method: <span className="text-green-400">Secure Gateway</span></p>
                    </div>
                    <div className="mt-auto pt-4 flex justify-between items-center">
                       <span className={`px-2 py-1 rounded text-xs font-bold ${booking.paymentStatus === 'Completed' ? 'bg-green-600' : 'bg-yellow-600'}`}>
                           {booking.paymentStatus}
                       </span>
                    </div>
                 </div>
              </div>
            ))}
          </div>
      ) : (
          <div className="text-center py-20">
             <p className="text-gray-400 text-lg mb-4">You have no upcoming bookings.</p>
             <Link to="/MovieShowList" className="bg-red-600 text-white px-6 py-3 rounded hover:bg-red-700 transition">Explore Movies</Link>
          </div>
      )}
    </div>
  );
};

export default MyBookings;
