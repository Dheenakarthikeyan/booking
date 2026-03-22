import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MiddleMovie from "../Components/MiddleMovie";
import Trailer from "../Components/Trailer";
import bg from "../assets/bg.svg";
import time from "../assets/Clock.svg";
import data from "../assets/Calendar.svg";
import arrow from "../assets/Arrow.svg";

const bgimage = [
    {
        title: "Kandukondain Kandukondain",
        genre: ["Romance", "| Drama"],
        ReleaseDate: "2000",
        Duration: "2h 45m",
        description: "Kandukondain Kandukondain is a romantic drama about two sisters with different personalities navigating love and heartbreak. While one believes in grand romance, the other values stability and responsibility.",
        image: "https://i.ytimg.com/vi/6XW6hqMbjho/maxresdefault.jpg",
    },
    {
        title: "Thalaiva",
        genre: ["Action", "| Political Action"],
        ReleaseDate: "2024",
        Duration: "2h 50m",
        description: "A young man returns to Tamil Nadu ahead of the 2026 elections. Seeing the struggles of his family transforms him into a bold Chief Minister candidate for the entire state.",
        image: "https://image-resizer-cloud-api.akamaized.net/image/D04767BC-0416-42ED-BD2A-748A58AB4CE7/0-16x9.jpg?width=1920&updatedTime=2023-12-12T20:23:52Z&dt=Web",
    },
    {
        title: "Mankatha",
        genre: ["Action", "| Adventure", "| Sci-Fi"],
        ReleaseDate: "2014",
        Duration: "2h 1m",
        description: "A group of unlikely space criminals is forced to work together despite their differences. When a powerful villain threatens to destroy the galaxy, they take on a dangerous mission to stop him.",
        image: "https://i.ytimg.com/vi/cS1fArN-kag/maxresdefault.jpg",
    },
    {
        title: "Leo",
        genre: ["Action", "|  Thriller"],
        ReleaseDate: "2023",
        Duration: "2h 44m",
        description: "A quiet café owner’s peaceful life is shattered when his violent past resurfaces. As dangerous enemies close in, he is forced to confront his hidden identity in this intense action thriller.",
        image: "https://i.ytimg.com/vi/U6gFIolLFkg/maxresdefault.jpg",
    },
    {
        title: "Guardians of the Galaxy",
        genre: ["Action", "| Adventure", "| Sci-Fi"],
        ReleaseDate: "2018",
        Duration: "2h 8m",
        description: "A group of misfit criminals joins forces after stealing a powerful artifact. Hunted by enemies, they must learn to work together to save the galaxy from destruction.",
        image: bg,
    }
];

const HomeScreen = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev === bgimage.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const current = bgimage[index];

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <div 
                className="h-screen w-full bg-cover bg-center transition-all duration-1000 flex items-center"
                style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.4)), url(${current.image})` }}
            >
                <div className="w-[90%] mx-auto py-20 animate-fadeIn">
                    <div className="max-w-3xl space-y-6">
                        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter drop-shadow-2xl">
                            {current.title}
                        </h1>

                        <div className="flex flex-wrap gap-6 items-center font-bold text-gray-300">
                            {current.genre.map((g, i) => <span key={i}>{g}</span>)}
                            <div className="flex items-center gap-2"><img src={data} className="w-4" alt="date" /> {current.ReleaseDate}</div>
                            <div className="flex items-center gap-2"><img src={time} className="w-4" alt="time" /> {current.Duration}</div>
                        </div>

                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl bg-black/20 p-4 rounded-xl backdrop-blur-sm border-l-4 border-red-600">
                            {current.description}
                        </p>

                        <div className="flex gap-4">
                            <Link to="/MovieShowList">
                                <button className="bg-red-600 hover:bg-red-700 text-white font-black px-8 py-4 rounded-full flex items-center gap-2 transition transform hover:scale-105 shadow-lg shadow-red-600/30">
                                    Explore Movies <img src={arrow} className="w-4" alt="arrow" />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                    {bgimage.map((_, i) => (
                        <div 
                            key={i} 
                            onClick={() => setIndex(i)}
                            className={`h-2 rounded-full transition-all cursor-pointer ${i === index ? 'w-10 bg-red-600' : 'w-2 bg-white/20'}`}
                        ></div>
                    ))}
                </div>
            </div>

            {/* Featured Sections */}
            <div className="py-20 space-y-20 bg-gradient-to-b from-black via-gray-900 to-black">
                <MiddleMovie url="http://localhost:3000/movies" />
                <Trailer />
            </div>
        </div>
    );
};

export default HomeScreen;