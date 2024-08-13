import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = async () => {
      try {
        const data = await axios.get(
          "https://codepen-backend-t587.onrender.com/api/v1/user/me",
          {
            withCredentials: true,
          }
        );
        setUser(data.data.user);
      } catch (error) {
        setUser({});
      }
    };
    getUser();
  }, []);

  const handleNavigateHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 w-full">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <div className="flex flex-col items-center">
          <img
            src={
              user.profilePicture ||
              "https://www.pngall.com/wp-content/uploads/5/Profile-Transparent.png"
            }
            alt="Profile Picture"
            className="w-30 h-30 rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
          <p className="text-gray-600 mb-6">{user.email}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleNavigateHome}
          >
            Go to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
