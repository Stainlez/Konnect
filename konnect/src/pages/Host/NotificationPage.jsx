import React from "react";
import { Link, NavLink, useLoaderData, Outlet, useLocation } from "react-router-dom";
import back from "../../assets/back.png"

function NotificationPage() {
  const user = useLoaderData(); // Load user data dynamically
  const { notifications } = user; // Extract notifications from user data
  const location = useLocation(); // Get the current route

  const activeClassName = "font-bold border-b-2 border-black text-black";
  const inactiveClassName = "text-gray-500 hover:text-black";

  // Check if the current route is `/notification` (Personal tab)
  const isPersonalRoute = location.pathname === "/dashboard/notification";

  return (
    <div className="bg-textColor min-h-screen">
      {/* Header */}
      <div className="p-8">
        <Link to="/dashboard" relative="path" className="flex">
          <img src={back} alt="Back" className="w-7 h-5 mt-1" />
          <h1 className="text-lg pl-2 font-bold mb-4">NOTIFICATIONS</h1>
        </Link>
      </div>

      {/* Navbar */}
      <nav className="grid grid-cols-2 border-b pb-2 shadow-sm">
        <NavLink
          to="."
          end
          className={({ isActive }) =>
            isActive ? `text-center ${activeClassName}` : `text-center ${inactiveClassName}`
          }
        >
          PERSONAL
        </NavLink>
        <NavLink
          to="announcement"
          className={({ isActive }) =>
            isActive ? `text-center ${activeClassName}` : `text-center ${inactiveClassName}`
          }
        >
          ANNOUNCEMENTS
        </NavLink>
      </nav>

      {/* Notifications List - Only render on `/notification` */}
      {isPersonalRoute && (
        <div className="px-6 pt-6">
          {notifications && notifications.length > 0 ? (
            notifications.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center p-1 mb-4 rounded-lg"
              >
                <img
                  src={notification.icon}
                  alt="Notification Icon"
                  className="h-6 w-6 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{notification.title}</h2>
                  <p className="text-gray-600">{notification.description}</p>
                </div>
                <span className="text-gray-500 text-sm">{notification.date}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 mt-4">
              There are no notifications for now.
            </p>
          )}
        </div>
      )}

      {/* Sub-routes */}
      <div className="px-12 pt-2">
        <Outlet />
      </div>
    </div>
  );
  
}
  
      // <Outlet />
      {/* <div className="flex space-x-4 border-b">
        <Link
          to="."
          className={`pb-2 ${isPersonal ? "border-b-2 border-black" : ""}`}
        >
          Personal
        </Link>
        <Link
          to="/dashboard/notification/announcement"
          className={`pb-2 ${!isPersonal ? "border-b-2 border-black" : ""}`}
        >
          Announcements
        </Link>
      </div>
      <div className="mt-4">
        {isPersonal ? (
          <div>
            <h1 className="text-xl font-semibold">Welcome to Konnect!</h1>
            <p>
              We’re delighted you chose our platform for your entrepreneurial
              services.
            </p>
            <p className="text-gray-500">15 October 2024</p>
          </div>
        ) : (
          <p>No personal notifications yet.</p>
        )}
      </div> */}



export default NotificationPage;
