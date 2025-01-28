import { useState } from "react";
import {Link} from "react-router-dom"
import back from "../../assets/back.png"

export default function PaymentDetails() {
  const [email, setEmail] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  const handlePayNow = () => {
    console.log({ email, cardNumber, expiry, cvv, saveCard });
    alert("Payment submitted!");
  };

  return (
    <div className="min-h-screen bg-textColor flex items-center justify-center p-4">
      <div className="bg-white shadow-lg rounded-lg p-6 grid grid-cols-2 gap-8 w-full max-w-4xl">
        {/* Payment Form */}
        <div className="p-4">
                   <div className="px-2">
                     <Link to="/dashboard/chat" relative="path" className="flex">
                       <img src={back} alt="Back" className="w-7 h-5 mt-1" />
                       <h1 className="text-lg pl-2 font-bold mb-4">Back</h1>
                     </Link>
                   </div>
              
          <h2 className="text-xl font-semibold mb-6">PAYMENT DETAILS</h2>
          <form className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                EMAIL ADDRESS
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            {/* Card Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CARD NUMBER
              </label>
              <div className="flex items-center">
                <input
                  type="text"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  placeholder="XXXX XXXX XXXX XXXX"
                  className="flex-1 border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Visa.svg"
                  alt="Visa"
                  className="w-10 h-6 ml-2"
                />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg"
                  alt="Mastercard"
                  className="w-10 h-6 ml-2"
                />
              </div>
            </div>
            {/* Expiry & CVV */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  EXPIRY
                </label>
                <input
                  type="text"
                  value={expiry}
                  onChange={(e) => setExpiry(e.target.value)}
                  placeholder="MM/YY"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  CVV
                </label>
                <input
                  type="password"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  placeholder="***"
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
            {/* Save Card */}
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={saveCard}
                onChange={(e) => setSaveCard(e.target.checked)}
                className="h-4 w-4 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              />
              <label className="ml-2 text-sm text-gray-600">
                Save this card
              </label>
            </div>
            {/* Pay Now Button */}
            <button
              type="button"
              onClick={handlePayNow}
              className="w-full bg-highlight text-white font-medium py-2 rounded-md hover:bg-green-600 focus:outline-none"
            >
              PAY NOW
            </button>
          </form>
        </div>

        {/* Transaction History */}
        <div className="bg-gray-100 rounded-lg p-4 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold text-gray-600 mb-4">
            Transaction History
          </h2>
          <div className="flex flex-col items-center">
            <div className="text-6xl text-gray-300 mb-4">🚫</div>
            <p className="text-gray-500">No transactions yet</p>
          </div>
        </div>
      </div>
    </div>
  );
}
