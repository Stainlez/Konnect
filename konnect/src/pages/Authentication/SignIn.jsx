import { useState } from "react";
import {
  Link,
  useLoaderData,
  Form,
  useActionData,
  useNavigation,
  // useNavigate,
} from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import signimg from "../../assets/Signimg.png";
import back from "../../assets/back.png"

function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const message = useLoaderData();
  const actionData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <div className="h-screen font-montserrat flex relative justify-between bg-textColor">
      <Link
        to="/welcome"
        className="back-button ml-2 flex font-bold mt-11 md:mt-20 md:ml-20"
      >
         <img src={back} alt="Back" className="w-7 h-5 mt-1" /> <span className="text-sm pl-1 pt-1"> Back</span>
      </Link>

      {/* Form Section */}
      <div className="max-w-7xl w-full md:w-7/12 p-5 md:p-16 m-auto">
        <Form
          method="post"
          replace
          action="/login" // Ensure this matches your route definition
          className="md:w-12/12 flex-col p-3 mt-20 m-auto"
        >
          {/* Message from loader */}
          {message && (
            <h1 className="font-extrabold text-center text-red-500">
              {message}
            </h1>
          )}

          {/* Error message from action function */}
          {actionData?.error && (
            <p className="text-center text-red-500 font-bold">
              {actionData.error}
            </p>
          )}

          {/* Email Input */}
          <div className="space-y-16">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-3 h-12 bg-white py-2 mt-8 rounded"
              required
            />
          </div>

          {/* Password Input */}
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              className="w-full px-3 h-12 py-2 mt-8 pr-10 rounded"
              required
            />
            <button
              type="button"
              className="absolute right-3 mt-4 top-1/2 transform -translate-y-1/2"
              onClick={() => setPasswordVisible(!passwordVisible)}
            >
              {passwordVisible ? (
                <FiEyeOff className="h-5 w-5" />
              ) : (
                <FiEye className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* Forgot Password Link */}
          <p className="mt-4 text-left">
            <Link
              to="/resetpassword"
              className="text-red-400 hover:text-green-400"
            >
              Forgot Password?
            </Link>
          </p>

          {/* Submit Button */}
          {isSubmitting ? (
            <button
              type="button"
              disabled
              className="w-3/4 mt-16 ml-12 font-semibold bg-gray-400 text-black p-4 rounded"
            >
              Signing in...
            </button>
          ) : (
            <button
              type="submit"
              className="w-3/4 mt-16 ml-12 font-semibold bg-highlight text-black p-4 rounded hover:bg-green-400"
            >
              SIGN IN
            </button>
          )}
        </Form>

        {/* Sign Up Link */}
        <div className="flex space-x-2 text-textColor justify-center align-center mt-4">
          <p className="text-black">DON&apos;T HAVE AN ACCOUNT?</p>
          <Link
            to="/signup"
            className="font-semibold text-highlight hover:text-green-400"
          >
            SIGN UP
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="h-screen hidden md:w-5/12 md:flex">
        <img src={signimg} alt="" className="object-cover ml-auto" />
      </div>
    </div>
  );
}

export default SignIn;
