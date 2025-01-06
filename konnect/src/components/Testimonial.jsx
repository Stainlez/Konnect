import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const TestimonialsSection = () => {
  // Predefined testimonials
  const testimonials = [
    {
      text: "Konnect helped me a lot in finding the nearest catering business for my birthday party. The response was quick and service was top notch.",
      name: "Ikenna Sandra",
      title: "Student",
    },
    {
      text: "The platform connected me with a reliable mechanic. I highly recommend it to everyone!",
      name: "Tunde Adewale",
      title: "Entrepreneur",
    },
    {
      text: "I found a great tutor for my kids through Konnect. It saved me a lot of stress!",
      name: "Chioma Okafor",
      title: "Parent",
    },
  ];

  // Predefined background colors
  const bgColors = ["#5B309C", "#00C2AA", "#3A3737"];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Timer to change testimonial and background color every 10 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 2000);

    return () => clearInterval(timer); // Cleanup timer
  }, [currentIndex]);

  // Handle next testimonial and background color
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  // Handle previous testimonial and background color
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="py-12 text-textColor"
      style={{ backgroundColor: bgColors[currentIndex] }}
    >
      <div className="max-w-6xl container m-auto px-5 flex flex-col md:flex-row justify-between items-center">
        {/* Left Content */}
        <div className="text-left px-8 md:px-8 md:max-w-md">
          <h3 className="text-sm uppercase mb-2">Do not take it from us</h3>
          <h2 className="text-4xl font-bold mb-6">Listen from our Happy Clients</h2>
          <div className="flex space-x-6">
            <button
              onClick={handlePrevious}
              className="bg-black text-textColor p-3 rounded-full hover:bg-gray-800"
            >
              <FontAwesomeIcon icon={faAngleDoubleLeft} size="2x" />
            </button>
            <button
              onClick={handleNext}
              className="bg-black text-textColor p-3 rounded-full hover:bg-gray-800"
            >
              <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />
            </button>
          </div>
        </div>

        {/* Right Content */}
        <div className="text-textColor p-8 rounded-lg shadow-lg md:ml-auto">
          <div className="mb-4">
          <FontAwesomeIcon icon={faQuoteLeft} className="w-8 h-8 mb-4" />
            <p className="text-lg">{testimonials[currentIndex].text}</p>
          </div>
          <div className="flex items-center mt-4">
            <img
              src="https://via.placeholder.com/48"
              alt="User"
              className="w-12 h-12 rounded-full"
            />
            <div className="ml-4">
              <h3 className="text-lg font-bold">{testimonials[currentIndex].name}</h3>
              <p className="text-sm">{testimonials[currentIndex].title}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
