// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Service from "./pages/Services";
import Contact from "./pages/Contact";
import Welcome from "./pages/Welcome";
import SignIn from "./pages/Authentication/SignIn";
import SignUp from "./pages/Authentication/SignUp";
import SignUp2 from "./pages/Authentication/SignUp2";
import ResetPassword from "./pages/Authentication/ResetPassword";
import CheckMail from "./pages/Authentication/CheckMail";
import CreateNewPassword from "./pages/Authentication/CreateNewPassword";
import Layout from "./components/Layout";
import GeneralLayout from "./components/GeneralLayout";
import EducationalContent from "./components/education";
import NotFound from "./pages/NotFound";
import Error from "./pages/Error";

import Dashboard from "./pages/Host/Dashboard";
import EntrepDashboard from "./pages/Entrepreneur/EntrepDashboard";
import Profile from "./pages/Host/Profile";
import Services from "./pages/Host/Services";
import ServicesDetails from "./pages/Host/ServicesDetail";
import { educationLoader as educationLoader } from "./pages/productLoader";
import { loader as servicesLoader } from "./pages/productLoader";
import { userLoader as userLoader } from "./pages/Host/UserData";
import { serviceloader as serviceLoader } from "./pages/productLoader";
import { serviceDetailLoader as servicesDetailLoader } from "./pages/productLoader"; // For ServiceDetails page
import { action as signupAction } from "./pages/productLoader";
import { signinAction as loginAction } from "./pages/productLoader";
import { messageLoader as loginMessageLoader } from "./pages/productLoader";
// import History from "./pages/Host/History"
import Settings from "./pages/Host/Settings";
import ChatPage from "./pages/Host/chat";
import PaymentDetails from "./pages/Host/pay";
import NotificationPage from "./pages/Host/NotificationPage";
import AnnouncementTab from "./pages/Host/AnnouncementTab";
import Accounttype from "./pages/Host/Accounttype";
import RoleProtectedRoute from "./pages/Host/RoleProtectedRoute"; // Adjust the path based on your project structure
import HostLayout from "./components/HostLayout";

// import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
// import { requireAuth } from "./pages/Authentication/utility"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<GeneralLayout />}>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="services"
          element={<Service />}
          loader={serviceLoader}
          errorElement={<Error />}
        />
        <Route
          path="services/:id"
          element={<ServicesDetails />}
          errorElement={<Error />}
          loader={servicesDetailLoader}
        />
         <Route 
          path="academy" 
          element={<EducationalContent />} 
          errorElement={<Error />}
          loader={educationLoader}
          />
        <Route path="contact" element={<Contact />} />
        <Route path="welcome" element={<Welcome />} />
      </Route>

      <Route path="dashboard" element={<HostLayout />} loader={userLoader}>
        <Route
          index
          element={<Dashboard />}
          loader={userLoader}
          errorElement={<Error />}
        />
        <Route
          path="entrepreneur"
          element={<RoleProtectedRoute allowedRoles={["Entrepreneur"]} />}
          loader={userLoader}
          errorElement={<Error />}
        >
          <Route
            index
            element={<EntrepDashboard />}
            loader={userLoader}
            errorElement={<Error />}
          />
        </Route>

        <Route
          path="profile"
          element={<Profile />}
          loader={userLoader}
          errorElement={<Error />}
        />

        <Route
          path="services"
          element={<Services />}
          loader={servicesLoader}
          errorElement={<Error />}
        />
        <Route
          path="services/:id"
          element={<ServicesDetails />}
          errorElement={<Error />}
          loader={servicesDetailLoader}
        />



        {/* <Route path="history" element={<History />} /> */}
        <Route
          path="settings"
          element={<Settings />}
          errorElement={<Error />}
          // loader={async ({ request }) => await requireAuth(request)}
          loader={userLoader}
        />


        <Route
          path="settings/account-type"
          element={<Accounttype />}
          loader={userLoader}
          errorElement={<Error />}
        />
      </Route>
      <Route
        path="login"
        element={<SignIn />}
        action={loginAction}
        loader={loginMessageLoader}
        errorElement={<Error />}
      />
      <Route
        path="signup"
        element={<SignUp />}
        action={signupAction}
        errorElement={<Error />}
      />
      <Route
          path="/dashboard/notification"
          element={<NotificationPage />}
          loader={userLoader}
          errorElement={<Error />}
      >
          <Route
            path="announcement"
            element={<AnnouncementTab />}
            loader={userLoader}
            errorElement={<Error />}
          />
      </Route>

      <Route
          path="/dashboard/chat"
          element={<ChatPage />}
          errorElement={<Error />}
          loader={userLoader}
        />

        <Route
          path="/dashboard/pay"
          element={<PaymentDetails />}
          errorElement={<Error />}
          loader={userLoader}
        />

      <Route path="registerentrepreneur" element={<SignUp2 />} />
      <Route path="resetpassword" element={<ResetPassword />} />
      <Route path="checkmail" element={<CheckMail />} />
      <Route path="newpassword" element={<CreateNewPassword />} />
      <Route path="*" element={<NotFound />} />
      {/* <ToastContainer /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
