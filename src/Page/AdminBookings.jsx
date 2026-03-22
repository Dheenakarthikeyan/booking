import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
        navigate("/login");
        return;
    }

    fetch('http://localhost:3000/admin/bookings', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(async res => {
        const data = await res.json();
        if (!res.ok) {
            throw new Error(data.error || "Failed to load admin data");
        }
        return data;
    })
    .then(data => {
        setBookings(data);
        setLoading(false);
    })
    .catch(err => {
        console.error(err);
        setError(err.message);
        setLoading(false);
    });
  }, [navigate]);

  return (
    <div className="bg-black min-h-screen text-white pt-24 px-6 md:px-12 pb-12">
      <div className="flex justify-between items-center mb-10 border-b border-gray-800 pb-4">
        <h2 className="text-3xl font-bold text-red-500">Admin Dashboard - All Bookings</h2>
        <Link to="/" className="text-gray-400 hover:text-white">Exit Admin</Link>
      </div>
      
      {error && (
          <div className="bg-red-900 border border-red-500 text-red-100 p-4 rounded mb-6">
              {error}
          </div>
      )}

      {!error && loading ? (
          <p className="text-gray-400">Loading master ticket ledger...</p>
      ) : !error && bookings.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400 bg-gray-900 rounded-lg overflow-hidden">
                <thead className="text-xs text-gray-300 uppercase bg-gray-800 border-b border-gray-700">
                    <tr>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">User Email</th>
                        <th className="px-6 py-4">Movie</th>
                        <th className="px-6 py-4">Date & Time</th>
                        <th className="px-6 py-4">Seat</th>
                        <th className="px-6 py-4">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking) => (
                        <tr key={booking.id} className="border-b border-gray-800 hover:bg-gray-800 transition">
                            <td className="px-6 py-4 font-bold">#{booking.id}</td>
                            <td className="px-6 py-4"><span className="text-white">{booking.userEmail}</span><br/><span className="text-xs">{booking.userName}</span></td>
                            <td className="px-6 py-4 text-white font-medium">{booking.movieTitle}</td>
                            <td className="px-6 py-4">{booking.date} at {booking.time}</td>
                            <td className="px-6 py-4">Seat <b className="text-white">{booking.seatNumber}</b></td>
                            <td className="px-6 py-4">
                                <span className={`px-2 py-1 rounded text-xs text-white ${booking.paymentStatus === 'Completed' ? 'bg-green-600' : 'bg-yellow-600'}`}>
                                    {booking.paymentStatus}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
      ) : !error && (
          <p className="text-gray-400">No bookings exist entirely in the database yet.</p>
      )}
    </div>
  );
};

export default AdminBookings;
