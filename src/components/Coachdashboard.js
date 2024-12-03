import React, { useState } from 'react';
import CourseCard from './CourseCard'; // Import the CourseCard component
import Uploadcourse from './Uploadcourse';
import CoachProfile from './coachprofile';

const Dashboard = () => {
  const [selectedItem, setSelectedItem] = useState('My Courses');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  

  const handleSidebarClick = (item) => {
    setSelectedItem(item);
    if (window.innerWidth < 768) {
      setIsSidebarOpen(false); // Close sidebar on click for mobile
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Sample courses data
  const courses = [
    {
      image: 'https://www.edx.org/sites/default/files/styles/banner_xl/public/course-image/React%20-%20Header%20Image.jpg', // React course image
      title: 'React for Beginners',
      description: 'Learn React from scratch with hands-on projects. Build interactive web applications with React, one of the most popular JavaScript libraries.',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', // JavaScript logo
      title: 'Advanced JavaScript',
      description: 'Dive deep into advanced JavaScript concepts like closures, promises, async/await, and the event loop to master modern JavaScript.',
    },
    {
      image: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Logo/CSS3_logo.svg', // CSS logo
      title: 'CSS Mastery',
      description: 'Master the art of styling with CSS. Learn responsive design, animations, and advanced CSS techniques to create beautiful web layouts.',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', // React logo
      title: 'React for Beginners',
      description: 'Learn React from scratch with hands-on projects. Build interactive web applications with React, one of the most popular JavaScript libraries.',
    },
    {
      image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', // JavaScript logo
      title: 'Advanced JavaScript',
      description: 'Dive deep into advanced JavaScript concepts like closures, promises, async/await, and the event loop to master modern JavaScript.',
    },
    {
      image: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Logo/CSS3_logo.svg', // CSS logo
      title: 'CSS Mastery',
      description: 'Master the art of styling with CSS. Learn responsive design, animations, and advanced CSS techniques to create beautiful web layouts.',
    },
  ];


  return (
    <div className="flex min-h-screen bg-white text-gray-800">
      {/* Sidebar */}
      <div
        className={`w-64 bg-white text-gray-800 p-4 shadow-md transition-transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:translate-x-0 fixed sm:relative top-0 left-0 h-screen z-50`}
      >
        {/* Close button for the sidebar */}
        {isSidebarOpen && (
          <button
            onClick={toggleSidebar}
            className="sm:hidden p-2 fixed top-4 right-4 z-50 bg-white text-gray-800 rounded-full shadow-md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        <h2 className="text-2xl font-semibold mb-8">Dashboard</h2>
        <ul className="space-y-4">
          <li
            className={`p-2 rounded cursor-pointer ${selectedItem === 'My Courses' ? 'bg-pink-500 text-white' : 'hover:bg-pink-100'}`}
            onClick={() => handleSidebarClick('My Courses')}
          >
            My Courses
          </li>
          <li
            className={`p-2 rounded cursor-pointer ${selectedItem === 'Upload a Course' ? 'bg-pink-500 text-white' : 'hover:bg-pink-100'}`}
            onClick={() => handleSidebarClick('Upload a Course')}
          >
            Upload a Course
          </li>
          <li
            className={`p-2 rounded cursor-pointer ${selectedItem === 'Profile' ? 'bg-pink-500 text-white' : 'hover:bg-pink-100'}`}
            onClick={() => handleSidebarClick('Profile')}
          >
            Profile
          </li>
          <li
            className={`p-2 rounded cursor-pointer ${selectedItem === 'Logout' ? 'bg-pink-500 text-white' : 'hover:bg-pink-100'}`}
            onClick={() => handleSidebarClick('Logout')}
          >
            Logout
          </li>
        </ul>
      </div>

      {/* Mobile Toggle Button (Hamburger) */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="sm:hidden p-4 fixed top-11 left-2 z-50 bg-white text-gray-800 rounded-full shadow-md"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      )}

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-50 relative overflow-y-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-pink-600">{`Welcome Back, User - ${selectedItem}`}</h1>
        </div>

        {/* Content based on selected item */}
        <div>
          {selectedItem === 'My Courses' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-pink-500">My Courses</h2>
              <div className="space-y-4">
                {courses.length === 0 ? (
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold text-gray-600">No courses uploaded yet. Upload a course and get started!</h3>
                  </div>
                ) : (
                  courses.map((course, index) => (
                    <CourseCard key={index} image={course.image} title={course.title} description={course.description} />
                  ))
                )}
              </div>
            </div>
          )}

          {selectedItem === 'Upload a Course' && (
           <Uploadcourse/>
          )}

          {selectedItem === 'Profile' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-pink-500">Profile Details</h2>
              <CoachProfile/>
            </div>
          )}

          {selectedItem === 'Logout' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-pink-500">Do you want to logout?</h2>
            <p className="mt-4">Click the button below to log out.</p>
            <button className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-lg hover:bg-pink-600">
              Log Me Out
            </button>
          </div>
          
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
