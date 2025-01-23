import { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase";
import { NavLink } from "react-router-dom";
import home from "../../assets/homeIcon1.png";
import profile from "../../assets/profileIcon.png";
import services from "../../assets/serviceIcon.png";
import settings from "../../assets/settingsIcon.png";
import logout from "../../assets/logoutIcon.png";
import logo from "../../assets/logo.jpg";

const DesktopSidebar = ({ user }) => {
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const activeStyles = {
    fontSize: "18px",
    color: "#00C2AA",
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User logged out successfully");
      // Redirect to login page or show a success message
      window.location.href = "/login"; // Adjust this if needed
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="bg-black hidden text-white w-64 h-screen fixed top-0 left-0 flex-col p-6 space-y-4 md:block z-40">
      {" "}
      {/* Always visible on desktop */}
      {/* <h1 className="text-2xl font-bold">KONNECT</h1> */}
      <div className="p-4 ml-9 mx-auto rounded-2xl shadow-xl">
        <img
          src={logo}
          alt="logo"
          className="md:flex max-h-20 object-contain"
        />
      </div>
      <nav className="space-y-2">
        {user.role === "User" ? (
          <NavLink
            to="."
            end
            className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            <div className="w-4 h-4 overflow-hidden cursor-pointer">
              <img src={home} alt="Avatar" className="object-cover" />
            </div>{" "}
            <span className="text-sm">Dashboard</span>
          </NavLink>
        ) : (
          <NavLink
            to="entrepreneur"
            end
            className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700"
            style={({ isActive }) => (isActive ? activeStyles : null)}
          >
            <div className="w-4 h-4 overflow-hidden cursor-pointer">
              <img src={home} alt="Avatar" className="object-cover" />
            </div>{" "}
            <span className="text-sm">Dashboard</span>
          </NavLink>
        )}

        <NavLink
          to="profile"
          className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <div className="w-4 h-4 overflow-hidden cursor-pointer">
            <img src={profile} alt="Avatar" className="object-cover" />
          </div>{" "}
          <span className="text-sm">Profile</span>
        </NavLink>

        <NavLink
          to="services"
          className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <div className="w-4 h-4 overflow-hidden cursor-pointer">
            <img src={services} alt="Avatar" className="object-cover" />
          </div>{" "}
          <span className="text-sm">Services</span>
        </NavLink>

        {/* <NavLink to="history" className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700" style={({isActive}) => isActive ? activeStyles : null}>
          History
        </NavLink> */}
        <NavLink
          to="settings"
          className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700"
          style={({ isActive }) => (isActive ? activeStyles : null)}
        >
          <div className="w-4 h-4 overflow-hidden cursor-pointer">
            <img src={settings} alt="Avatar" className="object-cover" />
          </div>{" "}
          <span className="text-sm">Settings</span>
        </NavLink>

        {/* Logout Button with Modal */}
        <button
          onClick={() => setIsLogoutModalOpen(true)}
          className="flex w-full space-x-4 py-4 px-4 rounded hover:bg-gray-700"
        >
          <div className="w-4 h-4 overflow-hidden cursor-pointer">
            <img src={logout} alt="Logout" className="object-cover" />
          </div>
          <span className="text-sm">Logout</span>
        </button>

        {/* <NavLink to="/logout" 
        className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700"
        style={({isActive}) => isActive ? activeStyles : null}
        >
        <div className="w-4 h-4 overflow-hidden cursor-pointer">
          <img
            src={logout}
            alt="Avatar"
            className="object-cover"
          />
        </div> <span className='text-sm'>Logout</span>
        </NavLink> */}
      </nav>
      {/* Logout Confirmation Modal */}
      {isLogoutModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-96">
            <h2 className="text-lg text-black font-semibold mb-4">
              Confirm Logout
            </h2>
            <p className="mb-6 text-black">Are you sure you want to log out?</p>
            <div className="flex justify-end space-x-4">
              <button
                className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                onClick={() => setIsLogoutModalOpen(false)}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => {
                  handleLogout();
                  setIsLogoutModalOpen(false);
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DesktopSidebar;

// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <div
//       className={`bg-gray-900 text-white w-64 h-screen fixed top-0 left-0 flex flex-col p-6 space-y-4 transition-transform transform ${
//         isOpen ? 'translate-x-0' : '-translate-x-full'
//       } md:translate-x-0 md:static z-50`} // Fixed position for mobile and static for large screens
//     >
//       <h1 className="text-2xl font-bold">KONNECT</h1>
//       <nav className="space-y-2">
//         <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
//           Dashboard
//         </Link>
//         <Link to="/dashboard/profile" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
//           Profile
//         </Link>
//         <Link to="/dashboard/services" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
//           Services
//         </Link>
//         {/* <Link to="/dashboard/history" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
//           History
//         </Link> */}
//         <Link to="/dashboard/settings" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
//           Settings
//         </Link>
//         <Link to="/logout" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
//           Logout
//         </Link>
//       </nav>
//     </div>
//   );
// };
// // PropTypes for validation
// Sidebar.propTypes = {
//   isOpen: PropTypes.bool.isRequired,
//   toggleSidebar: PropTypes.func.isRequired,
// };

// // export default Sidebar;

// // const Sidebar = ({ isOpen, toggleSidebar }) => {
// //   return (
// //     <div
// //       className={`bg-gray-900 text-white w-64 h-screen fixed top-0 left-0 flex flex-col p-6 space-y-4 transition-transform transform ${
// //         isOpen ? 'translate-x-0' : '-translate-x-full'
// //       } md:translate-x-0 md:static`}  // Ensure the sidebar stays visible on medium and larger screens
// //     >
// //       <h1 className="text-2xl font-bold">KONNECT</h1>
// //       <nav className="space-y-2">
// //         <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           Dashboard
// //         </Link>
// //         <Link to="/profile" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           Profile
// //         </Link>
// //         <Link to="/services" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           Services
// //         </Link>
// //         <Link to="/history" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           History
// //         </Link>
// //         <Link to="/settings" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           Settings
// //         </Link>
// //         <Link to="/logout" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           Logout
// //         </Link>
// //       </nav>
// //     </div>
// //   );
// // };

// // import {Link} from "react-router-dom"
// // import PropTypes from 'prop-types';

// // const Sidebar = ({ isOpen, toggleSidebar }) => {
// //   return (
// //     <div
// //       className={`bg-gray-900 text-white w-64 h-screen fixed top-0 left-0 flex flex-col p-6 space-y-4 transition-transform transform ${
// //         isOpen ? 'translate-x-0' : '-translate-x-full'
// //       } md:translate-x-0`}
// //     >
// //       <h1 className="text-2xl font-bold">KONNECT</h1>
// //       <nav className="space-y-2">
// //         <Link to="/" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           Dashboard
// //         </Link>
// //         <Link to="/profile" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           Profile
// //         </Link>
// //         <Link to="/services" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           Services
// //         </Link>
// //         <Link to="/history" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           History
// //         </Link>
// //         <Link to="/settings" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           Settings
// //         </Link>
// //         <Link to="/logout" className="block py-2 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
// //           Logout
// //         </Link>
// //       </nav>
// //     </div>
// //   );
// // };

// // // PropTypes for validation
// // Sidebar.propTypes = {
// //   isOpen: PropTypes.bool.isRequired,
// //   toggleSidebar: PropTypes.func.isRequired,
// // };

// // const Sidebar = () => {
// //     return (

// //       // <div className="bg-black text-textColor w-64 h-screen fixed top-0 left-0 flex flex-col p-6 space-y-4">
// //       //   <h1 className="text-2xl font-bold">KONNECT</h1>
// //       //   <nav className="space-y-2">
// //       //     <Link to="/dashboard" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</Link>
// //       //     <Link to="/dashboard/profile" className="block py-2 px-4 rounded hover:bg-gray-700">Profile</Link>
// //       //     <Link to="/dashboard/services" className="block py-2 px-4 rounded hover:bg-gray-700">Services</Link>
// //       //     {/* <Link to="/dashboard/history" className="block py-2 px-4 rounded hover:bg-gray-700">History</Link> */}
// //       //     <Link to="/dashboard/settings" className="block py-2 px-4 rounded hover:bg-gray-700">Settings</Link>
// //       //     <Link to="/logout" className="block py-2 px-4 rounded hover:bg-gray-700">Logout</Link>
// //       //   </nav>
// //       // </div>
// //     );
// //   };

//   export default Sidebar
