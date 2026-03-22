import React from 'react'
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import { HomeScreen, MovieDetails, MovieList, PageNotFounded, Login, Register, MiddleMovie, Booking, TrailerShow, Popular, UpComing, BookingSuccess, MyBookings, AdminBookings, Profile } from "./Page"
import Search from './Page/Search'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-0"> {/* PT-0 because Hero is absolute or handled by page */}
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <div className="bg-black min-h-screen text-white">
      <Routes>
        {/* Layout with Navbar and Footer for most pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Search" element={<Search />} />
          
        </Route>

        {/* Guest routes (No Navbar/Footer) */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/movies/Popular" element={<Popular url="http://localhost:3000/movies/popular" />} />
          <Route path="/movies/Upcoming" element={<UpComing url="http://localhost:3000/movies/upcoming" />} />
          <Route path="/movieDetails/:id" element={<MovieDetails />} />
          <Route path="/movieDetails/:id/movies/Trailer" element={<TrailerShow />} />
          <Route path="/movieDetails/:id/BookingTicket" element={<Booking url="http://localhost:3000/movies" />} />
          <Route path="/MovieShowList" element={<MovieList url="http://localhost:3000/movies" />} />
          <Route path="/bookings" element={<MyBookings />} />
          <Route path="/admin/bookings" element={<AdminBookings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/BookingSuccess/:id' element={<BookingSuccess />} />
          <Route path="*" element={<PageNotFounded />} />
      </Routes>
    </div>
  )
}

export default App