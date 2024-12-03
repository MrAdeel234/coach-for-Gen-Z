import React, { useState } from 'react';

function Profile() {
  // Initial state for the profile data
  const [image, setImage] = useState(null);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [address, setAddress] = useState('123 Main St, Springfield, IL');
  const [username, setUsername] = useState('john_doe');
  const [isEditing, setIsEditing] = useState(false); // Track edit mode

  // Handle image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Display the uploaded image
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission (e.g., save profile data)
    console.log('Profile updated:', {
      name,
      email,
      address,
      username,
      image,
    });
    setIsEditing(false); // After saving, stop editing
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-3xl">
      <h2 className="text-xl font-semibold text-pink-500 mb-4">Image</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Image Upload */}
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 overflow-hidden rounded-full border">
            {image ? (
              <img src={image} alt="Profile" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                <span className="text-white">No Image</span>
              </div>
            )}
          </div>
          {isEditing && (
            <label className="text-pink-500 cursor-pointer">
              Upload Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          )}
        </div>

        {/* Name */}
        <div>
          <label className="block text-gray-700" htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded-lg mt-2"
            placeholder="Enter your name"
            disabled={!isEditing}
          />
        </div>

           {/* Username */}
           <div>
          <label className="block text-gray-700" htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-lg mt-2"
            placeholder="Enter your username"
            disabled={!isEditing}
          />
        </div>

        {/* Email (disabled, can't edit) */}
        <div>
          <label className="block text-gray-700" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            disabled
            className="w-full p-2 border rounded-lg mt-2 bg-gray-100"
          />
        </div>

        {/* Address */}
        <div>
          <label className="block text-gray-700" htmlFor="address">Address</label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full p-2 border rounded-lg mt-2"
            rows="4"
            placeholder="Enter your address"
            disabled={!isEditing}
          />
        </div>

     

        {/* Edit/Save Button */}
        <button
          type="button"
          onClick={() => {
            if (isEditing) {
              // If we are editing, submit the form
              handleSubmit({ preventDefault: () => {} }); // Simulate event to trigger form submission
            } else {
              setIsEditing(true); // Enable edit mode
            }
          }}
          className={`w-full p-3 rounded-lg mt-4 ${
            isEditing ? 'bg-green-500 hover:bg-green-600' : 'bg-pink-500 hover:bg-pink-600'
          } text-white`}
        >
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </form>
    </div>
  );
}

export default Profile;
