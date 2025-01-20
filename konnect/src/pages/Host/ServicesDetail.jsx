// ServiceDetails.jsx
import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"
import location from "../../assets/ServiceLocation.png"
import tag from "../../assets/Tag.png"
import stop from "../../assets/stop.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ServiceDetails = () => {
  const service = useLoaderData(); // Fetch data from the loader
  const qlocation = useLocation();
    // Extracting search parameters from location
    const search = qlocation.search;
    console.log(search)
    // Extracting type from location state
    const type = qlocation.state?.type || 'all';

  // const { id } = useParams(); // Get the service ID from URL params
  

  // Handle case where service is not found
  if (!service) {
    return <div>Service not found</div>;
  }
  const message = "Hello, I am interested in your product.";

  return (
      <div className=" mx-auto p-16  space-y-7 bg-textColor min-h-screen">
      <Link
                to={`..${search}`}
                relative="path"
                className=""
            >&larr; <span>Back to {type}</span></Link>
      {/* Service Images */}
    <div className="flex p-1 justify-center space-x-2">
      {service.imageUrl && service.imageUrl.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`${service.name} image ${index + 1}`}
          className="rounded-lg w-36   md:w-44 md:h-48 object-cover border-2"
        />
      ))}
    </div>
    
    
          {/* Profile Section */}
          <div className="bg-customGray shadow-md rounded-lg p-6 mb-8">
            <div className="flex items-center gap-4">
              {/* Profile Info */}
              <div className="flex-grow space-y-3">
                <h2 className="text-2xl font-bold">{service.name}</h2>
                <div className="inline-flex items-center text-gray-600 border border-gray-400 px-3 py-1">
                  <img src={tag} alt="tag" className="h-3 object-contain mr-2" />
                  {service.category}
                </div>
                <div className="flex items-center text-yellow-500">
                  {'⭐'.repeat(service.rating)} <span className="text-gray-600 text-sm ml-2">{service.rating}</span>
                </div>
                <div className="inline-flex items-center text-gray-600">
                  <img src={location} alt="location" className="h-3 object-contain pr-1" />
                  {service.location}
                </div>
    
                <a 
                  href={`https://wa.me/${service.contact}?text=${encodeURIComponent(message)}`} 
                  className="bg-purple-600 text-center block w-2/7 md:w-1/5  text-textColor py-2 rounded-lg hover:bg-purple-700" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
        <FontAwesomeIcon icon={faWhatsapp} style={{ marginRight: '8px' }} />Message
      </a>
                {/* Message Button */}
                {/* <button className="bg-purple-600 block text-textColor px-12 py-2 rounded-lg hover:bg-purple-700">
                  MESSAGE
                </button> */}
              </div>
            </div>
          </div>
    
     {/* Services Section */}
    <div>
      <h3 className="text-2xl font-semibold text-center mb-8">SERVICES</h3>
      {service.services && service.services.length > 0 ? (
        <div className="bg-purple-600 text-textColor p-6 py-11 rounded-lg mb-8">
          <div className="grid grid-cols-2 gap-4">
            {service.services.map((serviceItem, index) => (
              <div key={index} className="inline-flex items-center">
                <img src={stop} alt="stop" className="h-3 object-contain mr-2" />
                {serviceItem}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <pre className="text-center text-gray-500">This page has not defined their services</pre>
      )}
    </div>
    
    
    {/* Reviews Section */}
    <div>
      <h3 className="text-2xl font-semibold text-center mb-8">REVIEWS</h3>
      {service.reviews && service.reviews.length > 0 ? (
        <div className="rounded-lg">
          <div className="space-y-6">
            {service.reviews.map((review) => (
              <div key={review.id} className="bg-customGray p-4 rounded-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <p className="font-bold">{review.name}</p>
                  <p className="text-gray-500 text-sm">{review.date}</p>
                </div>
                <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</p>
                <p className="mt-2">{review.comment}</p>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <pre className="text-center text-gray-500">There are no reviews for this service yet.</pre>
      )}
    </div>
    
        </div>
      );
};

export default ServiceDetails;


// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
// import { Link, useParams, useLocation, useLoaderData } from "react-router-dom"
// import Services1 from "../../assets/Service1.png"
// import Services2 from "../../assets/Service2.png"
// import Services3 from "../../assets/Service3.png"
// import location from "../../assets/ServiceLocation.png"
// import tag from "../../assets/Tag.png"

// const ServiceDetails = () => {
//   const phoneNumber = "+2347012661432"; // Replace with your phone number in international format
//   const message = "Hello, I am interested in your product."; // Replace with your custom message
//   const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  
//   const { id } = useParams(); // Get id from URL params
//   const qlocation = useLocation(); // Get current qlocation
//   const { services } = useLoaderData(); // Fetch data using loader()
  
//     //   // Find the van with matching id
//     //   const service = services.find(service => service.id === id);
//     //   if (!service) {
//     //       return <div>Loading...</div>; // Handle loading state or error if van not found
//     //   }

//     // // Extracting search parameters from qlocation
//     // const search = qlocation.search;
//     // // Extracting type from qlocation state
//     // const type = qlocation.state?.type || 'all';
    
//     return (
//     <div className="max-w-4xl mx-auto p-8 space-y-7 bg-textColor  min-h-screen">
//       {/* <Link
//                 to={`..${search}`}
//                 relative="path"
//                 className="back-button"
//             >&larr; <span>Back to {type}</span>
//       </Link> */}
//         {/* Service Images */}
//         <div className="flex p-1 space-x-2">
//             <img
//               src={Services1}
//               alt="Profile 1"
//               className="rounded-lg w-44 h-48 object-cover border-2 border-blue-500"
//             />
//             <img
//               src={Services2}
//               alt="Profile 2"
//               className="rounded-lg w-44 h-48 object-cover"
//             />
//             <img
//               src={Services3}
//               alt="Profile 3"
//               className="rounded-lg w-44 h-48 object-cover"
//             />
//           </div>
//       {/* Profile Section */}
//       <div className="bg-customGray shadow-md rounded-lg p-6 mb-8">
//         <div className="flex items-center gap-4">
//           {/* Profile Info */}
//           <div className="flex-grow space-y-3">
//             <h2 className="text-2xl font-bold">Emmy's Touch</h2>
//                     <div className="inline-flex items-center text-gray-600 border border-gray-400 px-3 py-1">
//                       <img src={tag} alt="tag" className="h-3 object-contain mr-2" />
//                       Beauty
//                     </div>
//             <div className="flex items-center text-yellow-500">
//               ⭐⭐⭐⭐⭐ <span className="text-gray-600 text-sm ml-2">5.0</span>
//             </div>
//             <div className="inline-flex items-center text-gray-600">
//                 <img src={location} alt="location" className="h-3 object-contain pr-1" />
//                 UNN, Behind Flat
//             </div>
//           {/* Message Button */}
//           <button className="bg-purple-600 block text-textColor px-12 py-2 rounded-lg hover:bg-purple-700">
//             MESSAGE
//           </button>
//           </div>
//         </div>
//       </div>

//       {/* Services Section */}
//     <div>
//     <h3 className="text-2xl font-semibold text-center mb-8">SERVICES</h3>
//       <div className="bg-purple-600 text-textColor p-6 py-11 rounded-lg mb-8">
//         <div className="grid grid-cols-2 gap-4">
//           <p>• Natural makeup</p>
//           <p>• Bridal makeup</p>
//           <p>• Glamorous makeup</p>
//           <p>• Prom makeup</p>
//           <p>• Bronzed Goddess glam</p>
//           <p>• Summer Glow</p>
//           <p>• Smokey Eye Look</p>
//           <p>• Winter Glam</p>
//         </div>
//       </div>
//     </div>

//       {/* Reviews Section */}
//     <div>
//     <h3 className="text-2xl font-semibold text-center mb-8">REVIEWS</h3>
//       <div className="rounded-lg">
//         <div className="space-y-6">
//           {/* Review 1 */}
//           <div className="bg-customGray p-4 rounded-lg shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="font-bold">Jenifer234</p>
//               <p className="text-gray-500 text-sm">4 Dec 2024</p>
//             </div>
//             <p className="text-yellow-500 mt-2">⭐⭐⭐⭐</p>
//             <p className="mt-2">
//               It was really good. Her hand is so neat and not painful. I really recommend her.
//             </p>
//           </div>
//           {/* Review 2 */}
//           <div className="bg-customGray p-4 rounded-lg shadow-sm">
//             <div className="flex items-center justify-between">
//               <p className="font-bold">Ebeh Adaeze</p>
//               <p className="text-gray-500 text-sm">4 Dec 2024</p>
//             </div>
//             <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</p>
//             <p className="mt-2">
//               She gave me exactly what I wanted. Her customer care is top-notch. Definitely booking her again.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default ServiceDetails;
