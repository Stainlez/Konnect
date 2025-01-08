import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';


const CreateNewPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password reset logic here
  };

  return (
    <div className="flex font-montserrat items-center justify-center min-h-screen bg-textColor">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4">Create new password</h1>
        <p className="text-gray-600 mb-6">
          Your new password must be different from previously used passwords.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            {/* <div className="relative"> */}
            <div className="relative">
          <input
            type={passwordVisible ? 'text' : 'password'}
            id="password"
            className="w-full px-3 py-2 border rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setPasswordVisible(!passwordVisible)}
          >
            {passwordVisible ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-1">Must be at least 8 characters</p>
      </div>

      <div className="mb-6">
        <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
          Confirm Password
        </label>
        <div className="relative">
          <input
            type={confirmPasswordVisible ? 'text' : 'password'}
            id="confirmPassword"
            className="w-full px-3 py-2 border rounded-md"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className="absolute right-3 top-1/2 transform -translate-y-1/2"
            onClick={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
          >
            {confirmPasswordVisible ? <FiEyeOff className="h-5 w-5" /> : <FiEye className="h-5 w-5" />}
          </button>
        </div>
              
            <p className="text-sm text-gray-500 mt-1">Both passwords must match</p>
          </div>
          <button
            type="submit"
            className="w-full bg-highlight text-black p-4 rounded-md hover:bg-yellow-500 transition duration-300"
          >
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNewPassword;