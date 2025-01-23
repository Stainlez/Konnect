import React from "react";
import { Link, NavLink, useLoaderData, Outlet, useLocation } from "react-router-dom";

function AnnouncementTab() {
  const user = useLoaderData(); // Load user data dynamically
  const { announcements } = user; // Extract announcements from user data
  const location = useLocation(); // Get the current route

  // Check if the current route is `/announcement` (Personal tab)
  const isPersonalRoute = location.pathname === "/dashboard/notification/announcement";

  return (
    <div className="bg-textColor min-h-screen">
     
      {/* Announcement List - Only render on `/notification/announcement` */}
      {isPersonalRoute && (
        <div className="md:px-6 pt-6">
          {announcements && announcements.length > 0 ? (
            announcements.map((announcements) => (
              <div
                key={announcements.id}
                className="flex items-center p-1 mb-4 rounded-lg"
              >
                <img
                  src={announcements.icon}
                  alt="Notification Icon"
                  className="h-6 w-6 rounded-full mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-bold">{announcements.title}</h2>
                  <p className="text-gray-600">{announcements.description}</p>
                </div>
                <span className="text-gray-500 text-sm">{announcements.date}</span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 mt-4">
              There are no announcements for now.
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


export default AnnouncementTab;
