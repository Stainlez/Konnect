import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Welcome from "./pages/Welcome"
import SignIn from "./pages/Authentication/SignIn"
import SignUp from "./pages/Authentication/SignUp"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import './App.css'

function App() {
  


  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="welcome" element={<Welcome />} />
        
        {/* <Route path="/host" element={<HostLayout />}>
          
        </Route> */}
      </Route>
      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
