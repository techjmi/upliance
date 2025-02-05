import React from 'react';

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem('userData');
    window.location.href = '/login';
  };

  const userData = JSON.parse(localStorage.getItem('userData'));

  return (
    <div className="flex items-center justify-center p-4">
      <div className="flex flex-col items-center space-y-4 mx-auto max-w-xs">
        <img
          src={userData?.image || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="w-24 h-24 rounded-full"
        />

        <h2 className="text-xl font-semibold">
          {userData?.name || 'Name Not Provided'}
        </h2>

        <p className="text-gray-600 text-center">
          {userData?.info || 'No additional information'}
        </p>

        <p className="text-gray-600">
          {userData?.email || 'no-email@example.com'}
        </p>

        <div className="flex flex-col space-y-2 w-full mt-4">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
            Update Profile
          </button>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;