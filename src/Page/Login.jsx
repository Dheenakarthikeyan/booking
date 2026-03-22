import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please enter a valid email or phone number.");
            return;
        }

        setError("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (response.ok) {
                // Save token & user to localStorage
                localStorage.setItem("token", data.token);
                localStorage.setItem("user", JSON.stringify(data.user));
                
                navigate("/");
            } else {
                setError(data.error || "Sorry, we can't find an account with this email address.");
            }
        } catch (err) {
            setError("Could not reach the server. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div 
          className="min-h-screen relative flex items-center justify-center bg-black"
          style={{
              backgroundImage: "url('https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-fa474fe5b820/a6d2f3d6-69d8-4f05-aa5c-59e51c72facf/US-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center"
          }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60 sm:bg-black/50"></div>

            <div className="relative z-10 bg-black/80 sm:bg-black/80 w-full sm:max-w-[450px] p-10 sm:p-16 rounded-xl sm:border sm:border-gray-800 shadow-2xl">
                
                <h2 className="text-3xl font-bold text-white mb-8">Sign In</h2>

                {error && (
                    <div className="bg-[#e87c03] text-white p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div className="relative">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value.trim())}
                            className="peer  w-full bg-[#333] text-white px-4 pt-6 pb-1 rounded-md outline-none focus:bg-[#454545] border-b-2 border-transparent focus:border-[#e50914] transition-colors"
                            placeholder=" "
                        />
                        <label className="absolute  text-gray-400 left-4 top-4 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs pointer-events-none">
                            Email or phone number
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="peer w-full  bg-[#333] text-white px-4 pt-6 pb-2 rounded-md outline-none focus:bg-[#454545] border-b-2 border-transparent focus:border-[#e50914] transition-colors"
                            placeholder=" "
                        />
                        <label className="absolute  text-gray-400 left-4 top-4 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs pointer-events-none">
                            Password
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#e50914] text-white font-bold py-3.5 rounded-md mt-6 hover:bg-[#c10811] transition duration-300"
                    >
                        {loading ? "Signing In..." : "Sign In"}
                    </button>

                    <div className="flex justify-between items-center text-sm text-gray-400 mt-2">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="w-4 h-4 accent-gray-400 rounded bg-[#333] border-none" />
                            Remember me
                        </label>
                        <span className="hover:underline cursor-pointer">Need help?</span>
                    </div>
                </form>

                <div className="mt-16 text-gray-400">
                    New to MovieTicket?{" "}
                    <Link to="/register" className="text-white hover:underline font-medium">
                        Sign up now. 
                    </Link>
                </div>
                
                <div className="mt-4 text-xs text-gray-500 leading-snug">
                    This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="text-[#0071eb] cursor-pointer hover:underline">Learn more.</span>
                </div>
            </div>
        </div>
    );
};

export default Login;