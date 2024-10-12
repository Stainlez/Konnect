import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Logo.jpeg";

export default function Header() {
  // State to manage the menu's open/close status
  const [isOpen, setIsOpen] = useState(false);
  const activeStyles = {
    fontSize: "18px",
    color: "yellow",
}
const activeStyle = {
  // fontSize: "18px",
  color: "purple",
}

  // Function to handle menu toggle
  const handleMenuToggle = () => {
    setIsOpen(!isOpen); // Toggle the menu state
  };

  return (
    <nav className="relative container max-w-full p-2 bg-purpleBg">
      {/* Flex container */}
      <div className="flex items-center justify-between bg-purpleBg">
        {/* Logo */}
        <div className=" bg-purpleBg">
          <img src={logo} alt="logo" className="rounded-full mr-auto h-10" />
        </div>

        {/* Menu Items (hidden on mobile) */}
        <div className="hidden m-auto text-gray-100 bg-purpleBg space-x-6 md:flex">
          <NavLink to="/home" 
          className="hover:text-yellow "
            style={({isActive}) => isActive ? activeStyles : null}>
            HOME
          </NavLink>
          <NavLink to="/about" 
          style={({isActive}) => isActive ? activeStyles : null}
          className="hover:text-yellow ">
            ABOUT
          </NavLink>
          <NavLink to="/services" 
          style={({isActive}) => isActive ? activeStyles : null}
          className="hover:text-yellow ">
            SERVICES
          </NavLink>
          <NavLink to="/contact" 
          style={({isActive}) => isActive ? activeStyles : null}
          className="hover:text-yellow ">
            CONTACT
          </NavLink>
        </div>

        {/* Sign In Button (hidden on mobile) */}
        <NavLink
          to="/login"
          style={({isActive}) => isActive ? activeStyles : null}
          className="hidden py-2 px-3 text-sm text-black bg-veryLightGray rounded-lg self-right hover:bg-yellow md:block"
        >
          SIGN IN
        </NavLink>

        {/* Hamburger Icon (visible on mobile) */}
        <button
          onClick={handleMenuToggle} // Event handler for toggling the menu
          className={`block hamburger md:hidden focus:outline-none ${isOpen ? "open" : ""}`} // Dynamically apply 'open' class
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden ">
        <div
          className={`absolute bg-paleLavender max-w-full flex-col items-center py-8 mt-10 space-y-6 font-bold sm:w-auto sm:self-center left-6 right-6 drop-shadow-md ${
            isOpen ? "flex" : "hidden"
          }`} // Toggle between 'flex' and 'hidden' classes based on state
        >
        <NavLink to="/home" 
        style={({isActive}) => isActive ? activeStyle : null}
        className="hover:text-darkGrayishBlue">
            HOME
          </NavLink>
          <NavLink to="/about" 
          style={({isActive}) => isActive ? activeStyle : null}
          className="hover:text-darkGrayishBlue">
            ABOUT
          </NavLink>

          <NavLink to="/services" 
          style={({isActive}) => isActive ? activeStyle : null}
          className="hover:text-darkGrayishBlue">
            SERVICES
          </NavLink>
          <NavLink to="/contact" 
          style={({isActive}) => isActive ? activeStyle : null}
          className="hover:text-darkGrayishBlue">
            CONTACT
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
