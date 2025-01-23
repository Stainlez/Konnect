import React from "react";
import { Link, NavLink } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import message from "../../assets/dashmessageIcon.png";

const SearchBar = () => {
  return (
    <div className="hidden md:flex border-b-2 justify-between items-center p-4  border-b-gray-400">
      {/* Search Bar */}
      <div className="flex items-center bg-white rounded-full p-2 w-2/5 max-w-lg">
        <input
          type="text"
          placeholder="Search..."
          className="border-none outline-none w-full p-2 rounded-full text-sm"
        />
        <span className="text-lg">
          {/* 🔔 */}
          <div className="relative flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full cursor-pointer">
            <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
          </div>
        </span>
      </div>

      {/* Icons */}
      <div className="flex gap-4">
        {/* Notification Icon */}
        <div className="relative flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full cursor-pointer">
          <NavLink to="/dashboard/notification">
            <span className="text-lg">🔔</span>
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
              2
            </span>
          </NavLink>
        </div>

        {/* Avatar Icon */}
        <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
          <Link to="/dashboard/profile">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>

        {/*Notification Icon */}
        <div className="w-6 h-6 self-center rounded-md  overflow-hidden cursor-pointer">
          <Link to="#">
            <img
              src={message}
              alt="message"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
