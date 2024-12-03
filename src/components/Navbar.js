import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../components/images/Frame 229.png";

export default function Navbar() {
  const navigate = useNavigate();

  const handleScrollToTopCoaches = (event) => {
    event.preventDefault(); // Prevent the default link behavior
    const element = document.getElementById("top-coaches");
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      <header className="flex justify-between items-center px-4 sm:px-10 py-4 sm:py-6">
        <Link to="/">
          <img src={logo} alt="Logo" className="w-20 sm:w-24 h-8 sm:h-10" />
        </Link>
        <nav className="flex space-x-3 sm:space-x-6">
          <Link to="/" className="text-gray-800 hover:text-pink-500 text-sm sm:text-base">
            Home
          </Link>
          {/* Use onClick to trigger scroll */}
          <a
            href="#top-coaches" // Still needs to match the id of the target
            onClick={handleScrollToTopCoaches} // Handle scroll manually
            className="text-gray-800 hover:text-pink-500 text-sm sm:text-base"
          >
            Top Coaches
          </a>
          <Link
            to="/signup"
            className="text-pink-500 hover:text-pink-700 font-semibold text-sm sm:text-base"
          >
            Sign Up
          </Link>
        </nav>
      </header>
    </>
  );
}
