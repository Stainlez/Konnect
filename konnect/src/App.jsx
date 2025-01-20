// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom"

import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import About from "./pages/About"
import Service from "./pages/Services"
import Contact from "./pages/Contact"
import Welcome from "./pages/Welcome"
import SignIn from "./pages/Authentication/SignIn"
import SignUp from "./pages/Authentication/SignUp"
import SignUp2 from "./pages/Authentication/SignUp2"
import ResetPassword from "./pages/Authentication/ResetPassword"
import CheckMail from "./pages/Authentication/CheckMail"
import CreateNewPassword from "./pages/Authentication/CreateNewPassword"
import Layout from "./components/Layout"
import GeneralLayout from "./components/GeneralLayout"
import NotFound from "./pages/NotFound"
import Error from "./pages/Error"

import Dashboard from "./pages/Host/Dashboard"
import Profile from "./pages/Host/Profile"
import Services from "./pages/Host/Services"
import ServicesDetails from "./pages/Host/ServicesDetail"
import { loader as servicesLoader } from "./pages/productLoader"
import { serviceloader as serviceLoader } from "./pages/productLoader"
import { serviceDetailLoader as servicesDetailLoader } from "./pages/productLoader";  // For ServiceDetails page
import { action as signupAction } from "./pages/productLoader"
import { signinAction as loginAction } from "./pages/productLoader"
import { messageLoader as loginMessageLoader } from "./pages/productLoader"
// import History from "./pages/Host/History"
import Settings from "./pages/Host/Settings"
import HostLayout from "./components/HostLayout"
import { requireAuth } from "./pages/Authentication/utility"
import './App.css'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<GeneralLayout />}>
        <Route path="/" element={<Layout />}>  
            <Route index element={<LandingPage />} />
            <Route path="home" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="services" element={<Service />} 
              loader={serviceLoader}
              errorElement={<Error />}
            />
              <Route 
                path="services/:id" 
                element={<ServicesDetails />} 
                errorElement={<Error />}
                loader={servicesDetailLoader}
              />
            <Route path="contact" element={<Contact />} />
            <Route path="welcome" element={<Welcome />} />
          </Route>
        

          <Route path="dashboard" element={<HostLayout />}>
              <Route 
                index 
                element={<Dashboard />} 
                loader={async ({ request }) => await requireAuth(request)}
                errorElement={<Error />}
                />
              <Route 
                path="profile" 
                element={<Profile />} 
                loader={async ({ request }) => await requireAuth(request)}
                errorElement={<Error />}
                />
              <Route path="services" element={<Services />} 
                loader={servicesLoader}
                errorElement={<Error />}
              />
              <Route 
                path="services/:id" 
                element={<ServicesDetails />} 
                errorElement={<Error />}
                loader={servicesDetailLoader}
              />
                
              {/* <Route path="/dashboard/history" element={<History />} /> */}
              <Route 
                path="settings" 
                element={<Settings />} 
                loader={async ({ request }) => await requireAuth(request)}
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
          <Route path="registerentrepreneur" element={<SignUp2 />} />
          <Route path="resetpassword" element={<ResetPassword />} />
          <Route path="checkmail" element={<CheckMail />} />
          <Route path="newpassword" element={<CreateNewPassword />} />
          <Route path="*" element={<NotFound />} />

      </Route>

))

function App() {
  


  return (
    <RouterProvider router={router}/>
  )
}

export default App
