// import React from 'react'
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
        <div className="bg-purple-300 min-h-screen flex flex-col justify-center items-center">
          <h2 className="text-7xl font-bold mt-32 mb-4">Welcome</h2>
          <p className="mb-20  text-xl">Let&apos;s Konnect </p>
          <div className="flex flex-col space-y-4">
            <Link to="/signup" className="p-3 px-20 text-center bg-yellow rounded-lg hover:bg-purple-900">SIGN UP</Link>
            <Link to="/login" className="p-3 px-20 text-center bg-yellow rounded-lg hover:bg-purple-900">SIGN IN</Link>
          </div>
        </div>
    </div>
  )
}

export default Welcome
