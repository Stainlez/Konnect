// import { useEffect } from 'react';
import PropTypes from "prop-types"; // Import PropTypes
import { Navigate, Outlet, useLoaderData } from "react-router-dom";
// import { toast } from 'react-toastify';

const RoleProtectedRoute = ({ allowedRoles }) => {
  const user = useLoaderData();

  // useEffect(() => {
  //   if (user && !allowedRoles.includes(user.role)) {
  //     toast.info("Become an Entrepreneur to access this feature", {
  //         position: "top-center",  // Customize the position for this toast
  //     autoClose: 5000,         // Auto close after 5 seconds
  //     pauseOnHover: true,  // Show progress bar
  //     closeOnClick: true,
  //     });
  //   }
  // }, [user, allowedRoles]);

  if (!user) {
    // Redirect if user data is not available
    return <Navigate to="/login" />;
  }

  return allowedRoles.includes(user.role) ? (
    <Outlet />
  ) : (
    <Navigate to="/dashboard" state={{ fromRoleProtectedRoute: true }} />
  );
};

// Define PropTypes for the component
RoleProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string).isRequired, // Validate as an array of strings
  user: PropTypes.shape({
    role: PropTypes.string.isRequired, // Validate that user has a role property which is a string
  }).isRequired,
};

export default RoleProtectedRoute;
