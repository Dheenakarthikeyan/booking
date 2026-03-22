import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';

const Search = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (query) {
      setLoading(true);
      fetch(`http://localhost:3000/movies/search?q=${query}`)
        .then(res => res.json())
        .then(data => {
            setResults(data);
            setLoading(false);
        })
        .catch(err => {
            console.error(err);
            setLoading(false);
        });
    } else {
        setResults([]);
        setLoading(false);
    }
  }, [query]);

  return (
    <div className="bg-black min-h-screen text-white pt-24 px-6 md:px-12">
      <h2 className="text-3xl font-bold mb-8">Search Results for: "{query}"</h2>
      
      {loading ? (
          <p>Loading...</p>
      ) : results.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {results.map((movie) => (
              <Link to={`/movieDetails/${movie.id}`} key={movie.id} className="group relative">
                <img 
                    src={movie.movieImage} 
                    alt={movie.title} 
                    className="w-full h-80 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-bold text-lg">{movie.title}</h3>
                </div>
              </Link>
            ))}
          </div>
      ) : (
          <p className="text-gray-400">No movies found matching your search.</p>
      )}
    </div>
  );
}

export default Search;