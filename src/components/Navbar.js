import React from 'react'
import logo from "../components/images/Frame 229.png";
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <>
    <header className="flex justify-between items-center px-4 sm:px-10 py-4 sm:py-6">
<img src={logo} alt="Logo" className="w-20 sm:w-24 h-8 sm:h-10" />
<nav className="flex space-x-3 sm:space-x-6">
  <Link to={"/"} className="text-gray-800 hover:text-pink-500 text-sm sm:text-base">
    Home
  </Link>
  <Link to={"/topcoaches"} className="text-gray-800 hover:text-pink-500 text-sm sm:text-base">
    Top Coaches
  </Link>
  <Link
    to={"/signup"}
    className="text-pink-500 hover:text-pink-700 font-semibold text-sm sm:text-base"
  >
    Sign Up
  </Link>
</nav>
</header>
</>
  )
}
