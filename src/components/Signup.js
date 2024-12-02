import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Keeping this for navigation

import { AcademicCapIcon, UserGroupIcon, CheckCircleIcon } from "@heroicons/react/24/outline"; // Updated icons
import { Alert, Typography, Button } from "@mui/material"; // Import necessary Material-UI components
import logo from "./images/Frame 229.png";

const SignUpForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userType, setUserType] = useState(null);
  const [address, setAddress] = useState("");
  const [isProfilePhotoSkipped, setIsProfilePhotoSkipped] = useState(false);
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  const [alertMessage, setAlertMessage] = useState(""); // State for alert message
  const [isAccountCreated, setIsAccountCreated] = useState(false); // State to track account creation

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (name === "profilePhoto") {
      setProfilePhoto(files[0]);
    }
  };

  const handleNext = () => {
    if (currentStep === 1 && !userType) {
      setAlertMessage("Please select your user type.");
    } else if (currentStep === 1 && userType) {
      setAlertMessage("");
      setCurrentStep((prevStep) => prevStep + 1);
    } else if (currentStep === 2) {
      if (
        !formData.name ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword ||
        !address
      ) {
        setAlertMessage("Please fill out all the fields.");
      } else if (formData.password !== formData.confirmPassword) {
        setErrorMessage("Passwords do not match.");
        setAlertMessage(""); // Clear the alert message
      } else {
        setErrorMessage(""); // Clear any previous error message
        setAlertMessage(""); // Clear the alert message
        setCurrentStep((prevStep) => prevStep + 1);
      }
    } else if (currentStep === 3 && isProfilePhotoSkipped && !profilePhoto) {
      setAlertMessage("Please upload a profile photo or skip.");
    } else {
      if (currentStep === 3) {
        handleSubmit();
        setIsAccountCreated(true); // Show success message
      } else {
        setCurrentStep((prevStep) => prevStep + 1);
      }
    }
  };

  const handleSkipProfilePhoto = () => {
    setIsProfilePhotoSkipped(true);
    handleNext();
  };

  const handlePrevious = () => {
    setCurrentStep((prevStep) => prevStep - 1);
    setAlertMessage(""); // Clear any previous alert message
  };

  const handleSubmit =  () => {
    console.log("Form submitted with data:", {
        userType,
        address,
        profilePhoto,
        ...formData,
      });
      setIsAccountCreated(true);  
    };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-6 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <img src={logo} alt="Logo" className="mx-auto h-12 w-18" />
        </div>

        <h2 className="text-2xl font-bold font-public-sans text-center text-gray-800">Sign Up</h2>

        {/* Display the alert message at the top */}
        {alertMessage && (
          <Alert severity="error" className="mb-4">
            {alertMessage}
          </Alert>
        )}

        {/* Display success message when account is created */}
        {isAccountCreated && (
          <div className="text-center">
            <CheckCircleIcon className="h-16 w-16 text-green-500 mx-auto mb-2" />
            <Typography variant="h6" className="text-green-600 font-semibold mb-4">
              Account Created Successfully!
            </Typography>
            <Typography variant="body1" className="text-gray-700 mb-6">
              You can now login and start using your account.
            </Typography>
            <button 
                  onClick={() => navigate("/signin")}
                  className="w-full py-2 bg-pink-600 mt-4 text-white rounded-md hover:bg-pink-700"
            >
              Login Now
            </button>
          </div>
        )}

        {!isAccountCreated && (
          <form onSubmit={handleSubmit} className="mt-6 space-y-6">
            {currentStep === 1 && (
              <div>
                <h3 className="text-xl font-semibold text-center text-gray-700 mb-4">Select User Type</h3>
                <div className="flex flex-col gap-6">
                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer ${userType === "Student" ? "border-pink-500 bg-pink-100" : "border-gray-300"}`}
                    onClick={() => setUserType("Student")}
                  >
                    <AcademicCapIcon className="h-16 w-16 text-pink-600 mb-2" /> {/* Updated icon */}
                    <p className="font-semibold text-gray-800">Student</p>
                    <p className="text-sm text-gray-600 mt-2">Learn and grow your skills.</p>
                  </div>

                  <div
                    className={`flex flex-col items-center justify-center p-4 rounded-lg border-2 cursor-pointer ${userType === "Coach" ? "border-pink-500 bg-pink-100" : "border-gray-300"}`}
                    onClick={() => setUserType("Coach")}
                  >
                    <UserGroupIcon className="h-16 w-16 text-pink-600 mb-2" /> {/* Updated icon */}
                    <p className="font-semibold text-gray-800">Coach</p>
                    <p className="text-sm text-gray-600 mt-2">Mentor and guide students.</p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && userType && (
              <div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm mt-1 font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 mt-1 border border-gray-300 mt-2 rounded-md"
                    placeholder="Your email address"
                  />
                </div>
                <div>
                  <label className="block text-sm mt-1 font-medium text-gray-700">Password</label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Your password"
                  />
                </div>
                <div>
                  <label className="block text-sm mt-1 font-medium text-gray-700">Confirm Password</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Confirm your password"
                  />
                </div>

                {errorMessage && (
                  <Alert severity="error" className="mt-2">
                    {errorMessage}
                  </Alert>
                )}

                <div>
                  <label className="block text-sm mt-1 font-medium text-gray-700">Address</label>
                  <input
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    className="w-full p-2 mt-2 border border-gray-300 rounded-md"
                    placeholder="Your address"
                  />
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="flex flex-col items-center">
                <label className="block text-sm font-medium text-gray-700 mb-2">Profile Photo</label>
                <div
                  className="w-24 h-24 rounded-full border-2 border-gray-300 flex items-center justify-center mb-4"
                  style={{
                    backgroundImage: `url(${profilePhoto ? URL.createObjectURL(profilePhoto) : ""})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {!profilePhoto && <span className="text-gray-500">No photo</span>}
                </div>
                <button
                  type="button"
                  onClick={() => document.getElementById("profilePhotoInput").click()}
                  className="bg-pink-600 text-white py-2 px-4 rounded-md hover:bg-pink-700"
                >
                  Add Profile Photo
                </button>
                <input
                  type="file"
                  id="profilePhotoInput"
                  name="profilePhoto"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    onClick={handleSkipProfilePhoto}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    Skip for now
                  </button>
                </div>
              </div>
            )}

            <div className="flex justify-between mt-6">
              {currentStep === 2 && (
                <button
                  type="button"
                  onClick={handlePrevious}
                  className="w-1/4 py-2 text-gray-600 border border-gray-300 rounded-md hover:bg-gray-100"
                >
                  Back
                </button>
              )}
              <button
                type="button"
                onClick={handleNext}
                className="w-1/4 py-2 bg-pink-600 text-white rounded-md hover:bg-pink-700 ml-auto"
              >
                {currentStep === 3 ? "Submit" : "Next"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default SignUpForm;