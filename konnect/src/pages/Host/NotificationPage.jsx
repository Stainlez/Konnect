import React from "react";
import { Link, useLocation } from "react-router-dom";

function NotificationPage() {
  const location = useLocation();
  const isPersonal = location.pathname === "/notification";

  return (
    <div className="p-4 bg-textColor min-h-screen">
      <div className="flex space-x-4 border-b">
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
      </div>
    </div>
  );
}

export default NotificationPage;
