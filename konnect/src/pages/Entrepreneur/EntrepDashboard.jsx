import { useEffect } from "react";
// import { doc, getDoc } from 'firebase/firestore';
import { NavLink, useLoaderData, useLocation } from "react-router-dom";
import SearchBar from "../Host/SearchBar";
// import { auth, db } from '../../Firebase/firebase'; // Adjust the path to your firebase config
import CircularProgressBar from "../Host/ProgressBar";
// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const EntrepDashboard = () => {
  const user = useLoaderData();
  //   const location = useLocation();

  //   useEffect(() => {
  //     // Check if the redirect was from RoleProtectedRoute and show the toast message
  //     if (location.state?.fromRoleProtectedRoute) {
  //       toast.info("Become an Entrepreneur to access this feature", {
  //         position: "top-center",
  //         autoClose: 3000,
  //         toastClassName: 'custom-toast-progress',
  //       });
  //     }
  //   }, [location]);

  return (
    <div className="p-6 md:px-16 bg-textColor min-h-screen">
      <SearchBar />
      <div className="flex py-8 ">
        <h2 className="text-3xl pt-3 md:pl-7 text-nowrap mr-5 font-bold">
          Hello {user ? `${user.firstname}!` : "..."}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* User Info */}
        <div className="bg-gradient-to-b from-[#7D4EDA] to-[#381E5D] justify-center p-6 rounded-lg shadow-md flex flex-col md:col-span-1">
          <div className="w-24 h-24 bg-purple-500 rounded-full mb-4">
            <img
              src={
                user.avatar
                  ? user.avatar
                  : "https://www.w3schools.com/w3images/avatar2.png"
              }
              alt="Avatar"
              className="rounded-full w-24 h-24"
            />
          </div>
          <h2 className="text-xl font-semibold text-white">
            {user.occupation}
          </h2>
          <span className="text-green-300">Online</span>
          <p className="mt-2 text-sm text-gray-200">
            You have {user.unread} unread messages
          </p>
        </div>

        <div className="flex p-5 flex-col md:col-span-1 space-y-6">
          {/* New Konnects */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">New Konnects</h2>
            <p
              className="text-3xl font-semibold"
              style={{ color: "hsla(264, 69%, 61%, 1)" }}
            >
              {user.newKonnects}
            </p>

            <p className="text-sm text-gray-500">
              20% decrease in the last 20 days
            </p>
          </div>
          {/* Total Konnects */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold">Total Konnects</h2>
            <p
              className="text-3xl font-semibold"
              style={{ color: "hsla(264, 69%, 61%, 1)" }}
            >
              {user.totalKonnects}
            </p>
            <p className="text-sm text-gray-500">50% increase than before</p>
          </div>
        </div>
      </div>

      {/* Konnect Analytics */}
      <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
        <h2 className="text-lg font-bold mb-4">Konnect Analytics</h2>
        {/* Placeholder for analytics chart */}
        <div className="h-32 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg"></div>
      </div>

      {/* Recent History and Progress */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Recent History */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Recent History</h2>
          <ul className="space-y-4">
            {user.history.map((item) => (
              <li key={item.id} className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gray-300 rounded-full mr-4">
                    <img
                      src={item.avatar}
                      alt={item.productname}
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.productname}
                    </p>
                    <p className="text-xs text-gray-500">{item.category}</p>
                  </div>
                </div>
                <span
                  className={`px-3 py-1 text-xs font-semibold ${
                    item.status === "Completed"
                      ? "text-green-600 bg-green-100"
                      : item.status === "Pending"
                      ? "text-red-600 bg-red-100"
                      : item.status === "In Progress"
                      ? "text-white bg-[#d8e33f]" // text color
                      : "text-[#d8e33f] bg-[#d8e33f]"
                  } rounded-full`}
                  style={
                    item.status === "In Progress"
                      ? { backgroundColor: "hsba(51, 97%, 76%, 1)" }
                      : {}
                  }
                >
                  {item.status}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Progress Chart */}
        {/* <div className="rounded-lg shadow-md"> */}
        <div className="flex items-center justify-center">
          <CircularProgressBar percentage={41} />
          {/* </div> */}
        </div>
      </div>
      {/* <ToastContainer position="top-center"/> */}
    </div>
  );
};

export default EntrepDashboard;
