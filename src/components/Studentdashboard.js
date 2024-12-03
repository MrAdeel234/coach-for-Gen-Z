import React, { useState } from 'react';
import background from "../components/images/pic5.png";
import CourseCardStud from './CourseCardStud';
import Searchbar from "./Searchbar";

// Sample courses data
const courses = [
  {
    image: 'https://www.edx.org/sites/default/files/styles/banner_xl/public/course-image/React%20-%20Header%20Image.jpg', // React course image
    title: 'React for Beginners',
    description: 'Learn React from scratch with hands-on projects. Build interactive web applications with React, one of the most popular JavaScript libraries.',
    username: 'John Doe', // Added username
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', // JavaScript logo
    title: 'Advanced JavaScript',
    description: 'Dive deep into advanced JavaScript concepts like closures, promises, async/await, and the event loop to master modern JavaScript.',
    username: 'Jane Smith', // Added username
  },
  {
    image: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Logo/CSS3_logo.svg', // CSS logo
    title: 'CSS Mastery',
    description: 'Master the art of styling with CSS. Learn responsive design, animations, and advanced CSS techniques to create beautiful web layouts.',
    username: 'Mary Johnson', // Added username
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg', // React logo
    title: 'React for Beginners',
    description: 'Learn React from scratch with hands-on projects. Build interactive web applications with React, one of the most popular JavaScript libraries.',
    username: 'John Doe', // Added username
  },
  {
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png', // JavaScript logo
    title: 'Advanced JavaScript',
    description: 'Dive deep into advanced JavaScript concepts like closures, promises, async/await, and the event loop to master modern JavaScript.',
    username: 'Jane Smith', // Added username
  },
  {
    image: 'https://developer.mozilla.org/en-US/docs/Web/CSS/Logo/CSS3_logo.svg', // CSS logo
    title: 'CSS Mastery',
    description: 'Master the art of styling with CSS. Learn responsive design, animations, and advanced CSS techniques to create beautiful web layouts.',
    username: 'Mary Johnson', // Added username
  },
];




const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Function to handle search query change
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  // Filter courses based on the search query
  const filteredCourses = courses.filter((course) =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div
        className="relative bg-black min-h-[30vh] flex flex-col items-center justify-center text-center"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
        <div className="relative z-10 px-6 sm:px-10">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-5xl font-extrabold text-white leading-tight">
            TOP COURSES FROM OUR TOP COACHES
          </h1>
        </div>
      </div>

      <Searchbar onSearch={handleSearch} /> {/* Pass handleSearch to Searchbar */}

      <div className="space-y-6">
        <div className="space-y-4">
          {filteredCourses.length === 0 ? (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-600">No courses found.</h3>
            </div>
          ) : (
            filteredCourses.map((course, index) => (
              <CourseCardStud
                key={index}
                image={course.image}
                title={course.title}
                description={course.description}
                username={course.username}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
