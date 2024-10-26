// import React from 'react'
// import {Link} from "react-router-dom"
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
        <div className='container flex flex-col bg-about-hero p-5 min-h-screen max-w-full bg-no-repeat bg-cover bg-center'>
            <div className='flex-col mt-24 space-y-5 max-w-2xl mx-auto'>
              {/* <p className='bg-yellow mx-auto p-2 text-center rounded-full w-20'>About</p> */}
              <p className='text-textColor pt-11 text-center text-2xl md:text-3xl lg:text-4xl font-bold'>Let&apos;s Unite. Let&apos;s Connect</p>
              <p className='text-textColor pt-5 text-center text-sm md:text-base lg:text-lg'>We are on a mission to build the best community for student entrepreneurs to share, grow and get hired by potential customers.</p>
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
        <div className='container mt-24 mx-auto px-4 max-w-4xl'>
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
        </div>
          {/* Explore Services */}
        <div className='container mx-auto mt-24 px-4'>
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
        <div className='container mx-auto mt-24 px-4'>
            <h1 className='pt-5 text-center text-2xl md:text-3xl lg:text-4xl font-bold'>
              Reviews
            </h1>

            <div className="flex flex-col md:flex-row mt-16 gap-8 justify-center">
              
                <div className="relative rounded-b-[9px] bg-purpleBg overflow-visible p-3 w-full md:w-56">
                    {/* <!-- Circular Image Container --> */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 p-3 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden z-20">
                      <img src={Ben} className="w-full h-full object-cover rounded-full " alt="Circular image"/>
                    </div>
                    
                    {/* <!-- Card Component --> */}
                    <div className="card rounded-b-[9px] p-3 space-y-3 bg-purpleBg text-white flex flex-col text-xs md:text-sm text-center mt-16">
                      <h2 className="mt-2 overflow-hidden text-lg">Ben Clarkson</h2>
                      <p>The app really facilitated client reach.
                      Easy to use and very efficient.</p>
                      <div>
                        <img className='h-4 mx-auto' src={star} alt="star" />
                      </div>
                    </div>   
                </div>
                
                <div className="relative rounded-b-[9px] bg-purpleBg overflow-visible p-3 w-full md:w-56">
                    {/* <!-- Circular Image Container --> */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 p-3 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden z-20">
                      <img src={Ochomma} className="w-full h-full object-cover rounded-full " alt="Circular image"/>
                    </div>
                    
                    {/* <!-- Card Component --> */}
                    <div className="card rounded-b-[9px] p-3 space-y-3 bg-purpleBg text-white flex flex-col text-xs md:text-sm text-center mt-16">
                      <h2 className="mt-2 overflow-hidden text-lg">Ochomma Eze</h2>
                      <p>I love how I can combine my academics with 
                      my business, thanks to Konnect.</p>
                      <img className='h-4 mx-auto' src={star} alt="star" />
                    </div>
                </div>

                <div className="relative rounded-b-[9px] bg-purpleBg overflow-visible p-3 w-full md:w-56">
                    {/* <!-- Circular Image Container --> */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 p-3 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden z-20">
                      <img src={Kitana} className="w-full h-full object-cover rounded-full " alt="Circular image"/>
                    </div>
                    
                    {/* <!-- Card Component --> */}
                    <div className="card rounded-b-[9px] p-3 space-y-3 bg-purpleBg text-white flex flex-col text-xs md:text-sm text-center mt-16">
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
        </div>

        {/* Ratings */}
        <div className='container mx-auto flex flex-col md:flex-row justify-center items-center gap-8 p-16'>
          <div className='space-y-3'>
              <img src={four} alt="" className='mx-auto'/>
              <img src={out5} alt="" className='mx-auto'/>
          </div>
          <div>
              <img src={rating} alt="" />
          </div>
        </div>

        {/* Footer */}
        <footer className='bg-purpleBg'>
          <div className='container mx-auto flex flex-col md:flex-row justify-between items-center py-8 px-4 text-gray-300'>
              <div className='space-y-2 text-center md:text-left mb-4 md:mb-0'>
                <p>© 2024 Konnect App</p>
                <p>Working from beautiful country, Nigeria</p>
              </div>
              <div className='flex justify-center space-x-4'>
                  <p>ICON 1</p>
                  <p>ICON 2</p>
                  <p>ICON 3</p>    
              </div>
          </div>
        </footer>
    </div>
  )

}

export default LandingPage
