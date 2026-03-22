import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
        setUser(JSON.parse(storedUser));
    } else {
        navigate("/login");
    }
  }, [navigate]);

  if (!user) return null;

  return (
    <div className="bg-black min-h-screen text-white pt-24 px-6 flex justify-center pb-12">
       <div className="w-full max-w-xl bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl h-fit">
          <h2 className="text-3xl font-bold mb-8 border-b border-gray-800 pb-4">Account Settings</h2>
          
          <div className="flex flex-col items-center mb-8">
             <div className="w-24 h-24 rounded-full flex items-center justify-center bg-green-600 outline outline-4 outline-green-900 text-white font-bold text-5xl uppercase mb-4 shadow-xl">
                 {user.name.charAt(0)}
             </div>
             <h3 className="text-2xl font-bold">{user.name}</h3>
             <p className="text-gray-400">{user.email}</p>
          </div>

          <div className="space-y-4">
              <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1 block">Full Name</label>
                  <input type="text" readOnly value={user.name} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-white outline-none cursor-not-allowed" />
              </div>
              <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1 block">Email Address</label>
                  <input type="email" readOnly value={user.email} className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-gray-400 outline-none cursor-not-allowed" />
              </div>
              <div>
                  <label className="text-xs text-gray-500 uppercase tracking-wider font-bold mb-1 block">Password</label>
                  <input type="password" readOnly value="••••••••" className="w-full bg-gray-800 border border-gray-700 rounded p-3 text-gray-400 outline-none cursor-not-allowed" />
              </div>
          </div>
          
          <p className="text-xs text-gray-500 mt-8 text-center bg-gray-800 p-3 rounded">
             Note: Editing profile details is currently disabled in this demo version.
          </p>
       </div>
    </div>
  );
};

export default Profile;
