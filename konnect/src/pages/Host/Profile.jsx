import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'

const Profile = () => {
    // State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Function to toggle modal
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
  return (
    
      <div className="bg-textColor h-screen md:p-8 w-full">
      <div className="hidden md:flex border-b-2 justify-between items-center p-4  border-b-gray-400">
      {/* Header Bar */}
        {/* Header Section */}
        
          <div className='ml-auto'>
          <button
              onClick={toggleModal}
              className="bg-highlight px-3 py-2 rounded-md mr-2 hover:bg-green-600"
            >
              Update
            </button>
            <button className="bg-textColor text-gray-700 px-3 py-2 rounded-md hover:bg-gray-400">
              Cancel
            </button>
          </div>

      </div>
    <div className='px-12'>
        <div className='flex p-5 text-center items-center'>
              <h2 className="text-3xl text-center font-bold">Personal Info</h2>
                        <NavLink
                          to="/registerentrepreneur"
                          className="py-2 md:p-4 md:px-3 font-bold ml-auto text-sm text-center bg-highlight rounded-lg hover:bg-green-600"
                        >Become an Entrepreneur</NavLink>
              </div>


        {/* Profile Picture */}
        <div className="flex ml-14 mb-6">
        <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Avatar"
            className="rounded-full w-32 h-32"
          />
        <div className='md:hidden ml-auto m-auto'>
          <button
              onClick={toggleModal}
              className="bg-highlight text-sm font-bold px-3 py-2 rounded-md mr-2 hover:bg-green-600"
            >
              Update Profile
            </button>
            </div>
        </div>

        {/* Form Section */}
        <form className='border-y-2 justify-between items-center border-gray-400'>
          {/* Name */}
          <div className="flex py-5 items-center border-b-2 border-gray-400">
            <label className="flex flex-start text-sm font-medium text-gray-700">Name</label>
            <div className="w-2/3 flex ml-auto gap-4 ">
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="First Name"
              />
              <input
                type="text"
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Last Name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex py-5 items-center border-b-2 border-gray-400">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <div className="w-2/3 flex ml-auto gap-4 ">
            <input
              type="email"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder='jazzyokorie@gmail.com'
            />
          </div>
          </div>

          {/* Phone Number */}
          <div className="flex  py-5 items-center border-b-2 border-gray-400">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="w-2/3 flex ml-auto gap-4 ">
            <input
              type="tel"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder='+2348023475630'
            />
          </div>
          </div>

          {/* Occupation */}
          <div className="flex py-5 items-center">
            <label className="block text-sm font-medium text-gray-700">Occupation</label>
            <div className="w-2/3 flex ml-auto gap-4 ">
            <input
              type="text"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder='Student'
            />
          </div>
          </div>

        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
            {/* Header Bar */}
            <div className="mb-5 flex justify-between items-center ">
              <div className="ml-auto">
                <button
                  onClick={toggleModal}
                  className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600"
                >
                  Save Edit
                </button>
                <button
                  onClick={toggleModal}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* Profile Picture */}
            <h2 className="text-2xl font-bold">Edit Your Profile</h2>
            <div className="flex items-center justify-center my-6">
              <img
                src="https://via.placeholder.com/100"
                alt="Profile"
                className="rounded-full w-32 h-32"
              />
            </div>

            {/* Form Section */}
            <form className="border-y-2 border-gray-400">
              {/* Name */}
              <div className="flex py-5 items-center border-b-2 border-gray-400">
                <label className="flex text-sm font-medium text-gray-700">Name</label>
                <div className="w-2/3 flex ml-auto gap-4">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Jasmine"
                  />
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Okorie"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex py-5 items-center border-b-2 border-gray-400">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="w-2/3 flex ml-auto gap-4">
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="jazzyokorie@gmail.com"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex py-5 items-center border-b-2 border-gray-400">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="w-2/3 flex ml-auto gap-4">
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="+2348187755555"
                  />
                </div>
              </div>

              {/* Occupation */}
              <div className="flex py-5 items-center">
                <label className="block text-sm font-medium text-gray-700">Occupation</label>
                <div className="w-2/3 flex ml-auto gap-4">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Student"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
  );
};

export default Profile;
