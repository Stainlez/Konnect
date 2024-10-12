import React from 'react'
import { Link } from "react-router-dom"

const SignIn = () => {
  return (
    <div className='h-screen flex  justify-between bg-purpleBg'>
    <div className="max-w-7/12 p-4 bg-purpleBg m-auto">
    <form className="max-w-md flex-col mt-20  p-4 bg-purpleBg">
        <div className='space-y-16 m-auto'>
        <input
        type="email"
        name="email"
        placeholder='Email'
        className="w-full px-3 py-2 mt-8 rounded"
        required
      />
    
    
      <input
        type="password"
        name="password"
        placeholder='Password'
        className="w-full px-3 py-2 mt-8 rounded"
        required
      />
        </div>
        <p className="mt-4 text-left">
      <Link to="/resetpassword" className="text-yellow hover:text-purple-400">Forgot Password?</Link>
    </p>
    
    <button
      type="submit"
      className="w-1/2 mt-16 ml-28 align-center font-semibold bg-yellow text-black py-3 rounded hover:bg-purple-400"
    >
      SIGN IN
    </button>
   
  </form>
  
  <div className='flex space-x-2 text-textColor justify-center align-center'>
  <p className='bg-purpleBg'>DON&apos;T HAVE AN ACCOUNT? </p>
  <Link to="/signup" className="font-semibold text-yellow hover:text-purple-400">SIGN UP</Link>
  </div>
    
  </div>

    <div className="relative hidden bg-hero-pattern bg-no-repeat bg-cover bg-center flex-end h-screen w-2/5 md:flex">
    <h2 className='text-textBlack text-nowrap pt-5 text-5xl mx-auto mt-20 font-bold'>LET'S KONNECT</h2>
    </div>
      
      {/* <div  className="max-w-2xl p-4 mx-auto">Left Content</div>
      <div className="bg-hero-pattern bg-no-repeat bg-cover bg-center flex-end h-3/4 w-1/3">Right Content</div>*/}
  </div>
  )
}

export default SignIn
