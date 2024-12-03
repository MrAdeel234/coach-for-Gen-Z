import React, { useState } from 'react';

function Uploadcourse() {
  // State hooks for form inputs and alert message
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [courseVideo, setCourseVideo] = useState(null);
  const [alertMessage, setAlertMessage] = useState('');

  // Handle file input for video
  const handleVideoChange = (event) => {
    setCourseVideo(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setAlertMessage('');
    if (!courseTitle || !courseDescription || !courseVideo) {
      setAlertMessage('Please fill in all the fields.');
      return;
    }
    // Handle course upload logic here (e.g., send to an API or update state)
    console.log('Course uploaded:', {
      title: courseTitle,
      description: courseDescription,
      video: courseVideo,
    });
    // Reset form fields after submission
    setCourseTitle('');
    setCourseDescription('');
    setCourseVideo(null);
  };

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-pink-500">Upload a Course Content</h2>
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
          <div>
            {alertMessage && (
              <div className="mt-2 text-red-600">{alertMessage}</div>
            )}
            <label className="block text-gray-700" htmlFor="courseTitle">
              Title
            </label>
            <input
              type="text"
              id="courseTitle"
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
              placeholder="Enter course title"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="courseDescription">
              Description
            </label>
            <textarea
              id="courseDescription"
              value={courseDescription}
              onChange={(e) => setCourseDescription(e.target.value)}
              className="w-full p-2 border rounded-lg mt-2"
              rows="4"
              placeholder="Enter course description"
            />
          </div>
          <div>
            <label className="block text-gray-700" htmlFor="courseVideo">
              Select Video
            </label>
            <input
              type="file"
              id="courseVideo"
              onChange={handleVideoChange}
              className="w-full p-2 border rounded-lg mt-2"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white p-3 rounded-lg mt-4 hover:bg-pink-600"
          >
            Upload Course
          </button>
        </form>
      </div>
    </>
  );
}

export default Uploadcourse;
