import React from "react";

import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const MovieList = ({ url }) => {
  // const [movies, setMovies] = useState([]);


  const { data: movies } = useFetch(url)


  return (


    <div>

      <h2 className="text-3xl font-bold text-shadow-2xs pt-15 pl-10 ">MovieCollection : </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-[90%] mx-auto mb-10 py-12">



        {movies.map((movie) => (
          <Link to={`/movieDetails/${movie.id}`}>
            <div
              key={movie.id}
              className="bg-[#12161C] rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-2xl transition duration-300"
            >

              {/* Image */}
              <div className="relative">
                <img
                  className="h-[400px] w-full object-cover"
                  src={movie.movieImage}
                  alt={movie.title}
                />

                {/* Rating Badge */}
                <span className="absolute top-2 right-2 bg-yellow-400 text-black px-2 py-1 text-xs rounded-md font-bold">
                  ⭐ {movie.rating / 2|| "N/A"}
                </span>
              </div>

              {/* Content */}
              <div className="p-4 text-white ">

                <h2 className="text-lg font-bold truncate">
                  {movie.title}
                </h2>

                <p className="text-sm mt-2 text-[#797B7D] line-clamp-2">
                  {movie.description}
                </p>

                {/* Details */}
                <div className="mt-3 text-xs flex flex-wrap gap-2">
                  <span className="bg-gray-800 px-2 py-1 rounded">
                    🎬 {movie.language}
                  </span>
                  <span className="bg-gray-800 px-2 py-1 rounded">
                    ⏱️ {movie.duration}
                  </span>
                </div>

                {/* Buttons */}
                <div className="mt-4 flex gap-2">

                  <a
                    href={movie.trailer}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 text-center bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-700 transition"
                  >
                    ▶ Trailer
                  </a>

                  <button className="flex-1 bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition">
                    Book 🎟
                  </button>

                </div>

              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>

  );
};

export default MovieList;