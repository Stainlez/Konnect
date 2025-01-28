import { useState } from "react";
import {Link} from "react-router-dom"
import { FiSend } from "react-icons/fi";
import back from "../../assets/back.png"

export default function ChatPage() {
  const [messages, setMessages] = useState([
    { sender: "Design Craft", text: "Hello and Thank you for contacting Design Craft. How may I help you?", time: "1:32pm", type: "received" },
    { sender: "You", text: "I need a website design for a flight booking company.", time: "3:06pm", type: "sent" },
    { sender: "Design Craft", text: "Alright sir. May I know when you want this design to be ready?", time: "3:20pm", type: "received" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([
        ...messages,
        { sender: "You", text: newMessage, time: "Just now", type: "sent" },
      ]);
      setNewMessage("");
    }
  };

  

  return (
    <div className="flex flex-col p-6 h-screen bg-textColor">
      <div className="px-2">
                     <Link to="/dashboard" relative="path" className="flex">
                       <img src={back} alt="Back" className="w-7 h-5 mt-1" />
                       {/* <h1 className="text-lg pl-2 font-bold mb-4">Back</h1> */}
                     </Link>
                   </div>
      {/* Header */}
      <div className="flex items-center justify-between border-b-2 border-b-gray-400 px-4 pb-8 pt-6">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gray-300 mr-3">
          <img
                  src="https://www.w3schools.com/w3images/avatar2.png"
                  alt="Avatar"
                  className="w-10 h-10 rounded-full  object-cover"
                />
          </div>
          <div>
            <h1 className="font-semibold">Design Craft</h1>
            <p className="text-highlight text-sm">Typing</p>
          </div>
        </div>
        <Link to="/dashboard/pay" className="bg-highlight text-white px-4 py-1 rounded-lg font-medium">PAY</Link>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-4 py-2">
        <p className="text-center text-gray-500 my-4">Today</p>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex my-2 ${msg.type === "sent" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs p-3 rounded-lg text-white shadow-md text-sm ${
                msg.type === "sent" ? "bg-purple-500" : "bg-gray-500 text-black"
              }`}
            >
              <p>{msg.text}</p>
              <p className="text-right text-xs mt-1 text-gray-200">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
<div className="flex items-center bg-white px-4 py-2 shadow-md">
  <textarea
    type="text"
    className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none resize-none"
    placeholder="Type your message..."
    value={newMessage}
    onChange={(e) => {
      setNewMessage(e.target.value);

      // Auto-resize logic
      const textarea = e.target;
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Adjust height based on content
    }}
    rows={1} // Initial row count
  />
  <button
    onClick={handleSendMessage}
    className="ml-3 bg-highlight text-white p-2 rounded-full hover:bg-green-600"
  >
    <FiSend size={20} />
  </button>
</div>

    </div>
  );
}
