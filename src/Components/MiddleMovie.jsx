import React, { useState } from "react";
import useFetch from "../hooks/useFetch";
import { Link } from "react-router-dom";

const MiddleMovie = ({ url, id }) => {
  const { data: movies } = useFetch(url);
  const [showAll, setShowAll] = useState(false);





  if (!movies) return null;

  const visibleMovies = showAll ? movies : movies.slice(0, 6);

  return (

    <div className="container mx-auto pr-0 pl-6 my-16    ">

      <div className="flex items-center justify-between py-8">
        <h1 className="text-3xl font-bold " >Now Showing :</h1>
        <h1 className="text-xl text-white link link-success "><Link to="/MovieShowList">View...</Link> </h1>
      </div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 m-0 p-0">

        {visibleMovies.map((movie) => (
          <Link to={`/movieDetails/ ${movie.id}`}>
            <div
              key={movie.id}
              className="bg-[#12161C] rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition duration-300"
            >

              {/* IMAGE SECTION */}
              <div className="w-full h-[560px] overflow-hidden relative  ">

                <img
                  src={movie.movieImage}
                  alt={movie.title}
                  className="w-full  h-full object-cover  text-center  rounded-xl"
                />


                <div className="absolute top-3 left-1.5 bg-yellow-400 text-black px-3 py-1 text-xs font-semibold rounded-full border border-black shadow-md">
                  ⭐ {movie.rating || "N/A"}
                </div>

              </div>


              <div className="p-4 text-white">
                <h2 className="text-lg font-semibold text-center truncate">
                  {movie.title}
                </h2>

                <p className="text-sm text-gray-400  bg-linear-270 mt-2 line-clamp-2 ">
                  {movie.description}
                </p>

                <div className="mt-3 flex justify-between text-xs text-gray-300 text-center">
                  <span className="border border-amber-50 text-white p-5 px-5   rounded-3xl">{movie.language}</span>
                  <span className="border border-amber-50  text-white p-5 px-5  rounded-3xl">{movie.duration}</span>
                  <span className="border border-amber-50 text-white p-5 px-5 rounded-3xl">⭐ {movie.rating}</span>
                  <span className="border border-amber-50 text-white p-5 px-5  rounded-3xl">Date : {movie.releaseDate}</span>
                </div>
                <Link
                  to={`/movieDetails/${movie.id} /BookingTicket`}>
                  <div className="mt-4 flex gap-2">
                    <button className="flex-1 bg-amber-300 py-2 rounded-lg hover:bg-white-600 text-center transition">
                      Buy Ticket
                    </button>
                  </div>
                </Link>
              </div>

            </div>
          </Link>

        ))}

      </div>


      {movies.length > 6 && (
        <div className="text-center mt-10">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-green-500 rounded-lg hover:bg-blue-500 transition text-white"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}

    </div>

  );
};

export default MiddleMovie;