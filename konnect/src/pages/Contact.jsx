// import React from "react";
// import { Link } from "react-router-dom";
import chatIcon from "../assets/chatIcon.png";
import emailIcon from "../assets/emailIcon.png";
import whatsappIcon from "../assets/whatsappIcon.png";
import phonedial from "../assets/phonedial.png";
import location from "../assets/locationIcon.png";
import contact from "../assets/contact.png";

const Contact = () => {
  return (
    <div className=" bg-textColor max-w-full h-screen">
      <h1 className="p-2 text-center text-xl md:hidden font-bold">
        Contact Us
      </h1>

      <section className="flex relative container max-w-full">
        {/* flex container */}

        <div className="container flex flex-col w-screen  md:w-3/5 items-center justify-around">
          <div className=" p-11">
            <div className="container text-nowrap flex flex-col space-y-5 ">
              <div>
                <h2 className="font-bold md:text-2xl">Chat with us</h2>
                <p className="text-xs md:text-lg">
                  Speak with our friendly team via live chat
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex space-x-1">
                  <i className="size-4">
                    <img src={chatIcon} alt="" />
                  </i>
                  <p className=" text-xs md:text-sm">Start a live chat</p>
                </div>

                <div className="flex space-x-1">
                  <i className="size-4">
                    <img src={emailIcon} alt="" />
                  </i>
                  <p className=" text-xs md:text-sm">Send an email</p>
                </div>

                <div className="flex space-x-1">
                  <i className="size-4">
                    <img src={whatsappIcon} alt="" />
                  </i>
                  <p className="text-xs md:text-sm">Message us on Whatsapp</p>
                </div>
              </div>
            </div>

            <div className="container space-y-7 pt-8 text-nowrap">
              <div>
                <h2 className="font-bold md:text-2xl">Call us</h2>
                <p className="text-xs md:text-lg">
                  Call our team Mon-Fri from 8am-5pm
                </p>
              </div>
              <div className="flex space-x-1">
                <i className="size-4">
                  <img src={phonedial} alt="" />
                </i>
                <p className="text-xs md:text-sm">+(234) 8187793595</p>
              </div>
            </div>

            <div className="container space-y-7 pt-8">
              <div>
                <h2 className="font-bold md:text-2xl">Visit us</h2>
                <p className="text-xs md:text-lg">
                  Talk to us in person at our HQ
                </p>
              </div>
              <div className="flex space-x-1">
                <i className="size-4">
                  <img src={location} alt="" />
                </i>
                <p className="text-xs md:text-sm">
                  University of Nigeria, Nsukka, Enugu
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bg-contact min-h-screen hidden w-3/5 bg-no-repeat bg-cover bg-center md:flex"></div> */}
        <div className="max-h-screen hidden md:flex">
          <img src={contact} alt="" className="object-cover" />
        </div>
      </section>
    </div>
  );
};

export default Contact;
