import { useState } from "react";
import { Link, Form, useActionData, useNavigation } from "react-router-dom";
import { FiEye, FiEyeOff } from 'react-icons/fi';
import signimg from "../../assets/Signimg.png";


const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  // Toggle password visibility
  const togglePasswordVisibility = () => setPasswordVisible(!passwordVisible);
  const toggleConfirmPasswordVisibility = () => setConfirmPasswordVisible(!confirmPasswordVisible);

  return (
        <div className="bg-purpleBg font-montserrat min-h-screen max-w-full">
          <section className="flex relative container max-w-full">
            <Link
            to="/welcome"
            className="back-button mt-11 flex font-bold text-white md:mt-20 md:ml-20" 
          >
            &larr; <span className='text-sm pl-1 pt-1'> Back</span>
          </Link>
{/* flex container */}
<div className="container m-auto flex flex-col w-screen md:w-7/12 items-center">
      <Form
        method="post"
        replace
        className="max-w-md mt-40 md:mt-40 flex-col space-y-7 p-4 md:space-y-9"
      >
        {/* Display error message */}
        {actionData?.error && (
          <div className="text-red-500 text-center">{actionData.error}</div>
        )}

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
            type={passwordVisible ? 'text' : 'password'}
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
            type={confirmPasswordVisible ? 'text' : 'password'}
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
        
        {isSubmitting ? (
        <button
          type="button"
          disabled
          className="w-3/4 mt-16 ml-12 font-semibold bg-gray-400 text-black p-4 rounded"
        >
          Submitting...
        </button>
      ) : (
        <button
          type="submit"
          className="w-3/4 mt-16 ml-12 bg-highlight font-semibold text-black p-4 rounded hover:bg-green-400"
        >
          SIGN UP
        </button>
      )}
      </Form>

      <div className="container mt-7 flex space-x-2 justify-center">
        <p className="bg-purpleBg text-center text-textColor text-nowrap">
          ALREADY HAVE AN ACCOUNT?
        </p>
        <span>
          <Link to="/login" className="hover:text-green-400 font-semibold text-highlight">
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

 {/* const SignUp = () => { 
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };
//   const toggleConfirmPasswordVisibility = () => {
//     setConfirmPasswordVisible(!confirmPasswordVisible);
//   };

//   return (
//     <div className="bg-purpleBg font-montserrat min-h-screen max-w-full">
//       <section className="flex relative container max-w-full">
//         <Link
//         to="/welcome"
//         className="back-button mt-11 flex font-bold text-white md:mt-20 md:ml-20" 
//       >
//         &larr; <span className='text-sm pl-1 pt-1'> Back</span>
//       </Link>
        
        {/* flex container */}
        {/* <div className="container m-auto flex flex-col w-screen md:w-7/12 items-center">
          <Form method="post"
            className="max-w-md mt-40 md:mt-40 flex-col space-y-7 p-4 md:space-y-9">
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
            /> */}

            {/* Password input with toggle */}
            {/* <div className="relative w-full mt-8">
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
            </div> */}

            {/* Confirm password input with toggle */}
            {/* <div className="relative w-full mt-8">
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
              className="w-3/4 mt-16 ml-12 bg-highlight font-semibold text-black p-4 rounded hover:bg-green-400"
            >
              SIGN UP
            </button>
          </Form>
            

          <div className="container mt-7 flex space-x-2 justify-center">
            <p className="bg-purpleBg text-center text-textColor text-nowrap">
              ALREADY HAVE AN ACCOUNT?
            </p>
            <span>
              <Link to="/login" className="hover:text-green-400 font-semibold text-highlight">
                SIGN-IN
              </Link>
            </span>
          </div>
        </div> */}






