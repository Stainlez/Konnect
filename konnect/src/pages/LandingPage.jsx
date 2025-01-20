import React, { useState, useEffect } from 'react';
import logo2 from "../assets/logo2.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import TestimonialsSection from "../components/Testimonial"
import SlideshowLandingPage from "../components/SlideshowLandingPage"
import Bubu from "../assets/Bubu.jpg"
import jasmine from "../assets/Jasmine.jpg"
import mabel from "../assets/Mabel.jpg"
import laptop from "../assets/laptop.png"
import chat from "../assets/chat.png"
import rocket from "../assets/rocket.png"
import Ben from "../assets/Ben.png"
import Ochomma from "../assets/Ochomma.png"
import Kitana from "../assets/Kitana.png"


const LandingPage = () => {

  return (
    <div className='bg-textColor max-w-full'>
      {/* Hero Section */}
        <div className="container flex flex-col justify-center items-center p-5 min-h-screen max-w-full bg-[url('/AnimateSVG.svg')] bg-cover animate-[backgroundMove_2s_infinite]">
            <div className='flex-col mt-24 space-y-5 max-w-2xl mx-auto'>
              {/* <p className='bg-yellow mx-auto p-2 text-center rounded-full w-20'>About</p> */}
              <p className='text-textColor text-center text-5xl md:text-7xl lg:text-7xl font-extrabold'>Discover, Share and Thrive with Konnect</p>
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
        

           
          {/* Explore Services */}
        <div className='container mx-auto mt-12'>
              <div className='space-y-5'>
              <h1 className='pt-5 text-center text-2xl md:text-3xl lg:text-4xl font-extrabold'>
              Explore our services
              </h1>
              <p className='text-center'>We offer a platform where clients can access a wide range of services provided by student entrepreneurs <br /> looking to expand their business and gain practical experience.</p>
              </div>

                <SlideshowLandingPage/>

              {/* <img src={Landing1} alt="" /> */}

                {/* <div className="card rounded-[9px] p-5 bg-slate-50 flex flex-col w-full md:w-52 text-xs md:text-sm">
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
                </div> */}
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

    

         {/* Testimonials Section */}
     <div className="bg-#E6E6E6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-black font-bold text-center pt-5 mt-12 mb-8">Testimonials</h2>
        <TestimonialsSection/>
       </div>

         {/* Footer */}
      <footer className="bg-white text-black py-16">   
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between">
  {/* Logo Section */}
  <div className="hidden md:flex p-4 rounded-xl shadow-xl">
    <img 
      src={logo2} 
      alt="logo" 
      className=" max-h-20 object-contain" 
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

}

export default LandingPage
