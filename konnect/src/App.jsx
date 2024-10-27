// import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Welcome from "./pages/Welcome"
import SignIn from "./pages/Authentication/SignIn"
import SignUp from "./pages/Authentication/SignUp"
import ResetPassword from "./pages/Authentication/ResetPassword"
import CheckMail from "./pages/Authentication/CheckMail"
import CreateNewPassword from "./pages/Authentication/CreateNewPassword"
import Layout from "./components/Layout"
// import HostLayout from "./components/HostLayout"
import './App.css'

function App() {
  


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="welcome" element={<Welcome />} />
        
        {/* <Route path="/host" element={<HostLayout />}>
          
        </Route> */}
      </Route>
      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="resetpassword" element={<ResetPassword />} />
      <Route path="checkmail" element={<CheckMail />} />
      <Route path="newpassword" element={<CreateNewPassword />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
