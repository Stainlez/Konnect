import React from "react";
import img from "../assets/Home1.jpeg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-paleLavender">
      <div className="p-11 space-y-11">
        <div className="space-y-2">
          <h1 className="text-black pt-8 max-w-md mt-16 text-5xl font-bold">
            LET&apos;S KONNECT
          </h1>
          <p className="">Find the entrepreneurial services nearest to you.</p>
        </div>
        <div className="m-2">
          <Link
            to="welcome"
            className="p-4 px-3  text-center bg-yellow rounded-lg hover:bg-purple-900"
          >
            GET STARTED
          </Link>
        </div>
      </div>
      <div className="h-1/5 overflow-hidden">
        <img src={img} alt="hands" className="h-full max-w-full" />
      </div>

      <section className=" relative container bg-purple-900 max-w-full">
        {/* flex container */}
        <div className="flex items-center bg-purple-900 justify-around p-2">
          <div className="container bg-purple-900 flex flex-col p-8 space-y-0">
            <div className="bg-yellow mr-auto p-2 text-center w-32">
              WHAT WE DO
            </div>
            <h1 className="text-textColor pt-5 max-w-md text-2xl font-bold bg-purple-900">
              Connect with student entrepreneurs to meet your desired needs.
            </h1>
          </div>

          <div className="text-sm text-textColor bg-purple-900 space-y-4 p-9 max-w-md">
            <p className="bg-purple-900">OFFER JOB OPPORTUNITIES</p>
            <hr className="ml-3 border-0 h-px bg-lineColor" />
            <p className="bg-purple-900">CONNECT BUSINESSES</p>
            <hr className="ml-3 border-0 h-px bg-lineColor" />
            <p className="bg-purple-900">SOLVE PROBLEMS</p>
            <hr className="ml-3 border-0 h-px bg-lineColor" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
