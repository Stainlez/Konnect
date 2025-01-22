// import React from 'react'
import MailSendEmail from "../../assets/mailIcon.png";

const CheckMail = () => {
  return (
    <div className="flex font-montserrat items-center justify-center min-h-screen bg-textColor">
      <div className="w-full max-w-md  p-8 space-y-6 bg-white rounded-lg shadow-md text-center">
        <div className="bg-gray-500 w-24 h-24 mx-auto rounded-lg flex items-center justify-center">
          <img
            src={MailSendEmail}
            alt="Mail Send Email"
            className="w-16 h-16"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Check your mail</h1>
        <p className="text-sm text-gray-600">
          We have sent a password recover instructions to your email.
        </p>
        <button className="w-2/3 px-4 py-2 text-sm font-medium text-black bg-highlight rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2">
          Open email app
        </button>
        <button className="text-sm text-gray-600 hover:underline">
          Skip, I&apos;ll confirm later
        </button>
        <p className="text-xs text-gray-500 mt-4">
          Did not receive an email? Check your spam filter or try another email
          address
        </p>
      </div>
    </div>
  );
};

export default CheckMail;
