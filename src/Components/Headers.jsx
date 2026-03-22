import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import bg from "../assets/bg.svg";
import title from "../assets/marvelLogo.svg";
import time from "../assets/Clock.svg";
import data from "../assets/Calendar.svg";
import arrow from "../assets/Arrow.svg";
import { Link } from "react-router-dom";
import MiddleMovie from "./MiddleMovie";
import f1 from "../assets/f1.jpg"
import Trailer from "./Trailer";
import movieslogo from "../assets/font2.jpeg"


const Headers = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [inputvalue, setinputvalue] = useState("");

  const navigate = useNavigate();


  const [suggestions, setSuggestions] = useState([]);

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
  }

  const value = (e) => {
    e.preventDefault();

    return navigate(`/Search/?q=${inputvalue}`)
  }

  const titlelogo = [movieslogo, title]
  const bgimage = [
    {
      title: (
        <h1 className="sm:text-5xl md:text-7xl font-semibold py-6">
          Kandukondain Kandukondain
        </h1>
      ),

      genre: ["Romance", "| Drama"],
      ReleaseDate: "2000",
      Duration: "2h 45m",
      titlelogo1: titlelogo[0],
      description: (
        <p className="py-6">
          Kandukondain Kandukondain is a romantic drama about two sisters with different personalities navigating love and heartbreak.
          While one believes in grand romance, the other values stability and responsibility.
          Their journeys explore relationships, self-discovery, and the true meaning of love.
        </p>
      ),
      image:
        "https://i.ytimg.com/vi/6XW6hqMbjho/maxresdefault.jpg",
    },
    {
      title: (
        <h1 className="sm:text-5xl md:text-7xl text-black font-semibold py-6">
          Thalaiva
        </h1>
      ),
      genre: ["Action", "| Political Action"],
      ReleaseDate: "Lifetime",
      Duration: "Lifetime",
      titlelogo1: titlelogo[0],
      description: (
        <p className="font-medium text-base text-black py-6 leading-[130%]">
          A young man returns to Tamil Nadu ahead of the 2026 elections.
          Seeing the struggles of his family, relatives, and ordinary people transforms him.
          Believing that “the people are my strength,” he rises from his hometown to become a bold Chief Minister candidate for the entire state.

        </p>
      ),
      image: "https://image-resizer-cloud-api.akamaized.net/image/D04767BC-0416-42ED-BD2A-748A58AB4CE7/0-16x9.jpg?width=1920&updatedTime=2023-12-12T20:23:52Z&dt=Web",
    },
    {
      title: (
        <h1 className="sm:text-5xl md:text-7xl font-semibold leading-[117%] tracking-tight py-6">
          Mankatha
        </h1>
      ),
      genre: ["Action", "| Adventure", "| Sci-Fi"],
      ReleaseDate: "2014",
      Duration: "2h 1m",
      titlelogo1: titlelogo[0],
      description: (
        <p className="font-medium text-base py-6 leading-[130%]">
          A group of space criminals come together to save the galaxy from a powerful villain.A group of unlikely space criminals is forced to work together despite their differences. When a powerful villain threatens to destroy the galaxy, they take on a dangerous mission to stop him. Through courage and teamwork, they fight to save the universe from total destruction.
        </p>
      ),
      image: "https://i.ytimg.com/vi/cS1fArN-kag/maxresdefault.jpg",
    },
    {
      title: (
        <h1 className="sm:text-5xl md:text-7xl font-semibold py-6">
          Leo
        </h1>
      ),
      genre: ["Action", "|  Thriller"],
      ReleaseDate: "2023",
      Duration: "2h 44m",
      titlelogo1: titlelogo[0],
      description: (
        <p className="py-6">
          A quiet café owner’s peaceful life is shattered when his violent past resurfaces.
          As dangerous enemies close in, he is forced to confront his hidden identity.
          An intense action thriller unfolds as he fights to protect his family.
        </p>
      ),
      image: "https://i.ytimg.com/vi/U6gFIolLFkg/maxresdefault.jpg",
    },

    {
      title: (
        <h1 className="sm:text-5xl md:text-7xl font-semibold py-6 ">
          Leo 2
        </h1>
      ),
      genre: ["Action"],
      ReleaseDate: "Coming Soon",
      Duration: "-",
      titlelogo1: titlelogo[0],
      description: (
        <p className="py-6">
          The story continues as Leo faces new threats linked to his past.
          Old rivalries return, bringing bigger challenges and higher stakes.
          With action and emotion, he must once again rise to survive and protect those he loves.
        </p>
      ),
      image: "https://i.ytimg.com/vi/oeelOzrEqZ8/maxresdefault.jpg",
    },
    {
      title: (
        <h1 className="sm:text-5xl md:text-7xl font-semibold py-6">
          Thani Oruvan
        </h1>
      ),
      genre: ["Action", "| Adventure", "| Sci-Fi"],
      ReleaseDate: "2015-08-15",
      Duration: "2h 38m",
      titlelogo1: titlelogo[0],
      description: (
        <p className="font-medium text-base py-6 leading-[130%]">
          The film follows Mithran, an honest and intelligent IPS officer who wants to eliminate corruption in society. He discovers a powerful and highly intelligent scientist-businessman named Siddharth Abhimanyu, who secretly controls illegal activities using science and technology.
        </p>
      ),
      image: "https://tse3.mm.bing.net/th/id/OIP.Bz1swuA35LX1hCr8ElXBFgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3",
    },
    {
      title: (
        <h1 className="sm:text-5xl md:text-7xl font-semibold py-6">
          F1 :Formula 1
        </h1>
      ),
      genre: ["Action", " | Adventure", "| Sci-Fi"],
      ReleaseDate: "2017",
      Duration: "2h 16m",
      titlelogo1: titlelogo[0],
      description: (
        <p className="py-6 ">
          A high-speed world of elite racing where the fastest drivers compete for glory on global tracks.
          Top teams push cutting-edge technology and strategy to gain every possible advantage.
          Amid intense rivalries and pressure, one driver rises to chase victory and championship glory.
        </p>
      ),
      image: f1,
    },

    {
      title: (
        <h1 className="sm:text-5xl md:text-7xl font-semibold py-6">
          Soorarai Pottru
        </h1>
      ),
      genre: ["Drama", "| Biography"],
      ReleaseDate: "2020",
      Duration: "2h 33m",
      titlelogo1: titlelogo[0],
      description: (
        <p className="py-6 ">
          Inspired by true events, Soorarai Pottru follows a determined man from a small village who dreams of making air travel affordable for everyone.
          Facing financial struggles and powerful opposition, he fights against all odds to achieve his vision.
          His journey is one of courage, sacrifice, and relentless determination to change the aviation industry.
        </p>
      ),
      image:
        "https://i.ytimg.com/vi/WqqYb8EYM-Y/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDE2DCRUiUfy805lC2cuGcpOmSXCA",
    },



    {
      title: (
        <h1 className="sm:text-5xl md:text-7xl font-semibold py-6">
          Guardians <br /> of the Galaxy
        </h1>
      ),
      genre: ["Action", "| Adventure", "| Sci-Fi"],
      ReleaseDate: "2018",
      Duration: "2h 8m",
      titlelogo1: titlelogo[1],
      description: (
        <p className="font-medium text-base py-6 leading-[130%]">
          A group of misfit criminals joins forces after stealing a powerful artifact.
          Hunted by enemies, they must learn to work together despite their differences.
          Their journey turns them into unlikely heroes who save the galaxy.
        </p>
      ),
      image: bg,
    },
    {
      title: (
        <h1 className="sm:text-5xl md:text-7xl font-semibold py-6">
          VIP 2 (Velaiilla Pattadhari 2)
        </h1>
      ),
      genre: ["Action", "| Adventure", "| Sci-Fi"],
      ReleaseDate: "2018",
      Duration: "2h 8m",
      titlelogo1: titlelogo[0],
      description: (
        <p className="font-medium text-base py-6 leading-[130%]">
          Raghuvaran becomes a successful engineer and faces new corporate challenges.
          He clashes with Vasundhara, a powerful and arrogant businesswoman.
          Their intense rivalry tests his intelligence, confidence, and determination.
        </p>
      ),
      image: "https://pbs.twimg.com/media/C1JHuk9WQAIx2DF.jpg",
    },
    {

      title: (
        <h1 className="sm:text-5xl md:text-7xl font-semibold py-6">
          Maanaadu
        </h1>
      ),
      genre: ["Action", "| Sci-Fi", "| Thriller"],
      ReleaseDate: "2018",
      Duration: "2h 27m",
      titlelogo1: titlelogo[0],
      description: (
        <p className="font-medium text-base py-6 leading-[130%]">
          A man gets trapped in a mysterious time loop on the day of a political event.
          He must relive the same day repeatedly to stop a deadly assassination.
          With each loop, he uncovers secrets and races against time to change fate.
        </p>
      ),
      image: "https://image.airtel.tv/SONYLIV_VOD/SONYLIV_VOD_MOVIE_1000151166/LANDSCAPE_169/Maanaadu_Landscape_Thumb.jpg",
    }
  ];


  {/* const bgimage = [
    "https://i.ytimg.com/vi/cS1fArN-kag/maxresdefault.jpg",
    "https://acko-cms.ackoassets.com/acko_drive_38_c0f32d7742.webp",
    "https://i.ytimg.com/vi/U6gFIolLFkg/maxresdefault.jpg",
    "https://i.ytimg.com/vi/oeelOzrEqZ8/maxresdefault.jpg",
    "https://i.ytimg.com/vi/Vc7RV1y1FuY/maxresdefault.jpg",
    "https://m.media-amazon.com/images/M/MV5BZDIxMzFlNzEtMzMyOC00ZGFmLWIzZDYtMzA2YzljMGRhNTNhXkEyXkFqcGc@._V1_.jpg",
    "https://images.hindustantimes.com/tamil/img/2024/05/04/960x540/kkkk_1714839390730_1714839403269.jpg",

    bg
  ] */}

  const [index, setIndex] = useState(0);



  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev === bgimage.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);



  const [user, setUser] = useState(null);
  const [isLightMode, setIsLightMode] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const themes = [
    { name: "Dark Default", bg: "linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)", grad: "linear-gradient(to bottom right, #000000, #1a1a1a, #000000)" },
    { name: "Cyberpunk", bg: "linear-gradient(135deg, #ff007f 0%, #7928ca 100%)", grad: "linear-gradient(135deg, #ff007f 0%, #7928ca 50%, #ff007f 100%)" },
    { name: "Sunset", bg: "linear-gradient(45deg, #ff512f 0%, #dd2476 100%)", grad: "linear-gradient(45deg, #ff512f 0%, #dd2476 50%, #ff512f 100%)" },
    { name: "Ocean", bg: "linear-gradient(to right, #203a43, #2c5364)", grad: "linear-gradient(to right, #203a43, #0f2027, #2c5364)" },
    { name: "Aurora", bg: "linear-gradient(135deg, #00b09b, #96c93d)", grad: "linear-gradient(135deg, #00b09b, #228b22, #96c93d)" },
    { name: "Neon Blue", bg: "linear-gradient(135deg, #00c6ff, #0072ff)", grad: "linear-gradient(135deg, #00c6ff, #0072ff, #0a0b2e)" },
    { name: "Lava", bg: "linear-gradient(to bottom, #f12711, #f5af19)", grad: "linear-gradient(to bottom, #f12711, #f5af19, #f12711)" },
    { name: "Amethyst", bg: "linear-gradient(45deg, #9d50bb, #6e48aa)", grad: "linear-gradient(45deg, #9d50bb, #3c1053, #6e48aa)" },
    { name: "Emerald City", bg: "linear-gradient(to bottom right, #34e89e, #0f3443)", grad: "linear-gradient(to bottom right, #34e89e, #0f3443, #34e89e)" },
    { name: "Cosmic", bg: "linear-gradient(135deg, #ff00cc, #333399)", grad: "linear-gradient(135deg, #ff00cc, #333399, #1e0b36)" },
    { name: "Gold Dust", bg: "linear-gradient(45deg, #e6d070, #947a26)", grad: "linear-gradient(45deg, #e6d070, #947a26, #4a3c0d)" },
    { name: "Blood Moon", bg: "linear-gradient(135deg, #a80000, #3a0000)", grad: "linear-gradient(135deg, #a80000, #2e0202, #a80000)" },
    { name: "Deep Space", bg: "linear-gradient(to bottom, #434343 0%, #000000 100%)", grad: "linear-gradient(to bottom, #434343 0%, #111111 50%, #000000 100%)" },
    { name: "Miami", bg: "linear-gradient(45deg, #fc466b, #3f5efb)", grad: "linear-gradient(45deg, #fc466b, #1f0322, #3f5efb)" },
    { name: "Forest Canopy", bg: "linear-gradient(to bottom, #134e5e, #71b280)", grad: "linear-gradient(to bottom, #134e5e, #042e12, #71b280)" },
    { name: "Royal", bg: "linear-gradient(135deg, #141e30, #243b55)", grad: "linear-gradient(135deg, #141e30, #243b55, #14052f)" },
    { name: "Peach", bg: "linear-gradient(to right, #ed4264, #ffedbc)", grad: "linear-gradient(to right, #ed4264, #361611, #ffedbc)" },
    { name: "Night Sky", bg: "linear-gradient(to bottom, #0f2027, #2c5364)", grad: "linear-gradient(to bottom, #0f2027, #203a43, #2c5364)" },
    { name: "Fire", bg: "linear-gradient(135deg, #cb2d3e, #ef473a)", grad: "linear-gradient(135deg, #cb2d3e, #ef473a, #4a0b02)" },
    { name: "Ice", bg: "linear-gradient(45deg, #56ab2f, #a8e063)", grad: "linear-gradient(45deg, #56ab2f, #a8e063, #06374a)" },
    { name: "Grape", bg: "linear-gradient(to right, #8e2de2, #4a00e0)", grad: "linear-gradient(to right, #8e2de2, #4a00e0, #25052e)" },
  ];

  const applyTheme = (theme) => {
    document.documentElement.style.setProperty('--app-bg', theme.bg);
    document.documentElement.style.setProperty('--app-bg-gradient', theme.grad);
    localStorage.setItem('customTheme', JSON.stringify(theme));
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    // Check local storage for custom color theme
    const savedTheme = localStorage.getItem("customTheme");
    if (savedTheme) {
      applyTheme(JSON.parse(savedTheme));
    }

  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64str = reader.result;
        const updatedUser = { ...user, logo: base64str };
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${[bgimage[index].image]})` }}
        className="bg-cover bg-top h-screen w-full  "
      >
        <div className=" w-[93%] mx-auto">


          {/* Header */}
          <div className="flex justify-between items-center p-8">
            {/* Logo */}
            <img src={logo} alt="logo" className="w-28 md:w-36" />

            {/* Desktop Navbar */}
            <div className="hidden md:block">
              <nav className="flex items-center gap-6 lg:gap-10 px-6 py-3 rounded-3xl bg-white/10 border border-white/20">
                <Link to="/">Home</Link>
                <Link to="/movies/Popular">Popular</Link>
                <Link to="/movies/Upcoming">Upcoming</Link>
                <Link to="/MovieShowList">MovieList</Link>
              </nav>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-3 md:gap-6">
              {/* Search with Live Auto-Suggest */}
              <div className="relative hidden sm:block z-50">
                <form onSubmit={value}>
                  <label className="input border border-white/20 bg-white/10 rounded-2xl flex items-center">
                    <input
                      onChange={search}
                      type="search"
                      placeholder="Search movie & book..."
                      className="bg-transparent outline-none px-2 py-1 text-white text-sm w-48"
                      value={inputvalue}
                      autoComplete="off"
                    />
                  </label>
                </form>

                {suggestions.length > 0 && (
                  <div className="absolute top-12 w-full left-0 bg-gray-900 border border-gray-700 shadow-2xl rounded-xl overflow-hidden animate-fadeIn">
                    {suggestions.map(movie => (
                      <div
                        key={movie.id}
                        className="flex items-center gap-3 p-3 hover:bg-gray-800 transition-colors cursor-pointer text-white text-sm border-b border-gray-800 last:border-b-0"
                        onClick={() => {
                          setSuggestions([]);
                          setinputvalue('');
                          navigate(`/movieDetails/${movie.id}`);
                        }}
                      >
                        <img src={movie.movieImage} className="w-10 h-10 rounded-md object-cover shadow border border-gray-700" alt={movie.title} />
                        <div className="flex flex-col">
                          <span className="font-bold">{movie.title}</span>
                          <span className="text-xs text-gray-400 font-medium">Book Now →</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Login/User Info */}
              {user ? (
                <div className="relative cursor-pointer flex items-center gap-2">
                  <div onClick={() => setShowDropdown(!showDropdown)}>
                    {user.logo ? (
                      <img src={user.logo} alt="Profile" className="w-10 h-10 rounded-full shadow-md border-2 border-transparent hover:border-gray-400 transition-all object-cover" />
                    ) : (
                      <div className="w-10 h-10 rounded-full shadow-md border-2 border-transparent hover:border-gray-400 transition-all flex items-center justify-center bg-green-600 text-white font-bold text-xl uppercase">
                        {user.name.charAt(0)}
                      </div>
                    )}
                  </div>

                  {showDropdown && (
                    <div className="absolute right-0 top-12 bg-black bg-opacity-90 rounded p-4 flex flex-col gap-3 min-w-[200px] border border-gray-800 shadow-2xl z-50 animate-fadeIn">
                      <div className="flex items-center gap-3">
                        {user.logo ? (
                          <img src={user.logo} alt="Profile" className="w-8 h-8 rounded-full object-cover" />
                        ) : (
                          <div className="w-8 h-8 rounded-full flex items-center justify-center bg-green-600 text-white font-bold text-lg uppercase">
                            {user.name.charAt(0)}
                          </div>
                        )}
                        <span className="text-white text-sm font-bold">{user.name}</span>
                      </div>
                      <hr className="border-gray-700" />

                      {/* Upload Photo Option */}
                      <label className="text-left text-sm text-blue-400 hover:underline cursor-pointer flex items-center gap-2">
                        📷 Change Profile Pic
                        <input type="file" accept="image/*" className="hidden" onChange={handleLogoUpload} />
                      </label>

                      {/* 20+ Color Theme Selector directly injected locally */}
                      <div className="mt-1 mb-1">
                        <p className="text-xs text-gray-400 mb-2 font-bold uppercase tracking-widest">App Theme Colors</p>
                        <div className="grid grid-cols-7 gap-2">
                          {themes.map((t, idx) => (
                            <div
                              key={idx}
                              title={t.name}
                              onClick={() => {
                                applyTheme(t);
                                setShowDropdown(false);
                              }}
                              className="w-5 h-5 rounded-full cursor-pointer hover:scale-125 transition-transform border border-gray-600 shadow"
                              style={{ background: t.grad }}
                            ></div>
                          ))}
                        </div>
                      </div>

                      {user.email === 'admin@movie.com' && (
                        <Link to="/admin/bookings" className="text-left text-sm text-red-500 font-bold hover:underline mb-2" onClick={() => setShowDropdown(false)}>★ Admin Dashboard</Link>
                      )}

                      <Link to="/profile" className="text-left text-sm text-white hover:underline" onClick={() => setShowDropdown(false)}>Account Settings</Link>
                      <Link to="/bookings" className="text-left text-sm text-white hover:underline" onClick={() => setShowDropdown(false)}>My Bookings</Link>
                      <hr className="border-gray-700" />
                      <button onClick={handleLogout} className="text-left text-sm text-gray-300 hover:text-white hover:underline">Sign out of MovieTicket</button>
                    </div>
                  )}
                </div>
              ) : (
                <Link to="/login">
                  <button className="bg-[#e50914] text-white font-bold rounded px-4 py-2 hover:bg-[#c10811] transition-colors">
                    Sign In
                  </button>
                </Link>
              )}

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="btn btn-ghost text-xl"
                >
                  {menuOpen ? "✖" : "☰"}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mx-4 mt-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 space-y-4 transition-all duration-300">
              <Link to="/">Home</Link>
              <Link to="/MovieShowList">Popular</Link>
              <Link to="#">Upcoming</Link>
              <Link to="#">Top 10</Link>
              <Link to="#">Top 20</Link>
            </div>
          )}

          {/* Hero Section */}
          <div className="max-w-3xl ml-80 md:ml-10 py-10 text-white my-16   ">
            {/* Marvel Title Logo */}
            

            {/* Movie Title */}
            <h1 className="sm:text-5xl md:text-7xl font-semibold leading-[117%] tracking-tight py-6 [text-shadow:2px_2px_0_black,-2px_-2px_0_black,2px_-2px_0_black,-2px_2px_0_black]">
              {bgimage[index].title}
            </h1>



            {/* Movie Details  <span>Action | Adventure | Sci-Fi</span>*/}
            <div className="flex flex-wrap gap-6 md:gap-8 font-medium text-base pt-2">
              {bgimage[index].genre.map((type, index) => (<span key={index} className="text-[15px]">  {type}</span>))}
              <span className="flex items-center gap-2">
                <img src={data} alt="Release Date " />{bgimage[index].ReleaseDate}
              </span>
              <span className="flex items-center  gap-2">
                <img src={time} alt="Duration" />{bgimage[index].Duration}
              </span>
            </div>
            {
/*className="font-medium text-base py-6 leading-[130%]" */}
            <p >
              {bgimage[index].description}
            </p>

            <Link to="/MovieShowList">
              <button className="btn bg-[#F84565] flex items-center gap-2 px-6 py-3 rounded-full">
                <span className="text-base font-medium">Explore Movie</span>
                <img src={arrow} alt="Arrow" />
              </button>
            </Link>
          </div>
        </div>

      </div >

      <MiddleMovie url="http://localhost:3000/movies" />

      <Trailer />


    </div>
  );
};

export default Headers;