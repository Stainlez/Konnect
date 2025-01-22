import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../pages/Host/Sidebar";
import MobileSidebar from "../pages/Host/MobileSidebar";
import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const HostLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const user = useLoaderData();
  console.log(user);
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <div className="flex font-montserrat relative">
      {/* Mobile Sidebar */}
      <MobileSidebar
        user={user}
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      {/* Desktop Sidebar (Always visible on larger screens) */}
      <Sidebar user={user} />

      {/* Overlay for Mobile Sidebar */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeSidebar} // Close the sidebar on overlay click
        />
      )}

      {/* Content Area */}
      <div
        className={`ml-0 md:ml-64 flex-grow transition-all ${
          isSidebarOpen ? "blur-sm" : ""
        }`}
      >
        {/* Hamburger Button for Mobile */}
        <div className="flex justify-between items-center p-4  border-b-black border-b-2 bg-textColor shadow md:hidden">
          <button
            onClick={toggleSidebar}
            className="bg-gray-900 text-white p-2 rounded-md"
          >
            ☰
          </button>

          <div className="flex items-center bg-white rounded-full p-2 w-2/5 max-w-xl">
            <input
              type="text"
              placeholder="Search..."
              className="border-none outline-none w-full p-2 rounded-full text-sm"
            />
            {/* <div className="relative flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full cursor-pointer"> */}
            <span className="text-lg">
              {/* 🔔 */}
              <div className="relative flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full cursor-pointer">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-600" />
              </div>
            </span>
          </div>

          <div className="flex space-x-2">
            <div className="relative flex items-center justify-center w-8 h-8 bg-gray-300 rounded-full cursor-pointer">
              <span className="text-lg">🔔</span>
              <span className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full px-2">
                3
              </span>
            </div>
            <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer">
              <Link to="/dashboard/profile">
                <img
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

// const HostLayout = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     <div className="flex relative">
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

//       {/* Overlay and background dimming */}
//       {isSidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black opacity-50 z-40"
//           onClick={closeSidebar} // Close the sidebar when clicking the overlay
//         />
//       )}

//       {/* Content Area */}
//       <div className={`ml-0 md:ml-64 flex-grow ${isSidebarOpen ? 'blur-sm' : ''}`}>
//         {/* Mobile Hamburger Menu */}
//         <div className="p-4 bg-gray-100 shadow md:hidden">
//           <button
//             onClick={toggleSidebar}
//             className="bg-gray-900 text-white p-2 rounded-md"
//           >
//             ☰
//           </button>
//         </div>

//         {/* Content */}
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// const HostLayout = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = (e) => {
//     // Prevent closing when clicking inside the sidebar area
//     if (!e.target.closest('.sidebar')) {
//       setSidebarOpen(false);
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div className="ml-0 md:ml-64 flex-grow" onClick={closeSidebar}>
//         <div className="p-4 bg-gray-100 shadow md:hidden">
//           <button
//             onClick={toggleSidebar}
//             className="bg-gray-900 text-white p-2 rounded-md"
//           >
//             ☰
//           </button>
//         </div>
//         {/* <Outlet /> */}
//       </div>
//     </div>
//   );
// };

// const HostLayout = () => {
//   const [isSidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarOpen(!isSidebarOpen);
//   };

//   const closeSidebar = () => {
//     setSidebarOpen(false);
//   };

//   return (
//     <div className="flex">
//       <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
//       <div className="ml-0 md:ml-64 flex-grow" onClick={closeSidebar}>
//         <div className="p-4 bg-gray-100 shadow md:hidden">
//           <button
//             onClick={toggleSidebar}
//             className="bg-gray-900 text-white p-2 rounded-md"
//           >
//             ☰
//           </button>
//         </div>
//         <Outlet />
//       </div>
//     </div>
//   );
// };

// const HostLayout = () => {
//   return (
//     <div className="flex">
//     <Sidebar />
//     <div className="ml-64 flex-grow">
//       <Outlet />
//     </div>
//   </div>
//   )
// }

export default HostLayout;
