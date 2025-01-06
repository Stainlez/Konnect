// import React from 'react'
import {Link} from "react-router-dom"
import logo2 from "../assets/logo2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import TestimonialsSection from "../components/Testimonial"
import Bubu from "../assets/Bubu.jpg"
import jasmine from "../assets/Jasmine.jpg"
import mabel from "../assets/Mabel.jpg"
import laptop from "../assets/laptop.png"
import chat from "../assets/chat.png"
import rocket from "../assets/rocket.png"
import Ben from "../assets/Ben.png"
import Ochomma from "../assets/Ochomma.png"
import Kitana from "../assets/Kitana.png"
import star from "../assets/Stargrp.png"
import four from "../assets/four.png"
import rating from "../assets/Ratings.png"
import out5 from "../assets/out5.png"

const LandingPage = () => {
  return (
    <div className='bg-paleLavender max-w-full'>
      {/* Hero Section */}
        <div className='container flex flex-col justify-center items-center bg-about-hero p-5 min-h-screen max-w-full bg-no-repeat bg-cover bg-center'>
            <div className='flex-col mt-24 space-y-5 max-w-2xl mx-auto'>
              {/* <p className='bg-yellow mx-auto p-2 text-center rounded-full w-20'>About</p> */}
              <p className='text-textColor text-center text-82 md:text-3xl lg:text-7xl font-bold'>Discover, Share and Thrive with Konnect</p>
              <p className='text-textColor pt-5 text-center text-sm md:text-base lg:text-lg'>Join a vibrant community rooted in entrepreneurship, access essential tools and connect with like-minded individuals to grow your network.</p>
              {/* <Link to="/welcome" className="bg-highlight m-auto text-white px-6 py-3 rounded hover:bg-green-600">Get Started</Link> */}
              {/* <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 mb-8">
                <Link
                  to="welcome"
                  className="p-4 px-3 text-center bg-yellow rounded-lg hover:bg-purple-900"
                >
                  GET STARTED
                </Link>
              </div> */}
            </div>
        </div>
            

            {/* Get to Know Us */}
        {/* <div className='container mt-24 mx-auto px-4 max-w-4xl'>
            <h1 className='pt-5 text-center text-2xl md:text-3xl lg:text-4xl font-bold'>
              Get to know us.
            </h1>
            <div className="flex flex-col md:flex-row mt-10 gap-8 justify-center items-center">
              <div className="card flex flex-col w-full md:w-52 text-xs md:text-sm items-center text-center">
              <div className='flex md:hidden justify-center items-center w-2/4'>
                <img className='w-3/4 object-cover md:w-full rounded-[9px] mb-[9px] h-56' src={jasmine} alt="Jasmine" />
                </div>
                <div className='hidden md:flex justify-center items-center'>
                  <img className='object-cover w-full  rounded-[9px] mb-[9px] h-56 md:w-52' src={jasmine} alt="Jasmine" />
                  </div>
                  
                <h2 className="font-bold mt-2 overflow-hidden text-ellipsis">Okechukwu-Elemba Onyinye</h2>
                <p className='mt-2 font-bold'>Product Designer</p>
                <p className='mt-2'>Certified designer from Genesys 
                and Digital Dreams ICT Academy.</p>
              </div>

              <div className="card flex flex-col w-full md:w-52 text-xs md:text-sm items-center text-center">
              <div className='flex md:hidden justify-center items-center w-2/4 h-2/4'>
                <img className='w-3/4 md:w-full rounded-[9px] mb-[9px] h-56' src={Bubu} alt="Jasmine" />
                </div>
                <div className='hidden md:flex justify-center items-center '>
                  <img className='w-3/4 rounded-[9px] mb-[9px] h-56 md:w-52' src={Bubu} alt="Jasmine" />
                  </div>
                <h2 className="font-bold mt-2 overflow-hidden text-ellipsis">Ezeakalue Jude</h2>
                <p className='mt-2 font-bold'>Frontend Developer</p>
                <p className='mt-2'>Certified developer from platforms like Sololearn, Scrimba, freeCodeCamp.</p>
              </div>

              <div className="card flex flex-col w-full md:w-52 text-xs md:text-sm items-center text-center">
              <div className='flex md:hidden justify-center items-center w-2/4'>
                <img className='w-3/4 object-cover md:w-full rounded-[9px] mb-[9px] h-56' src={mabel} alt="Jasmine" />
                </div>
                <div className='hidden md:flex justify-center items-center '>
                  <img className='w-3/4 object-cover rounded-[9px] mb-[9px] h-56 md:w-52' src={mabel} alt="Jasmine" />
                  </div>
                <h2 className="font-bold mt-2 overflow-hidden text-ellipsis">Ukoha Chidinma M.</h2>
                <p className='mt-2 font-bold'>Backend Developer</p>
                <p className='mt-2'>Certified designer from Genesys 
                and Digital Dreams ICT Academy.</p>
              </div>
            </div>
        </div> */}
          {/* Explore Services */}
        <div className='container mx-auto mt-12 px-4'>
              <h1 className='pt-5 text-center text-2xl md:text-3xl lg:text-4xl font-bold'>
              Explore our services
              </h1>
            <div className="flex flex-col md:flex-row mt-10 gap-8 justify-center">
                <div className="card rounded-[9px] p-5 bg-slate-50 flex flex-col w-full md:w-52 text-xs md:text-sm">
                    <h3 className='text-xl text-center my-5 font-bold'>For whom?</h3>
                    <img className='w-[170px] rounded-[9px] mb-[9px] mt-1 mx-auto' src={laptop} alt="Jasmine" />
                    
                    <p className='mt-1'>It&apos;s an app that connects people in university communities with various entrepreneurial services.</p>
                </div>

                <div className="card rounded-[9px] p-5 bg-slate-50 flex flex-col w-full md:w-52 text-xs md:text-sm">
                    <h3 className='text-xl text-center my-5 font-bold'>What it gives?</h3>
                    <img className='max-w-[170px] rounded-[9px] mb-[9px] -mt-5 mx-auto' src={chat} alt="chat" />
                    
                    <p className='-mt-7'>It provides a platform for interaction and connection among clients and various services needed within their vicinity.</p>
                </div>

                <div className="card rounded-[9px] p-5 bg-slate-50 flex flex-col w-full md:w-52 text-xs md:text-sm">
                    <h3 className='text-xl text-center my-5 font-bold'>Experience?</h3>
                    <img className='max-w-[170px] rounded-[9px] mb-[9px] -mt-4 mx-auto' src={rocket} alt="rocket" />
                    
                    <p className='-mt-5'>Gain a competitive edge, connect with like-minded individuals, easy provision of services and navigate starting and running a business in today&apos;s fast-paced environment.</p>
                </div>
            </div>
        </div>


          {/* Reviews */}
        {/* <div className='container mx-auto mt-24 px-4'>
            <h1 className='pt-5 text-center text-2xl md:text-3xl lg:text-4xl font-bold'>
              Reviews
            </h1>

            <div className="flex flex-col md:flex-row mt-16 gap-8 justify-center">
              
                <div className="relative rounded-b-[9px] bg-purpleBg overflow-visible p-3 w-full md:w-56"> */}
                    {/* <!-- Circular Image Container --> */}
                    {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 p-3 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden z-20">
                      <img src={Ben} className="w-full h-full object-cover rounded-full " alt="Circular image"/>
                    </div>
                     */}
                    {/* <!-- Card Component --> */}
                    {/* <div className="card rounded-b-[9px] p-3 space-y-3 bg-purpleBg text-white flex flex-col text-xs md:text-sm text-center mt-16">
                      <h2 className="mt-2 overflow-hidden text-lg">Ben Clarkson</h2>
                      <p>The app really facilitated client reach.
                      Easy to use and very efficient.</p>
                      <div>
                        <img className='h-4 mx-auto' src={star} alt="star" />
                      </div>
                    </div>   
                </div>
                
                <div className="relative rounded-b-[9px] bg-purpleBg overflow-visible p-3 w-full md:w-56"> */}
                    {/* <!-- Circular Image Container --> */}
                    {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 p-3 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden z-20">
                      <img src={Ochomma} className="w-full h-full object-cover rounded-full " alt="Circular image"/>
                    </div>
                     */}
                    {/* <!-- Card Component --> */}
                    {/* <div className="card rounded-b-[9px] p-3 space-y-3 bg-purpleBg text-white flex flex-col text-xs md:text-sm text-center mt-16">
                      <h2 className="mt-2 overflow-hidden text-lg">Ochomma Eze</h2>
                      <p>I love how I can combine my academics with 
                      my business, thanks to Konnect.</p>
                      <img className='h-4 mx-auto' src={star} alt="star" />
                    </div>
                </div>

                <div className="relative rounded-b-[9px] bg-purpleBg overflow-visible p-3 w-full md:w-56"> */}
                    {/* <!-- Circular Image Container --> */}
                    {/* <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 p-3 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden z-20">
                      <img src={Kitana} className="w-full h-full object-cover rounded-full " alt="Circular image"/>
                    </div> */}
                    
                    {/* <!-- Card Component --> */}
                    {/* <div className="card rounded-b-[9px] p-3 space-y-3 bg-purpleBg text-white flex flex-col text-xs md:text-sm text-center mt-16">
                      <h2 className="mt-2 overflow-hidden text-lg">Kitana Lee</h2>
                      <p>Opportunities and collaborations with different 
entrepreneurs have been in surplus. 
Business has been booming as well.</p>
                      <div>
                        <img className='h-4 mx-auto' src={star} alt="star" />
                      </div>
                    </div>     
                </div>

              </div>
        </div> */}

        {/* Ratings */}
        {/* <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 p-16'>
          <div className='space-y-3'>
              <img src={four} alt="" className='mx-auto'/>
              <img src={out5} alt="" className='mx-auto'/>
          </div>
          <div>
              <img src={rating} alt="" />
          </div>
        </div> */}

         {/* Testimonials Section */}
     <div className="bg-#E6E6E6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center pt-5 mt-12 mb-8">Testimonials</h2>
        <TestimonialsSection/>
         {/* <section className="py-12 bg-purple-700 text-white">
  <div className="max-w-6xl container m-auto px-5 flex flex-col md:flex-row justify-evenly items-center">
    {/* Left Content */}
    {/* <div className="text-left px-9 md:px-3 md:max-w-md">
      <h3 className="text-sm uppercase mb-2">Do not take it from us</h3>
      <h2 className="text-4xl font-bold mb-6">Listen from our Happy Clients</h2>
      <div className="flex space-x-6">
        <button className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600">←</button>
        <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800">→</button>
      </div>
    </div> */}

    {/* Right Content */}
    {/* <div className="text-white p-8 rounded-lg shadow-lg md:ml-24">
      <div className="mb-4">
        <svg className="w-8 h-8 text-purple-700 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 17H7v-1h4.5V9.5h-3V8h3.5v9zm7 0h-4.5v-1H16V9.5h-3V8h3.5v9z"/>
        </svg>
        <p className="text-lg">Konnect helped me a lot in finding the nearest catering business for my birthday party. The response was quick and service was top notch.</p>
      </div>
      <div className="flex items-center mt-4">
        <img src="https://via.placeholder.com/48" alt="User" className="w-12 h-12 rounded-full" />
        <div className="ml-4">
          <h3 className="text-lg font-bold">Ikenna Sandra</h3>
          <p className="text-sm">Student</p>
        </div>
      </div>
    </div>
  </div> */}
{/* </section> */}
       </div>

         {/* Footer */}
      <footer className="bg-white text-black py-16">
          {/* <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between"> */}
            {/* <div className="text-xl font-bold">Logo</div> */}
            {/* <ul className="flex space-x-6 justify-center md:justify-start">
              <li><a href="#" className="hover:text-gray-500">Link One</a></li>
              <li><a href="#" className="hover:text-gray-500">Link Two</a></li>
              <li><a href="#" className="hover:text-gray-500">Link Three</a></li>
              <li><a href="#" className="hover:text-gray-500">Link Four</a></li>
              <li><a href="#" className="hover:text-gray-500">Link Five</a></li>
            </ul> */}
  

          
         <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
  {/* Logo Section */}
  <div className="p-4 rounded-xl shadow-xl">
    <img 
      src={logo2} 
      alt="logo" 
      className="hidden md:flex max-h-20 object-contain" 
    />
  </div>

  {/* Social Icons Section */}
  <div className="flex space-x-12 justify-center mx-auto md:justify-end">
    <a href="#" className="hover:text-gray-500">
      <FontAwesomeIcon icon={faFacebook} className="h-8" />
    </a>
    <a href="#" className="hover:text-gray-500">
      <FontAwesomeIcon icon={faInstagram} className="h-8" />
    </a>
    <a href="#" className="hover:text-gray-500">
      <FontAwesomeIcon icon={faTwitter} className="h-8" />
    </a>
    <a href="#" className="hover:text-gray-500">
      <FontAwesomeIcon icon={faLinkedin} className="h-8" />
    </a>
  </div>
</div>


          <hr className="my-8 border-gray-300" />
          <div className="text-center text-sm text-gray-500">
            2024 Relume. All rights reserved. <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a> | <a href="#" className="hover:underline">Cookie Settings</a>
          </div>
        </footer>
    </div>
  )

// return (
//   <div className="font-sans">

//     {/* Hero Section */}
//     <section className="text-center bg-about-hero text-white h-screen flex flex-col justify-center items-center">
//         <h1 className="text-4xl font-bold mb-4">Discover, Share and Thrive with Konnect</h1>
//         <p className="max-w-xl mx-auto mb-6">Join a vibrant community rooted in entrepreneurship, access essential tools and connect with like-minded individuals to grow your network.</p>
//         <button className="bg-highlight text-white px-6 py-3 rounded hover:bg-green-600">Get Started</button>
//       </section>

//     {/* Services Section */}
//     <section className="min-h-screen py-32 text-center bg-gray-100">
//         <h2 className="text-3xl font-bold mb-4">Explore our services</h2>
//         <p className="max-w-2xl mx-auto mb-6">We offer a platform where ideas can evolve into large-scale enterprises, making it possible for talented entrepreneurs to build their business and gain practical experience.</p>
//       </section>

//     {/* Testimonials Section */}
//     <div className="bg-gray-100">
//         <h2 className="text-3xl text-black font-bold text-center mb-8">Testimonials</h2>
//     <section className="py-16 bg-purple-700 text-white">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center">
//           <div className="text-left px-8">
//             <h3 className="text-sm uppercase mb-2">Do not take it from us</h3>
//             <h2 className="text-4xl font-bold mb-6">Listen from our Happy Clients</h2>
//             <div className="flex space-x-4">
//               <button className="bg-purple-500 text-white p-3 rounded-full hover:bg-purple-600">←</button>
//               <button className="bg-black text-white p-3 rounded-full hover:bg-gray-800">→</button>
//             </div>
//           </div>
//           <div className="text-white p-8 rounded-lg shadow-lg">
//             <div className="mb-4">
//               <svg className="w-8 h-8 text-purple-700 mb-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
//                 <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.5 17H7v-1h4.5V9.5h-3V8h3.5v9zm7 0h-4.5v-1H16V9.5h-3V8h3.5v9z"/>
//               </svg>
//               <p className="text-lg">Konnect helped me a lot in finding the nearest catering business for my birthday party. The response was quick and service was top notch.</p>
//             </div>
//             <div className="flex items-center mt-4">
//               <img src="https://via.placeholder.com/48" alt="User" className="w-12 h-12 rounded-full" />
//               <div className="ml-4">
//                 <h3 className="text-lg font-bold">Ikenna Sandra</h3>
//                 <p className="text-sm">Student</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       </div>
    
//     {/* Footer */}
//     <footer className="bg-white text-black py-16">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center">
//           <div className="text-xl font-bold">Logo</div>
//           <ul className="flex space-x-6 justify-center md:justify-start">
//             <li><a href="#" className="hover:text-gray-500">Link One</a></li>
//             <li><a href="#" className="hover:text-gray-500">Link Two</a></li>
//             <li><a href="#" className="hover:text-gray-500">Link Three</a></li>
//             <li><a href="#" className="hover:text-gray-500">Link Four</a></li>
//             <li><a href="#" className="hover:text-gray-500">Link Five</a></li>
//           </ul>
//           <div className="flex space-x-4 justify-center md:justify-end">
//             <a href="#" className="hover:text-gray-500"><i className="fab fa-facebook"></i></a>
//             <a href="#" className="hover:text-gray-500"><i className="fab fa-instagram"></i></a>
//             <a href="#" className="hover:text-gray-500"><i className="fab fa-twitter"></i></a>
//             <a href="#" className="hover:text-gray-500"><i className="fab fa-linkedin"></i></a>
//           </div>
//         </div>
//         <hr className="my-8 border-gray-300" />
//         <div className="text-center text-sm text-gray-500">
//           2021 Relume. All rights reserved. <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a> | <a href="#" className="hover:underline">Cookie Settings</a>
//         </div>
//       </footer>
//   </div>
// );

}

export default LandingPage
