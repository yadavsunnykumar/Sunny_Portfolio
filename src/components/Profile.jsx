import React from "react";


function Profile({ imageSize = "w-100 h-100" }) {
    return (
      <div className="flex flex-col items-center">
        <img
          src="/profile.png"
          alt="Profile"
          className={`rounded-full ${imageSize}`}
        />
        <h2 className="text-2xl font-bold mt-4">Sunny Kumar Yadav</h2>
        <p className="text-lg">Web Developer | MERN Stack Enthusiast</p>
      </div>
    );
  }
  

  export default Profile;