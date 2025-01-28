import React, { useState, useEffect } from "react";
import beauty from "../assets/beauty.png"
import tech from "../assets/tech.png"
import food from "../assets/food.png"
import photo from "../assets/photo.png"
import fashion from "../assets/fashion.png"
import Art from "../assets/Art.png"
// import Landing1 from "../assets/Landing1.jpg";
// import Landing2 from "../assets/tailor.webp";
// import Landing3 from "../assets/hair5.jpg";
// import Landing4 from "../assets/Landing4.png";
// import Landing5 from "../assets/Landing5.png";

// const SlideshowLandingPage = () => {
//   const images = [Landing1, Landing2, Landing3, Landing4, Landing5];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Cycle through images every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3500);

//     return () => clearInterval(interval); // Cleanup interval on unmount
//   }, [images.length]);
//   return (
//     <div className="relative mt-11 w-full h-80 md:h-[520px] flex items-center justify-center overflow-hidden">
//       {images.map((image, index) => {
//         // Calculate the relative position
//         const position = (index - currentIndex + images.length) % images.length;

//         // Only show 3 images
//         if (position > 2) return null;

//         // Define scale and opacity for each image
//         const scale =
//           position === 1 ? "scale-125 opacity-100" : "scale-90 opacity-80";
//         const zIndex = position === 1 ? "z-10" : "z-0";

//         return (
//           <img
//             key={index}
//             src={image}
//             alt={`Slideshow ${index + 1}`}
//             className={`absolute transition-all duration-1000 ${scale} ${zIndex}`}
//             style={{
//               width: position === 1 ? "60%" : "40%", // Center image is larger
//               height: position === 1 ? "100%" : "50%", // Center image takes full height of parent
//               transform: `translateX(${(position - 1) * 110}%)`,
//             }}
//           />
//         );
//       })}
//     </div>
//   );
// };

// export default SlideshowLandingPage;

const SlideshowLandingPage = () => {
  return(
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-6">
    {/* First Column */}
    <div className="flex flex-col gap-2 h-[520px]">
      <div className="group space-y-2 overflow-hidden flex-grow flex-[1] hover:flex-[3] transition-all duration-500 bg-paleLavender text-white rounded-lg p-6 relative cursor-pointer">
        <h2 className="absolute top-2 text-md font-bold">Beauty</h2>
        <div className="absolute top-6 space-y-1 text-xs opacity-100 transition-opacity duration-500">
          <p>Transform your beauty routine with our exclusive on-demand beauty services. Look good, feel great, effortlessly.</p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Some key highlights are; A wide range of beauty services, personalized recommendations, convenience, affordability etc.
          </p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Whether you need a quick makeover, manicures and pedicures, or you simply just want a new hairdo, connect to beauticians and stylists at your fingertips.
          </p>
        </div>
        <img
          src={beauty}
          alt="Beauty"
          className="absolute bottom-0 -right-4 w-60 h-40 object-cover opacity-100 transition-opacity duration-500 group-hover:block group-hover:opacity-100 group-[.group]:flex-[1]:hidden"
        />
      </div>
  
      <div className="group space-y-2 overflow-hidden flex-grow flex-[1] hover:flex-[3] transition-all duration-500 bg-highlight text-white rounded-lg p-6 relative cursor-pointer">
        <h2 className="absolute top-2 text-md font-bold">Tech</h2>
        <div className="absolute top-6 space-y-1 text-xs opacity-100 transition-opacity duration-500">
          <p>Simplify your tech needs with our cutting-edge on-demand tech services. Get reliable solutions for your digital needs.</p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Some key highlights are; A wide range of tech services, At-home assistance, transparent pricing etc.
          </p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Whether you need a graphic designer, web developer, or a UI/UX designer, keep your tech needs running smoothly without stress.
          </p>
        </div>
        <img
          src={tech}
          alt="Tech"
          className="absolute bottom-0 -right-4 w-60 h-40 object-cover opacity-100 transition-opacity duration-500 group-hover:block group-hover:opacity-100 group-[.group]:flex-[1]:opacity-0"
        />
      </div>
    </div>
  
    {/* Second Column */}
    <div className="flex flex-col gap-2 h-[520px]">
      <div className="group space-y-2 overflow-hidden flex-grow flex-[1] hover:flex-[3] transition-all duration-500 bg-paleOrange text-white rounded-lg p-6 relative cursor-pointer">
        <h2 className="absolute top-2 text-md font-bold">Food</h2>
        <div className="absolute top-6 space-y-1 text-xs opacity-100 transition-opacity duration-500">
          <p>Satisfy your cravings with our seamless food services, designed to bring your favorite meals to your doorstep.</p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Some key highlights are; A wide selection of food, fast delivery, affordability etc.
          </p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Whether it's a quick snack or an entire buffet for your event, we've got you covered. Your food satisfaction is just a tap away.
          </p>
        </div>
        <img
          src={food}
          alt="Food"
          className="absolute bottom-0 -right-2 w-60 h-40 object-cover opacity-100"
        />
      </div>
  
      <div className="group space-y-2 overflow-hidden flex-grow flex-[1] hover:flex-[3] transition-all duration-500 bg-paleBlue text-white rounded-lg p-6 relative cursor-pointer">
        <h2 className="absolute top-2 text-md font-bold">Photography</h2>
        <div className="absolute top-6 space-y-1 text-xs opacity-100 transition-opacity duration-500">
          <p>Capture life’s moments with our on-demand photography services. Turn every moment into a masterpiece.</p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            These services range from photo shoots to cinematography, product shoots, candid sessions, and videography etc.
          </p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Whether it’s a class portrait, an event, or creative content for your brand, student photographers are just a click away.
          </p>
        </div>
        <img
          src={photo}
          alt="Photography"
          className="absolute bottom-0 -right-1 w-60 h-40 object-cover opacity-100"
        />
      </div>
    </div>
  
    {/* Third Column */}
    <div className="flex flex-col gap-2 h-[520px]">
      <div className="group space-y-2 overflow-hidden flex-grow flex-[1] hover:flex-[3] transition-all duration-500 bg-palepink text-white rounded-lg p-6 relative cursor-pointer">
        <h2 className="absolute top-2 text-md font-bold">Fashion</h2>
        <div className="absolute top-6 space-y-1 text-xs opacity-100 transition-opacity duration-500">
          <p>Discover your perfect style with our available fashion services.</p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Find designers, stylists, tailors, and custom-made or thrift vendors. Enjoy affordability and facilitate your fashion life.
          </p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Whether you’re shopping for an event, building your wardrobe, or exploring the latest trends, this app elevates your fashion journey.
          </p>
        </div>
        <img
          src={fashion}
          alt="Fashion"
          className="absolute bottom-0 -right-2 w-60 h-40 object-cover opacity-100"
        />
      </div>
  
      <div className="group space-y-2 overflow-hidden flex-grow flex-[1] hover:flex-[3] transition-all duration-500 bg-paleGreen text-white rounded-lg p-6 relative cursor-pointer">
        <h2 className="absolute top-2 text-md font-bold">Artworks</h2>
        <div className="absolute top-6 space-y-1 text-xs opacity-100 transition-opacity duration-500">
          <p>Capture your creative journey with our on-demand art services.</p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            These services range from portrait drawings to paintings, sculptures, and murals.
          </p>
          <p className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            Whether sketching, painting, or designing, this app will meet your needs.
          </p>
        </div>
        <img
          src={Art}
          alt="Art"
          className="absolute bottom-0 -right-1 w-48 h-40 object-cover opacity-100"
        />
      </div>
    </div>
  </div>
  
)
}

export default SlideshowLandingPage;