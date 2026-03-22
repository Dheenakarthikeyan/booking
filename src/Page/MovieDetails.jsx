import React from "react";
import { Link, useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import useFetchDetails from "../hooks/useFetchDetails";
import ShowMovie from "../Components/ShowMovie";

const MovieDetails = () => {
  const { id } = useParams();
  const { data: movie } = useFetchDetails(
    `http://localhost:3000/movies/${id}`
  );

  if (!movie) {
    return <h2 className="text-white text-center mt-10">Loading...</h2>;
  }



  return (
    <div className="container mx-auto pt-32">
      <div className=" py-10 text-white">
        <div className="flex flex-col md:flex-row gap-10 items-center">



          {/* Movie Image */}
          <img
            className="w-[350px] md:w-[450px] h-[600px] border border-amber-500 object-cover rounded-xl"
            src={movie.movieImage}
            alt={movie.title}
          />

          {/* Movie Info */}
          <div className="space-y-4">
            <h1 className="text-4xl font-bold">{movie.title}</h1>

            <div>
              ⭐ <span className="text-yellow-400">{movie.rating}</span>
            </div>

            <p className="text-gray-400">{movie.description}</p>

            {/* Genre */}
            <div className="flex flex-wrap gap-3">
              {movie.genre?.map((g, i) => (
                <span key={i} className="bg-purple-700 px-3 py-1 rounded-full">
                  {g}
                </span>
              ))}
            </div>

            {/* Details */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-gray-800 px-3 py-1 rounded">
                🎬 {movie.language}
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded">
                ⏱️ {movie.duration}
              </span>
              <span className="bg-gray-800 px-3 py-1 rounded">
                📅 {movie.releaseDate}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-4">

             <Link to = {`/movieDetails/${id}/movies/Trailer`}  target="_blank" rel="noreferrer" className="px-5 py-2 bg-gray-900 rounded hover:bg-gray-700">
                ▶ Trailer
              </Link>

              <Link to={`/movieDetails/${id}/BookingTicket`}>
                <button className="px-5 py-2 bg-green-500 rounded hover:bg-green-600">
                  Book Now 🎟
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Cast */}
        <div className="my-16">
          <h2 className="text-2xl mb-4">Your Favorite Cast</h2>

          <div className="flex gap-20 flex-wrap m-10">
            {movie.hero?.image && (
              <div>
                <div>
                  <img
                    className="w-[120px] h-[120px]  rounded-full object-cover border"
                    src={movie.hero?.image}
                    alt="Hero"
                  />
                </div>
                <div>
                  <h2 className="m-4   ">{movie.hero?.name}</h2>
                </div>
              </div>
            )}
            {movie.heroine?.image && (
              <div>
                <div>
                  <img
                    className="w-[120px] h-[120px]  rounded-full object-cover border"
                    src={movie.heroine?.image}
                    alt="Hero"
                  />
                </div>
                <div>
                  <h2 className="m-4  ">{movie.heroine?.name}</h2>
                </div>
              </div>
            )}

            {movie.sideActors?.map((image1) => (

              <div className="relative">
                <div> <img
                  className="w-[120px] h-[120px]  rounded-full object-cover border"
                  src={image1?.image}
                  alt="Hero"
                /></div>
                <div>
                  <h2 className="m-4 absolute left-4  ">{image1?.name}</h2>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Movies */}
        <ShowMovie url="http://localhost:3000/movies" />
      </div>
    </div>
  );
};

export default MovieDetails;