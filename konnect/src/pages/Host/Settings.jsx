import React from 'react'
import { Link } from 'react-router-dom';

const Settings
 = () => {
  return (
    <div className="p-20 bg-textColor h-screen">
    <h1 className="hidden md:flex text-5xl font-extrabold border-b-2 text-center border-gray-800 pb-11 mb-4">Account Settings</h1>
    <ul className="space-y-8">
      <li className='hover:bg-gray-400 rounded-md'>
        <Link to="/dashboard" className="block py-2 font-semibold text-gray-600 hover:text-gray-800">
          User Account Type
        </Link>
      </li>
      <li className='hover:bg-gray-400 rounded-md'>
        <Link to="#" className="block py-2 font-semibold text-gray-600 hover:text-gray-800">
          Notifications
        </Link>
      </li>
      <li className='hover:bg-gray-400 rounded-md'>
        <Link to="#" className="block py-2 font-semibold text-gray-600 hover:text-gray-800">
          Edit Password
        </Link>
      </li>
      <li className='hover:bg-gray-400 rounded-md'>
        <Link to="#" className="block py-2 font-semibold text-gray-600 hover:text-gray-800">
          Privacy Policy
        </Link>
      </li>
      <li className='hover:bg-gray-400 rounded-md'>
        <Link to="#" className="block py-2 font-semibold text-gray-600 hover:text-gray-800">
          Community Guidelines
        </Link>
      </li>
      <li className='hover:bg-gray-400 rounded-md'>
        <Link to="#" className="block py-2 font-semibold text-gray-600 hover:text-gray-800">
          Support
        </Link>
      </li>
      <li className='hover:bg-gray-400 rounded-md'>
        <Link to="#" className="block py-2 font-semibold text-gray-600 hover:text-gray-800">
          Payment Method
        </Link>
      </li>
      <li className='hover:bg-gray-400 rounded-md'>
        <Link to="#" className="block py-2 font-semibold text-gray-600 hover:text-gray-800">
          Delete Account
        </Link>
      </li>
    </ul>
  </div>
  );
}

export default Settings

