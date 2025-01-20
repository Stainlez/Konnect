import { useEffect, useState } from 'react';
import { useSearchParams, useLoaderData, useNavigate } from "react-router-dom"
import SearchBar from './Host/SearchBar'
import tag from "../assets/Tag.png"
import location from "../assets/ServiceLocation.png"



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
          onClick={() => navigate(`/services/${service.id}`)}
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
      {/* <SearchBar /> */}
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



export default Services
