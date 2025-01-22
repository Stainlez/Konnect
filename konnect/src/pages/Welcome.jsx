// import React from 'react'
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <div className="bg-textColor min-h-screen flex flex-col justify-center items-center">
        <h2 className="text-7xl mb-9 text-purple-900 font-extrabold">
          Welcome
        </h2>
        <p className="mb-20 text-gray-500 text-xl">Let&apos;s Konnect </p>
        <div className="flex flex-col space-y-4">
          <Link
            to="/signup"
            className="py-4 px-20 text-xl text-gray-500 text-center bg-highlight rounded-lg hover:bg-purple-900"
          >
            SIGN UP
          </Link>
          <Link
            to="/login"
            className="py-4 px-20 text-xl text-gray-500 text-center bg-highlight rounded-lg hover:bg-purple-900"
          >
            SIGN IN
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
