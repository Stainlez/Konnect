import React from 'react';
// import PropTypes from 'prop-types';
import { NavLink, Link } from 'react-router-dom';
import home from '../../assets/homeIcon.png'
import profile from '../../assets/profileIcon.png'
import services from '../../assets/serviceIcon.png'
import settings from '../../assets/settingsIcon.png'
import logout from '../../assets/logoutIcon.png'
import logo from '../../assets/logo.jpg'

const DesktopSidebar = () => {
  const activeStyles = {
    fontSize: "18px",
    color: "#00C2AA",
}
  return (
    <div className="bg-black hidden text-white w-64 h-screen fixed top-0 left-0 flex-col p-6 space-y-4 md:block z-40"> {/* Always visible on desktop */}
      {/* <h1 className="text-2xl font-bold">KONNECT</h1> */}

      <div className="p-4 ml-9 mx-auto rounded-2xl shadow-xl">
          <img 
            src={logo} 
            alt="logo" 
            className="md:flex max-h-20 object-contain" 
          />
        </div>
      <nav className="space-y-2">
        <NavLink to="."
        end 
        className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700"
        style={({isActive}) => isActive ? activeStyles : null}
        >
        <div className="w-4 h-4 overflow-hidden cursor-pointer">
          <img
            src={home}
            alt="Avatar"
            className="object-cover"
          />
        </div> <span className='text-sm'>Dashboard</span>
        </NavLink>

        <NavLink to="profile" 
        className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700"
        style={({isActive}) => isActive ? activeStyles : null}
        >
        <div className="w-4 h-4 overflow-hidden cursor-pointer">
          <img
            src={profile}
            alt="Avatar"
            className="object-cover"
          />
        </div> <span className='text-sm'>Profile</span>
        </NavLink>

        <NavLink to="services" 
        className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700"
        style={({isActive}) => isActive ? activeStyles : null}
        >
          <div className="w-4 h-4 overflow-hidden cursor-pointer">
            <img
              src={services}
              alt="Avatar"
              className="object-cover"
            />
          </div> <span className='text-sm'>Services</span>
        </NavLink>

        {/* <NavLink to="history" className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700" style={({isActive}) => isActive ? activeStyles : null}>
          History
        </NavLink> */}
        <NavLink to="settings" 
        className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700"
        style={({isActive}) => isActive ? activeStyles : null}
        >
        <div className="w-4 h-4 overflow-hidden cursor-pointer">
          <img
            src={settings}
            alt="Avatar"
            className="object-cover"
          />
        </div> <span className='text-sm'>Settings</span>
        </NavLink>

        <NavLink to="/logout" 
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
        </NavLink>
      </nav>
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