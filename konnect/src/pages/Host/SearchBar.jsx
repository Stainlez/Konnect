import React from "react";
import {Link} from "react-router-dom"
// import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

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
      </div>

      {/* Icons */}
      <div className="flex gap-4">
        {/* Notification Icon */}
        <div className="relative flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full cursor-pointer">
          <span className="text-lg">🔔</span>
          <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
            3
          </span>
        </div>

        {/* Avatar Icon */}
        <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
          <Link to='/dashboard/profile'>
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Avatar"
            className="w-full h-full object-cover"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
