import { useState } from 'react'
import { Link } from "react-router-dom"
// import { Form, redirect } from 'react-router-dom';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import signimg from "../../assets/Signimg.png";


function SignInForm() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="h-screen font-montserrat flex relative justify-between bg-textColor">
      <Link
        to="/welcome"
        className="back-button flex font-bold mt-11 md:mt-20 md:ml-20" 
      >
        &larr; <span className='text-sm pl-1 pt-1'> Back</span>
      </Link>

      {/* Form Section */}
      <div className="max-w-7xl w-full md:w-7/12 p-3 m-auto">
        <form className="max-w-md flex-col p-3 mt-20 m-auto">
          <div className="space-y-16">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 mt-8 rounded"
              required
            />

            <div className="relative">
              <input
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                className="w-full px-3 py-2 mt-8 pr-10 rounded"  // Adjusted padding-right
                required
              />
              <button
                type="button"
                className="absolute right-3 mt-4 top-1/2 transform -translate-y-1/2"
                onClick={() => setPasswordVisible(!passwordVisible)}
              >
                {passwordVisible ? (
                  <FiEyeOff className="h-5 w-5" />
                ) : (
                  <FiEye className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          <p className="mt-4 text-left">
            <Link to="/resetpassword" className="text-red-400 hover:text-green-400">
              Forgot Password?
            </Link>
          </p>

          <button
            type="submit"
            className="w-3/4 mt-16 ml-12 align-center font-semibold bg-highlight text-black p-4 rounded hover:bg-green-400"
          >
            SIGN IN
          </button>
        </form>

        <div className="flex space-x-2 text-textColor justify-center align-center mt-4">
          <p className="text-black">DON&apos;T HAVE AN ACCOUNT?</p>
          <Link to="/signup" className="font-semibold text-highlight hover:text-green-400">
            SIGN UP
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="h-screen hidden md:w-5/12 md:flex">
          <img src={signimg} alt="" className="object-cover ml-auto"/>
        </div>
      
    </div>
  );
}

export default SignInForm;

