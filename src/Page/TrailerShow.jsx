import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import useFetchDetails from '../hooks/useFetchDetails'

const TrailerShow = () => {

  const { id } = useParams()

  const { data: movie } = useFetchDetails(
    `http://localhost:3000/movies/${id}`
  );


  { !movie && (<h2> loading or not Avaiable</h2>) }

  console.log(movie)

  return (
    <div className='container mx-auto p-10  '>

      <h3 className='text-6xl font-bold text-center p-10'>Trailer</h3>
      <div className="h-56 md:h-96 overflow-hidden rounded-xl">
        <iframe
          className="w-full h-full"
          src={movie.trailer}
          title="YouTube video player"
          frameBorder="0"
          referrerPolicy="strict-origin-when-cross-origin"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className='text-center'>
        {<Link to={`/movieDetails/${id}/BookingTicket`}>
        <button className="px-5 py-2 bg-green-500 rounded hover:bg-green-600 my-5 flex justify-center   ">
          <h2 className='text-2xl font-bold text-center'>Book Now 🎟</h2>
        </button>
      </Link>}
      </div>
    </div>
  )
}

export default TrailerShow