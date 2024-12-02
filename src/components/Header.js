import React from "react";
import pic from "./images/mainpic.png";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LandingPage = () => {
  const navigate = useNavigate(); // Initialize navigate

  const handleNavigate = (type) => {
    // Route with query parameter for user type
    navigate(`/signin?userType=${type}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Main Section */}
      <main className="flex flex-col sm:flex-row flex-grow items-center justify-between px-4 sm:px-10 py-6 sm:py-12">
        {/* Left Section: Text and Buttons */}
        <div className="max-w-lg text-center sm:text-left">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-black leading-tight">
            WE<br /> CHANGE <br />
            LIVES!
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-4 sm:mt-6">
            We change the lives of teenage people by offering them coaching and
            mentoring from top experts in every industry.
          </p>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <button  
              className="bg-pink-500 text-white px-6 sm:px-8 py-3 rounded-lg shadow-md hover:bg-pink-600 text-sm sm:text-base"
              onClick={() => handleNavigate("student")}> {/* Set student */}
              Login as a Student
            </button>
            <button 
              className="border border-pink-500 text-pink-500 px-6 sm:px-8 py-3 rounded-lg shadow-md hover:bg-pink-100 text-sm sm:text-base"
              onClick={() => handleNavigate("coach")}> {/* Set coach */}
              Login as an Instructor
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative w-full sm:w-1/2 flex justify-center items-center mt-8 sm:mt-0">
          <div className="absolute -top-8 sm:-top-16 left-10 sm:left-16 bg-pink-100 rounded-full w-64 h-64 sm:w-80 sm:h-80 opacity-30"></div>
          <img
            src={pic}
            alt="Main Display"
            className="relative z-10 w-2/3 sm:w-3/4 h-auto object-cover mt-4 sm:mt-0"
          />
        </div>
      </main>
    </div>
  );
};

export default LandingPage;
