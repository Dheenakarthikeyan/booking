import React, { useEffect } from "react";

const Notification = ({ message, type = "success", onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === "success" ? "bg-green-500" : "bg-red-500";
  const icon = type === "success" ? "✅" : "❌";

  return (
    <div className={`fixed top-5 left-1/2 transform -translate-x-1/2 z-[9999] px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-3 text-white border border-white/20 backdrop-blur-md animate-in slide-in-from-top duration-500 ${bgColor}`}>
      <span className="text-xl">{icon}</span>
      <p className="font-bold tracking-tight">{message}</p>
      <button 
        onClick={onClose}
        className="ml-4 text-white/50 hover:text-white transition"
      >
        ✕
      </button>
    </div>
  );
};

export default Notification;
