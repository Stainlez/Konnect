import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import signimg from "../../assets/Signimg.png";

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  return (
    <div className="bg-purpleBg min-h-screen max-w-full">
      <section className="flex relative container max-w-full">
        {/* flex container */}
        <div className="container m-auto flex flex-col w-screen md:w-7/12 items-center">
          <form className="max-w-md mt-40 md:mt-60 flex-col space-y-7 p-4 md:space-y-9">
            <input
              type="text"
              name="firstname"
              placeholder="First Name"
              className="w-full px-3 py-2 rounded"
              required
            />
            <input
              type="text"
              name="lastname"
              placeholder="Last Name"
              className="w-full px-3 py-2 mt-8 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 py-2 mt-8 rounded"
              required
            />

            {/* Password input with toggle */}
            <div className="relative w-full mt-8">
              <input
                type={passwordVisible ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full px-3 py-2 rounded"
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>

            {/* Confirm password input with toggle */}
            <div className="relative w-full mt-8">
              <input
                type={confirmPasswordVisible ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                className="w-full px-3 py-2 rounded"
                required
              />
              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={toggleConfirmPasswordVisibility}
              >
                {confirmPasswordVisible ? <FiEyeOff /> : <FiEye />}
              </div>
            </div>

            <button
              type="submit"
              className="w-1/2 mt-8 ml-24 bg-yellow font-semibold text-black py-2 rounded hover:bg-purple-400"
            >
              SIGN UP
            </button>
          </form>

          <div className="container flex space-x-2 justify-center">
            <p className="bg-purpleBg text-center text-textColor text-nowrap">
              ALREADY HAVE AN ACCOUNT?
            </p>
            <span>
              <Link to="/login" className="hover:text-purple-400 font-semibold text-yellow">
                SIGN-IN
              </Link>
            </span>
          </div>
        </div>

        <div className="h-screen hidden md:w-5/12 md:flex">
          <img src={signimg} alt="" className="object-cover ml-auto"/>
        </div>
      </section>
    </div>
  );
};

export default SignUp;



// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FiEye, FiEyeOff } from 'react-icons/fi';
// import contact from "../../assets/contact.png"

// const SignUp = () => {
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   return(
//     <div className="bg-purpleBg min-h-screen max-w-full">
//     <section className="flex relative container max-w-full">
//       {/* flex container */}
//       <div className="container m-auto flex flex-col w-screen  md:w-7/12 items-center">
//         <form className="max-w-md flex-col space-y-7 p-4 md:space-y-9">
//           <input
//             type="text"
//             name="firstname"
//             placeholder="First Name"
//             className="w-full px-3 py-2 rounded"
//             required
//           />
//           <input
//             type="text"
//             name="lastname"
//             placeholder="Last Name"
//             className="w-full px-3 py-2 mt-8 rounded"
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             className="w-full px-3 py-2 mt-8 rounded"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             className="w-full px-3 py-2 mt-8 rounded"
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Confirm Password"
//             className="w-full px-3 py-2 mt-8 rounded"
//             required
//           />
//           <button
//             type="submit"
//             className="w-1/2 mt-8 ml-24 bg-yellow font-semibold text-black py-2 rounded hover:bg-purple-400"
//           >
//             SIGN UP
//           </button>
//         </form>  

//         <div className="container flex space-x-2 justify-center">
//             <p className="bg-purpleBg text-center text-textColor text-nowrap">
//               ALREADY HAVE AN ACCOUNT?
//             </p>
//             <span>
//               <Link to="/login" className="hover:text-purple-400 font-semibold text-yellow">
//                 SIGN-IN
//               </Link>
//             </span>
//           </div>        
  
//   </div>
  
          
//           {/* <div className="bg-contact min-h-screen hidden w-3/5 bg-no-repeat bg-cover bg-center md:flex"></div> */}
//           <div className="min-h-screen hidden md:w-5/12 md:flex">
//             <img  src={contact} alt="" />
//           </div>
//     </section>
//   </div>

//   ) 
// }

// export default SignUp;


//  {/* <div className="min-h-screen flex max-w-screen justify-between bg-purpleBg md:h-screen">
//        <div className="max-w-7/12 p-4 m-auto md-justify-center ">
//          <form className="max-w-md flex-col space-y-5 mt-28 p-4 md:space-y-8">
//            <input */}
//     //         type="text"
//     //         name="firstname"
//     //         placeholder="First Name"
//     //         className="w-full px-3 py-2 rounded"
//     //         required
//     //       />
//     //       <input
//     //         type="text"
//     //         name="lastname"
//     //         placeholder="Last Name"
//     //         className="w-full px-3 py-2 mt-8 rounded"
//     //         required
//     //       />
//     //       <input
//     //         type="email"
//     //         name="email"
//     //         placeholder="Email"
//     //         className="w-full px-3 py-2 mt-8 rounded"
//     //         required
//     //       />
//     //       <input
//     //         type="password"
//     //         name="password"
//     //         placeholder="Password"
//     //         className="w-full px-3 py-2 mt-8 rounded"
//     //         required
//     //       />
//     //       <input
//     //         type="password"
//     //         name="password"
//     //         placeholder="Confirm Password"
//     //         className="w-full px-3 py-2 mt-8 rounded"
//     //         required
//     //       />
//     //       <button
//     //         type="submit"
//     //         className="w-1/2 mt-8 ml-24 bg-yellow font-semibold text-black py-2 rounded hover:bg-purple-400"
//     //       >
//     //         SIGN UP
//     //       </button>
//     //     </form>
//     //     <div className="container flex space-x-2 justify-center">
//     //       <p className="bg-purpleBg text-center text-textColor text-nowrap">
//     //         ALREADY HAVE AN ACCOUNT?
//     //       </p>
//     //       <span className="bg-purpleBg">
//     //         <Link to="/login" className="hover:text-purple-400 font-semibold text-yellow">
//     //           SIGN-IN
//     //         </Link>
//     //       </span>
//     //     </div>
//     //   </div>

//     //   {/* Remove hidden or use responsive utility classes */}
//     //   <div className="relative hidden bg-hero-pattern bg-no-repeat bg-cover bg-center h-3/4 w-2/6 md:flex">
//     //     <h2 className="text-textBlack pt-5 mt-10 text-5xl text-nowrap mx-auto font-bold">
//     //       LET'S KONNECT
//     //     </h2>
//     //   </div>
//     // </div>