import { useEffect, useState } from "react";
import img from "../assets/Home1.jpeg";
import { NavLink } from "react-router-dom";

const Home = () => {
  const words = ["faster", "with ease", "efficiently"];
  const [index, setIndex] = useState(0);

  // Update the word every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <div className="bg-textColor">
      <div className="p-11 space-y-11">
        <div className="space-y-2">
          <h1 className="text-black text-nowrap pt-8 max-w-md mt-16 text-4xl font-semibold md:text-5xl">
            Manage your <br />
            services{" "}
            <span className="text-purple-900 text-nowrap transition-transform duration-400">
              {words[index]}
            </span>
          </h1>
          <p className="">Find the entrepreneurial services nearest to you.</p>
        </div>
        <div className="mt-2">
          <NavLink
            to="/welcome"
            className="p-4 px-3  text-center bg-highlight rounded-lg hover:bg-green-600"
          >
            GET STARTED
          </NavLink>
        </div>
      </div>
      <div className="h-1/5 overflow-hidden">
        <img src={img} alt="hands" className="h-full max-w-full" />
      </div>

      <section className=" relative container bg-purple-900 max-w-full">
        {/* flex container */}
        <div className="flex items-center bg-purple-900 justify-around p-2">
          <div className="container bg-purple-900 flex flex-col p-8 space-y-0">
            <h3 className="text-textColor text-3xl md:text-3xl lg:text-5xl font-bold">
              WHAT WE DO?
            </h3>
            <h1 className="text-textColor pt-5 max-w-md text-2xl font-bold bg-purple-900">
              Connect with student entrepreneurs to meet your desired needs.
            </h1>
          </div>

          <div className="text-sm text-textColor bg-purple-900 space-y-4 p-9 max-w-md">
            <p className="bg-purple-900">OFFER JOB OPPORTUNITIES</p>
            <hr className="ml-3 border-0 h-0.5 bg-white" />
            <p className="bg-purple-900">CONNECT BUSINESSES</p>
            <hr className="ml-3 border-0 h-0.5 bg-white" />
            <p className="bg-purple-900">SOLVE PROBLEMS</p>
            <hr className="ml-3 border-0 h-0.5 bg-white" />
            <p className="bg-purple-900">EDUCATIONAL RESOURCES</p>
            <hr className="ml-3 border-0 h-0.5 bg-white" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
