import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex max-w-screen justify-between bg-purpleBg md:h-screen">
      <div className="max-w-7/12 p-4 m-auto md-justify-center ">
        <form className="max-w-md flex-col space-y-5 mt-28 p-4 md:space-y-8">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            className="w-full px-3 py-2 rounded"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            className="w-full px-3 py-2 mt-8 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-3 py-2 mt-8 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-3 py-2 mt-8 rounded"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Confirm Password"
            className="w-full px-3 py-2 mt-8 rounded"
            required
          />
          <button
            type="submit"
            className="w-1/2 mt-8 ml-24 bg-yellow font-semibold text-black py-2 rounded hover:bg-purple-400"
          >
            SIGN UP
          </button>
        </form>
        <div className="container flex space-x-2 justify-center">
          <p className="bg-purpleBg text-center text-textColor text-nowrap">
            ALREADY HAVE AN ACCOUNT?
          </p>
          <span className="bg-purpleBg">
            <Link to="/login" className="hover:text-purple-400 font-semibold text-yellow">
              SIGN-IN
            </Link>
          </span>
        </div>
      </div>

      {/* Remove hidden or use responsive utility classes */}
      <div className="relative hidden bg-hero-pattern bg-no-repeat bg-cover bg-center h-3/4 w-2/6 md:flex">
        <h2 className="text-textBlack pt-5 mt-10 text-5xl text-nowrap mx-auto font-bold">
          LET'S KONNECT
        </h2>
      </div>
    </div>
  );
};

export default SignUp;
