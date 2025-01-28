import {  useLoaderData } from "react-router-dom";
import { useState } from "react";


export default function EducationalContent() {
  const educationalContent = useLoaderData();
  const [modalContent, setModalContent] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);


  // Function to handle opening the modal
  const openModal = (content) => {
    setModalContent(content);
    setCurrentSectionIndex(0); // Start at the first section
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setModalContent(null);
    setCurrentSectionIndex(0); // Reset section index
  };

  // Handle navigating to the next section
  const nextSection = () => {
    if (
      modalContent &&
      currentSectionIndex < modalContent.sections.length - 1
    ) {
      setCurrentSectionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Handle navigating to the previous section
  const prevSection = () => {
    if (modalContent && currentSectionIndex > 0) {
      setCurrentSectionIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="px-20 font-montserrat py-8 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-extrabold text-center border-b-2 border-gray-800 pb-1 mb-4">
        Educational Content
      </h1>
      <ul className="space-y-8">
        {educationalContent.map((module, index) => (
          <li
            key={index}
            className="hover:bg-gray-400 rounded-md cursor-pointer"
            onClick={() => openModal(module)}
          >
            <div className="block py-2 font-semibold text-gray-600 hover:text-gray-800">
              {module.title}
            </div>
          </li>
        ))}
      </ul>

      {/* Modal */}
      {modalContent && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full p-8 relative">
            <h2 className="text-2xl font-bold mb-4">{modalContent.title}</h2>
            <p className="text-gray-600 mb-4">{modalContent.description}</p>

            {/* Display Current Section */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700">
                {modalContent.sections[currentSectionIndex]?.heading}
              </h3>
              <p className="text-gray-600 whitespace-pre-line">
                {modalContent.sections[currentSectionIndex]?.content}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between">
              <button
                className={`px-4 py-2 text-white rounded-lg ${
                  currentSectionIndex > 0
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
                onClick={prevSection}
                disabled={currentSectionIndex === 0}
              >
                Previous
              </button>
              <button
                className={`px-4 py-2 text-white rounded-lg ${
                  currentSectionIndex < modalContent.sections.length - 1
                    ? "bg-blue-500 hover:bg-blue-600"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
                onClick={nextSection}
                disabled={currentSectionIndex === modalContent.sections.length - 1}
              >
                Next
              </button>
            </div>

            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
              onClick={closeModal}
            >
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}