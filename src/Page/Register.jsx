import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        const { name, email, password, confirmPassword } = formData;

        if (!name || !email || !password || !confirmPassword) {
            setError("All fields are required.");
            return;
        }

        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        setError("");
        setLoading(true);

        try {
            const response = await fetch("http://localhost:3000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password })
            });
            const data = await response.json();

            if (response.ok) {
                setSuccess(data.message || "Registration successful 🎉 Redirecting...");
                setFormData({ name: "", email: "", password: "", confirmPassword: "" });
                setTimeout(() => navigate("/login"), 1500);
            } else {
                setError(data.error || "Registration failed.");
            }
        } catch (err) {
            setError("Could not reach the server.");
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

            <div className="relative z-10 bg-black/80 sm:bg-black/80 w-full sm:max-w-[450px] p-10 sm:p-12 rounded-xl sm:border sm:border-gray-800 shadow-2xl my-8">
                
                <h2 className="text-3xl font-bold text-white mb-8">Sign Up</h2>

                {error && (
                    <div className="bg-[#e87c03] text-white p-3 rounded mb-4 text-sm">
                        {error}
                    </div>
                )}

                {success && (
                    <div className="bg-green-600 text-white p-3 rounded mb-4 text-sm">
                        {success}
                    </div>
                )}

                <form onSubmit={handleRegister} className="flex flex-col gap-4">
                    
                    <div className="relative">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="peer w-full bg-[#333] text-white px-4 pt-6 pb-2 rounded-md outline-none focus:bg-[#454545] border-b-2 border-transparent focus:border-[#e50914] transition-colors"
                            placeholder=" "
                        />
                        <label className="absolute text-gray-400 left-4 top-4 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs pointer-events-none">
                            Full Name
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="peer w-full bg-[#333] text-white px-4 pt-6 pb-2 rounded-md outline-none focus:bg-[#454545] border-b-2 border-transparent focus:border-[#e50914] transition-colors"
                            placeholder=" "
                        />
                        <label className="absolute text-gray-400 left-4 top-4 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs pointer-events-none">
                            Email address
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="peer w-full bg-[#333] text-white px-4 pt-6 pb-2 rounded-md outline-none focus:bg-[#454545] border-b-2 border-transparent focus:border-[#e50914] transition-colors"
                            placeholder=" "
                        />
                        <label className="absolute text-gray-400 left-4 top-4 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs pointer-events-none">
                            Password
                        </label>
                    </div>

                    <div className="relative">
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="peer w-full bg-[#333] text-white px-4 pt-6 pb-2 rounded-md outline-none focus:bg-[#454545] border-b-2 border-transparent focus:border-[#e50914] transition-colors"
                            placeholder=" "
                        />
                        <label className="absolute text-gray-400 left-4 top-4 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-xs pointer-events-none">
                            Confirm Password
                        </label>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#e50914] text-white font-bold py-3.5 rounded-md mt-6 hover:bg-[#c10811] transition duration-300"
                    >
                        {loading ? "Signing up..." : "Sign Up"}
                    </button>

                </form>

                <div className="mt-8 text-gray-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-white hover:underline font-medium">
                        Sign In.
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;