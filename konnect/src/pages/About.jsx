// import React from 'react'
import img from "../assets/aboutHero.png";
import { NavLink } from "react-router-dom";
import logo2 from "../assets/logo2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import Bubu from "../assets/Bubu.jpg";
import jasmine from "../assets/Jasmine.jpg";
import mabel from "../assets/Mabel.jpg";

const About = () => {
  const [visibleHeader, setVisibleHeader] = useState(0);

  // Change visible header every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleHeader((prev) => (prev + 1) % 2); // Toggle between 0 and 1
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <div className="bg-textColor">
      <div className="p-11 md:p-24 md:px-20 space-y-11">
        <div className="space-y-9">
          {/* First Header */}
          <h1
            className={`text-gray-400 pt-8 max-w-xl mt-16 text-3xl font-bold md:text-4xl transform transition-all duration-1000 ${
              visibleHeader === 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            } md:opacity-100 md:translate-y-0`} // No sliding on large screens
          >
            We build bridges between{" "}
            <span className="text-purple-900">entrepreneurs and customers</span>
          </h1>

          {/* Second Header */}
          <h3
            className={`md:ml-auto text-wrap max-w-md font-bold text-gray-700 transform transition-all duration-1000 ${
              visibleHeader === 1
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-20"
            } md:opacity-100 md:translate-y-0`} // No sliding on large screens
          >
            - To build software that gives small and medium student businesses
            the ability to create fruitful and enduring relationships with
            customers.
          </h3>
        </div>
      </div>

      <div className="h-1/5 overflow-hidden">
        <img src={img} alt="hands" className="h-full w-full object-fill" />
      </div>

      <div className="max-w-screen-xl mx-auto p-8">
        {/* Top Section */}
        <div className="border-b-2 pb-8">
          <div className="mt-20 justify-center border-t-2 border-b-2 border-b-gray-500 border-t-gray-500 py-12  flex space-x-28">
            <div className="hidden md:flex w-2/6 md:w-1/5">
              <h1 className="text-2xl md:text-4xl text-gray-700 font-bold">
                Together we
                <br />
                <span className="text-gray-700">are strong</span>
              </h1>
            </div>
            <div className="w-full md:w-2/5 space-y-12">
              <p className="mt-4 font-semibold text-gray-700">
                Our crew is always getting bigger, but we all work toward one
                goal: to make the connection process not only possible but fast
                and effective.
              </p>
              <p className="mt-4 text-sm text-gray-700">
                Welcome to KONNECT, the platform that connects innovative
                student entrepreneurs with potential clients. Our mission is to
                empower young minds by bridging the gap between student-driven
                businesses and people looking for fresh, creative solutions.
                Whether you're a student offering services or a client in search
                of particular products, KONNECT is your go-to marketplace. We
                believe in the power of entrepreneurship at all levels and aim
                to foster growth, collaboration, and opportunity.
                <br />
                <span>
                  {" "}
                  Join us to discover, connect, and support the next generation
                  of business leaders today!
                </span>
              </p>

              {/* Goal Section */}
              <div className="my-8">
                <p className="text-2xl text-gray-700 font-semibold italic">
                  "Our goal is to build software that gives seamless connection
                  of student entrepreneurs and available customers."
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t-2 pt-8">
            <div className="text-center p-7">
              <p className="text-gray-700">
                Team members who truly embody and exemplify integrity, leading
                with fairness and dignity, even in challenging situations.
              </p>
              <p className="text-3xl font-bold mt-4">3+</p>
            </div>
            <div className="text-center p-7">
              <p className="text-gray-700">
                Years of experience in delivering excellence, overcoming
                challenges and ensuring quality in every service provided.
              </p>
              <p className="text-3xl font-bold mt-4">1+</p>
            </div>
            <div className="text-center p-7">
              <p className="text-gray-700">
                Wonderful customers who inspire us with their trust and support,
                even through challenges.
              </p>
              <p className="text-3xl font-bold mt-4 md:mt-10">20k+</p>
            </div>
          </div>
        </div>
      </div>

      <section className="relative container p-12 text-textColor bg-purple-900 max-w-full">
        {/* Get to Know Us */}
        <div className="container mx-auto p-1  max-w-4xl">
          <h1 className="text-left text-2xl md:text-3xl lg:text-4xl font-bold">
            Meet our <br />
            amazing team
          </h1>
          <div className="flex flex-col md:flex-row mt-10 gap-8 justify-center items-center">
            <div className="card flex flex-col w-full md:w-52 text-xs md:text-sm items-center">
              <div className="flex md:hidden justify-center items-center w-2/4">
                <img
                  className="w-full object-cover md:w-full rounded-[9px] mb-[9px] h-56"
                  src={jasmine}
                  alt="Jasmine"
                />
              </div>
              <div className="hidden md:flex justify-center items-center">
                <img
                  className="object-cover w-full  rounded-[9px] mb-[9px] h-52 md:w-52"
                  src={jasmine}
                  alt="Jasmine"
                />
              </div>

              <h2 className="font-bold mt-2 overflow-hidden text-ellipsis">
                Okechukwu-Elemba Onyinye
              </h2>
              <p className="mt-2 font-bold">Product Designer</p>
              <p className="mt-2 text-xs">
                Certified designer from Genesys and Digital Dreams ICT Academy.
              </p>
            </div>

            <div className="card flex flex-col w-full md:w-52 text-xs md:text-sm items-center text-center">
              <div className="flex md:hidden justify-center items-center w-2/4 h-2/4">
                <img
                  className="w-full md:w-full rounded-[9px] mb-[9px] h-56"
                  src={Bubu}
                  alt="Jasmine"
                />
              </div>
              <div className="hidden md:flex justify-center items-center ">
                <img
                  className="w-3/4 rounded-[9px] mb-[9px] h-52 md:w-52"
                  src={Bubu}
                  alt="Jasmine"
                />
              </div>
              <h2 className="font-bold mt-2 overflow-hidden text-ellipsis">
                Ezeakalue Jude E.
              </h2>
              <p className="mt-2 font-bold">Frontend Developer</p>
              <p className="mt-2 text-xs">
                Certified developer from platforms like Sololearn, Scrimba,
                freeCodeCamp.
              </p>
            </div>

            <div className="card flex flex-col w-full md:w-52 text-xs md:text-sm items-center text-center">
              <div className="flex md:hidden justify-center items-center w-2/4">
                <img
                  className="w-full object-cover md:w-full rounded-[9px] mb-[9px] h-56"
                  src={mabel}
                  alt="Mabel"
                />
              </div>
              <div className="hidden md:flex justify-center items-center ">
                <img
                  className="w-3/4 object-cover rounded-[9px] mb-[9px] h-52 md:w-52"
                  src={mabel}
                  alt="Mabel"
                />
              </div>
              <h2 className="font-bold mt-2 overflow-hidden text-ellipsis">
                Ukoha Chidinma M.
              </h2>
              <p className="mt-2 font-bold">Backend Developer</p>
              <p className="mt-2 text-xs">
                Certified designer from Genesys and Digital Dreams ICT Academy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="p-16 mt-6 mb-6">
        <div className="border-t-2  border-t-gray-500 "></div>
      </div>

      {/*Call to action*/}
      <section className="bg-textColor relative overflow-hidden">
        <div className="flex items-center justify-center bg-gray-900 text-gray-300 h-3/4 relative z-10">
          {/* Left Content */}
          <div className="md:w-2/6 p-8 space-y-12">
            <h2 className="text-4xl font-semibold mb-4">
              Have a question? <br /> Our team is happy to assist you
            </h2>
            <p className="mb-6 text-wrap text-gray-300">
              Ask about KONNECT products, pricing, implementation, or anything
              else. Our highly trained reps are <br /> standing by, ready to
              help.
            </p>
            <div>
              <NavLink
                to="/contact"
                className="bg-teal-500 mt-10 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition"
              >
                CONTACT US
              </NavLink>
            </div>
          </div>

          {/* Right Content - Overlapping Circles */}
          <div className="hidden md:flex w-1/2 relative items-center justify-center">
            <div className="w-80 h-80 bg-purple-600 rounded-full absolute right-[-70px] top-[-70px]"></div>
            <div className="w-80 h-80 bg-teal-500 rounded-full absolute right-[-230px] top-[px]"></div>
          </div>
        </div>

        <div className="p-16 mt-6 mb-6"></div>

        {/* Background Circles Overlapping Section */}
        {/* <div className="absolute top-0 right-0 w-full h-full">
        <div className="w-96 h-96 bg-purple-600 rounded-full absolute bottom-[-100px] right-[-100px] opacity-30"></div>
        <div className="w-72 h-72 bg-teal-500 rounded-full absolute top-0 right-[-150px] opacity-40"></div>
      </div> */}
      </section>

      {/* Footer */}
      <footer className="bg-white text-black py-16">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Logo Section */}
          <div className="hidden md:flex p-4 rounded-xl shadow-xl">
            <img src={logo2} alt="logo" className=" max-h-20 object-contain" />
          </div>

          {/* Social Icons Section */}
          <div className="flex space-x-12 justify-center mx-auto md:justify-end">
            <a href="#" className="hover:text-gray-500">
              <FontAwesomeIcon icon={faFacebook} className="h-8" />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FontAwesomeIcon icon={faInstagram} className="h-8" />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FontAwesomeIcon icon={faTwitter} className="h-8" />
            </a>
            <a href="#" className="hover:text-gray-500">
              <FontAwesomeIcon icon={faLinkedin} className="h-8" />
            </a>
          </div>
        </div>

        <hr className="my-8 border-gray-300" />
        <div className="text-center text-sm text-gray-500">
          2024 Relume. All rights reserved.{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Terms of Service
          </a>{" "}
          |{" "}
          <a href="#" className="hover:underline">
            Cookie Settings
          </a>
        </div>
      </footer>
    </div>
  );
};

export default About;
