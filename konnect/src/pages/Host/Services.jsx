import { useEffect, useState } from 'react';
import { useSearchParams, useLoaderData, useNavigate } from "react-router-dom"
import SearchBar from './SearchBar'
import tag from "../../assets/Tag.png"
import location from "../../assets/ServiceLocation.png"


// {
//   try {
//       // Fetch the data
//       const vans = await getAllData();
      
//       // Log the value of vans to the console
//       console.log(vans);
      
//       // Optionally return the vans data if needed elsewhere
//       return { vans };
//   } catch (error) {
//       console.error('Error fetching vans data:', error);
//   }
// }


const Services = () => {
  // Get services data from the loader
  const services = useLoaderData();
  const [visibleServices, setVisibleServices] = useState(12);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // If services are not loaded, display loading message
  if (!services) {
    return <div>Loading...</div>;
  }

  // Ensure services is an array
  const servicesList = Array.isArray(services) ? services : [];

  // Get the "category" query param from the URL
  const categoryFilter = searchParams.get("category");

  // Filter services based on the category query param
  const displayedServices = categoryFilter
    ? servicesList.filter(service => service.category.toLowerCase() === categoryFilter)
    : servicesList;

  // Render the filtered services
  const serviceElements = displayedServices.slice(0, visibleServices).map((service) => (
    <div key={service.id} className="justify-items-center rounded-lg overflow-hidden mb-7">
      <div className="flex ml-auto space-x-4 mb-3">
        <img src={service.avatar} alt={service.product} className="h-12 rounded-full object-cover" />
        <div>
          <p className="font-bold mt-2">{service.name}</p>
          <div className="inline-flex items-center text-gray-600">
            <img src={location} alt="location" className="h-3 object-contain pr-1" />
            {service.location}
          </div>
        </div>
      </div>
      <img src={service.imageUrl[0]} alt={service.product} className="h-52 w-60 md:w-full object-cover" />
      <div className="pt-3 ml-auto">
        <div className="inline-flex items-center text-gray-600 border border-gray-400 px-3 py-1">
          <img src={tag} alt="tag" className="h-3 object-contain mr-2" />
          {service.category}
        </div>
        <h2 className="text-xl font-bold mt-2">{service.product}</h2>
        <button 
          className="bg-purple-800 w-full text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-700"
          onClick={() => navigate(`/dashboard/services/${service.id}`)}
        >
          View Product
        </button>
      </div>
    </div>
  ));

  // Handle category filter change
  const handleFilterChange = (key, value) => {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }
      return prevParams;
    });
  };

  return (
    <div className="px-8 font-montserrat bg-textColor min-h-screen max-w-full">
      <SearchBar />
      <h1 className="text-3xl font-bold p-5 pb-6">Find your Services here!</h1>

      {/* Category Filter Buttons */}
      <div className="flex flex-wrap space-x-1 space-y-1 justify-center pt-2 pb-6">
        {["beauty", "tech", "art", "design", "fashion", "culinary", "photography", "interior-design"].map(category => (
          <button
            key={category}
            onClick={() => handleFilterChange("category", category)}
            className={`product-type ${category} ${categoryFilter === category ? "selected" : ""}`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}

        {categoryFilter && (
          <button
            onClick={() => handleFilterChange("category", null)}
            className="product-type clear-filters"
          >
            Clear filter
          </button>
        )}
      </div>

      {/* Display Filtered Services */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceElements}
      </div>

      {/* Load More Button */}
      {visibleServices < services.length && (
        <div className="text-center mt-8">
          <button
            onClick={() => setVisibleServices(visibleServices + 3)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
          >
            Find more work?
          </button>
        </div>
      )}

    </div>
  );
};


// const Services = () => {
//   // const [services, setServices] = useState([]);
//   const { services } = useLoaderData(loader);
//   // const [vans, setVans] = useState([]);
//   const [visibleServices, setVisibleServices] = useState(12);
//   const [searchParams, setSearchParams] = useSearchParams()
  
//   if (!services) {
//     return <div>Loading...</div>;
//   }

//   // Ensure services is defined as an array
//   const servicesList = Array.isArray(services) ? services : [];
//   console.log(servicesList)

//   // useEffect(() => {
//   //   setServices(servicesData);
//   // }, []);

//   // useEffect(() => {
//   //   const fetchData = async () => {
//   //     try {
//   //       const products = await getAllData(); // Await the data fetching
//   //       setVans(products); // Set the fetched data to state
//   //     } catch (error) {
//   //       console.error('Error fetching data:', error);
//   //     }
//   //   };

//   //   fetchData(); // Call the async function
//   // }, []); 

//    // Get the "category" query param from the URL
//    const categoryFilter = searchParams.get("category");
//   // console.log(categoryFilter)

//    // Filter products based on the category query param
//    const displayedServices = categoryFilter
//     ? servicesList.filter(product => product.category.toLowerCase() === categoryFilter)
//     : servicesList;

//          // Limit the number of displayed services
//     // const visibleServices = 10; // Adjust this number as needed

//     // Render the filtered services
//     const serviceElements = displayedServices.slice(0, visibleServices).map((service) => (
//       <div key={service.id} className="justify-items-center rounded-lg overflow-hidden mb-7">
//         <div className="flex ml-auto space-x-4 mb-3">
//           <img src={service.avatar} alt={service.product} className="h-12 rounded-full object-cover" />
//           <div>
//             <p className="font-bold mt-2">{service.name}</p>
//             <div className="inline-flex items-center text-gray-600">
//               <img src={location} alt="location" className="h-3 object-contain pr-1" />
//               {service.location}
//             </div>
//           </div>
//         </div>
//         <img src={service.imageUrl} alt={service.product} className="h-52 md:w-full object-cover" />
//         <div className="pt-3 ml-auto">
//           <div className="inline-flex items-center text-gray-600 border border-gray-400 px-3 py-1">
//             <img src={tag} alt="tag" className="h-3 object-contain mr-2" />
//             {service.category}
//           </div>
//           <h2 className="text-xl font-bold mt-2">{service.product}</h2>
//           <button className="bg-purple-800 w-full text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-700">
//             View Product
//           </button>
//         </div>
//       </div>
//     ));
  

//           function handleFilterChange(key, value) {
//             setSearchParams(prevParams => {
//                   if (value === null) {
//                       prevParams.delete(key)
//                   } else {
//                       prevParams.set(key, value)
//                   }
//                   return prevParams
//               })
//           }


//   return (
//     <div className='px-8 font-montserrat bg-textColor min-h-screen max-w-full'>
//       <SearchBar/>
//       <h1 className="text-3xl font-bold p-5 pb-6">Find your Services here!</h1>
      
      
//       {/* <ul>
//         // Map over the vans data and display it 
//         {vans.length > 0 ? (
//           vans.map((van, index) => (
//             <li key={index}>{van.category}</li> // Adjust based on the structure of your 'vans' data
//           ))
//         ) : (
//           <p>No vans available</p>
//         )}
//       </ul> */}

//       <div className="flex flex-wrap space-x-1 space-y-1 justify-center pt-2 pb-6">
//                 <button
//                     onClick={() => handleFilterChange("category", "beauty")}
//                     className={
//                         `product-type beauty 
//                         ${categoryFilter === "beauty" ? "selected" : ""}`
//                     }
//                 >Beauty</button>
//                 <button
//                     onClick={() => handleFilterChange("category", "tech")}
//                     className={
//                         `product-type tech 
//                         ${categoryFilter === "tech" ? "selected" : ""}`
//                     }
//                 >Tech</button>
//                 <button
//                     onClick={() => handleFilterChange("category", "art")}
//                     className={
//                         `product-type art 
//                         ${categoryFilter === "art" ? "selected" : ""}`
//                     }
//                 >Art</button>
//                 <button
//                     onClick={() => handleFilterChange("category", "design")}
//                     className={
//                         `product-type design 
//                         ${categoryFilter === "design" ? "selected" : ""}`
//                     }
//                 >Design</button>
//                 <button
//                     onClick={() => handleFilterChange("category", "fashion")}
//                     className={
//                         `product-type fashion 
//                         ${categoryFilter === "fashion" ? "selected" : ""}`
//                     }
//                 >Fashion</button>
//                 <button
//                     onClick={() => handleFilterChange("category", "culinary")}
//                     className={
//                         `product-type culinary 
//                         ${categoryFilter === "culinary" ? "selected" : ""}`
//                     }
//                 >Culinary</button>
//                 <button
//                     onClick={() => handleFilterChange("category", "photography")}
//                     className={
//                         `product-type photography 
//                         ${categoryFilter === "photography" ? "selected" : ""}`
//                     }
//                 >Photography</button>
//                 <button
//                     onClick={() => handleFilterChange("category", "interior-design")}
//                     className={
//                         `product-type interior-design 
//                         ${categoryFilter === "interior-design " ? "selected" : ""}`
//                     }
//                 >Interior Design</button>

//                 {categoryFilter ? (
//                     <button
//                         onClick={() => handleFilterChange("category", null)}
//                         className="product-type clear-filters"
//                     >Clear filter</button>
//                 ) : null}

//             </div>
      
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//         {serviceElements}
//       </div>

//       {/* Load More Button */}
//       {visibleServices < services.length && (
//         <div className="text-center mt-8">
//           <button
//             onClick={() => setVisibleServices(visibleServices + 3)}
//             className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
//           >
//             Find more work?
//           </button>
//         </div>
//       )}
//     </div>
//   )
// }

export default Services
