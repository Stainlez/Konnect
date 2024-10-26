import { useState } from 'react';

function ResetPassword() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Implement the logic to send reset password instructions
    console.log('Sending reset instructions to:', email);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-paleLavender">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md min-h-[400px]">
        <h1 className="text-2xl font-bold text-center text-gray-900">Reset Password</h1>
        <p className="text-sm text-center text-gray-600">
          Enter the email associated with your account and we&apos;ll
          send an email with instructions to reset your password.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mt-10 text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 mt-2 mb-3 text-sm border-2 border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
          </div>
          <button
            type="submit"
            className="w-full px-3 py-2 mt-2 text-sm font-medium text-black bg-yellow rounded-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2"
          >
            Send instructions
          </button>
        </form>
      </div>
    </div>
  );
}

export default ResetPassword;