import React, { useState, useEffect } from 'react';
import Landing1 from "../assets/Landing1.png"
import Landing2 from "../assets/Landing2.png"
import Landing3 from "../assets/Landing3.png"
import Landing4 from "../assets/Landing4.png"
import Landing5 from "../assets/Landing5.png"

const SlideshowLandingPage = () => {
      const images = [Landing1, Landing2, Landing3, Landing4, Landing5];
      const [currentIndex, setCurrentIndex] = useState(0);
    
      // Cycle through images every 3 seconds
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3500);
      
        return () => clearInterval(interval); // Cleanup interval on unmount
      }, [images.length]);
      return (
        <div className="relative mt-11 w-full h-80 md:h-[400px] flex items-center justify-center overflow-hidden">
          {images.map((image, index) => {
            // Calculate the relative position
            const position = (index - currentIndex + images.length) % images.length;
    
            // Only show 3 images
            if (position > 2) return null;
    
            // Define scale and opacity for each image
            const scale = position === 1 ? 'scale-125 opacity-100' : 'scale-90 opacity-80';
            const zIndex = position === 1 ? 'z-10' : 'z-0';
    
            return (
              <img
                key={index}
                src={image}
                alt={`Slideshow ${index + 1}`}
                className={`absolute transition-all duration-1000 ${scale} ${zIndex}`}
                style={{
                  width: position === 1 ? '60%' : '40%', // Center image is larger
                  height: position === 1 ? '100%' : '50%', // Center image takes full height of parent
                  transform: `translateX(${(position - 1) * 110}%)`,
                }}
              />
            );
          })}
        </div>
      );
    }

export default SlideshowLandingPage

