import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.jpg";

export default function Header() {
  // State to manage the menu's open/close status
  const [isOpen, setIsOpen] = useState(false);
  const activeStyles = {
    fontSize: "18px",
    color: "#00C2AA",
  };

  // Function to handle menu toggle
  const handleMenuToggle = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <nav className="relative font-montserrat container max-w-full p- bg-black">
      {/* // <nav className="flex items-center justify-between p-6 bg-black text-white"> */}
      {/* Flex container */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="h-20">
          <NavLink to="/">
            <img
              src={logo}
              alt="logo"
              className="mr-auto ml-4 md:ml-9 h-20 object-cover rounded-full"
            />
          </NavLink>
        </div>

        {/* Menu Items (hidden on mobile) */}
        <div className="hidden m-auto text-textColor space-x-6 md:flex">
          <NavLink
            to="/home"
            className="hover:text-green-600 "
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            className="hover:text-green-600 "
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/services"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            className="hover:text-green-600 "
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            className="hover:text-green-600"
          >
            CONTACT
          </NavLink>
        </div>

        {/* Sign In Button (hidden on mobile) */}
        <NavLink
          to="/welcome"
          style={({ isActive }) => (isActive ? activeStyles : null)}
          className="hidden md:flex py-2 px-3 text-lg text-black bg-textColor rounded-lg mr-16 hover:bg-highlight"
        >
          Get Started
        </NavLink>

        {/* Hamburger Icon (visible on mobile) */}
        <button
          onClick={handleMenuToggle} // Event handler for toggling the menu
          className={`block hamburger md:hidden focus:outline-none ${
            isOpen ? "open" : ""
          }`} // Dynamically apply 'open' class
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden ">
        <div
          className={`absolute bg-textColor max-w-full flex-col items-center py-8 mt-2 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
            isOpen ? "flex" : "hidden"
          }`} // Toggle between 'flex' and 'hidden' classes based on state
        >
          <NavLink
            to="/home"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            className="hover:text-green-600shBlue"
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            className="hover:text-green-600shBlue"
          >
            ABOUT
          </NavLink>

          <NavLink
            to="/services"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            className="hover:text-green-600shBlue"
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/contact"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            className="hover:text-green-600shBlue"
          >
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
