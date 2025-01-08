import React, { useEffect, useState } from 'react';
import SearchBar from './SearchBar'
import Services1 from "../../assets/Service1.png"
import Services2 from "../../assets/Service2.png"
import Services3 from "../../assets/Service3.png"
import Services4 from "../../assets/Service4.png"
import Services5 from "../../assets/Service5.png"
import Services6 from "../../assets/Service6.png"
import Services7 from "../../assets/Service7.png"
import Services8 from "../../assets/Service8.png"
import Services9 from "../../assets/Service9.png"
import Services10 from "../../assets/Service10.png"
import Person1 from "../../assets/Person1.png"
import Person2 from "../../assets/Person2.png"
import Person3 from "../../assets/Person3.png"
import Person4 from "../../assets/Person4.png"
import Person5 from "../../assets/Person5.png"
import Person6 from "../../assets/Person6.png"
import Person7 from "../../assets/Person7.png"
import Person8 from "../../assets/Person8.png"
import Person9 from "../../assets/Person9.png"
import Person10 from "../../assets/Person10.png"
import tag from "../../assets/Tag.png"
import location from "../../assets/ServiceLocation.png"


const servicesData = [
  { id: 1, name: "Nnenna Samuels", location: "UNN, Behind Flat", category: "Beauty", product: "Emmy's Touch", avatar: Person1, imageUrl: Services1 },
  { id: 2, name: "Okoye Chimaobi", location: "Odenigwe", category: "Design", product: "OC Graphics", avatar: Person2, imageUrl: Services2 },
  { id: 3, name: "Eze Ugochukwu", location: "UNN, Hilltop", category: "Art", product: "DreamArts", avatar: Person3, imageUrl: Services3 },
  { id: 4, name: "Ndu Ijeoma", location: "UNN, Behind Flat", category: "Fashion", product: "Cindy Couture", avatar: Person4, imageUrl: Services4 },
  { id: 5, name: "Mbah Amarachi", location: "Okpara Hostel", category: "Beauty", product: "Capture Moments", avatar: Person5, imageUrl: Services5 },
  { id: 6, name: "Enioluwa Adeola", location: "UNN, Odenigbo", category: "Culinary", product: "Dee's Kitchen", avatar: Person6, imageUrl: Services6 },
  { id: 7, name: "Chike Obi", location: "New Keneth Hostel", category: "Culinary", product: "Chi's Snacks", avatar: Person7, imageUrl: Services7 },
  { id: 8, name: "Ada Umeh", location: "Independence", category: "Tech", product: "Dev Umeh", avatar: Person8, imageUrl: Services8 },
  { id: 9, name: "Ifeanyi Nwachukwu", location: "Hilltop", category: "Beauty", product: "Nwach Touch", avatar: Person9, imageUrl: Services9 },
  { id: 10, name: "Tina Okafor", location: "Chisco Hostel", category: "Interior Design", product: "Interior by Tina", avatar: Person10, imageUrl: Services10 },
  { id: 11, name: "Kachi Emeka", location: "Odim Gate", category: "Photography", product: "Lens Kachi", avatar: Person3, imageUrl: Services1 },
  { id: 12, name: "Emeka John", location: "New Keneth", category: "Art", product: "John's Artworks", avatar: Person5, imageUrl: Services2 },
  { id: 13, name: "Ngozi Chike", location: "Hilltop", category: "Art", product: "Chike's Art", avatar: Person3, imageUrl: Services3 },
  { id: 14, name: "Blessing Nnamdi", location: "Independence Layout", category: "Culinary", product: "Bless Meals", avatar: Person7, imageUrl: Services6 },
  { id: 15, name: "Ogechi Uzo", location: "Okpara Hostel", category: "Tech", product: "Dev Ogechi", avatar: Person9, imageUrl: Services8 },
];

const Services = () => {
  const [services, setServices] = useState([]);
  const [visibleServices, setVisibleServices] = useState(12);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  return (
    <div className='px-8 font-montserrat bg-textColor min-h-screen max-w-full'>
      <SearchBar/>
      <h1 className="text-3xl font-bold p-5 pb-12">Find your Services here!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.slice(0, visibleServices).map((service) => (
          <div
            key={service.id}
            className="justify-items-center rounded-lg overflow-hidden mb-7"
          >
          <div className='flex ml-auto space-x-4 mb-3'>
          <img
              src={service.avatar}
              alt={service.product}
              className="h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold mt-2">{service.name}</p>
              <div className="inline-flex items-center text-gray-600">
                <img src={location} alt="location" className="h-3 object-contain pr-1" />
                {service.location}
                </div>
            </div>
          </div>
            <img
              src={service.imageUrl}
              alt={service.product}
              className="h-52 md:w-full object-cover"
            />
            <div className="pt-3 ml-auto">
              <div className="inline-flex items-center text-gray-600 border border-gray-400 px-3 py-1">
                <img src={tag} alt="tag" className="h-3 object-contain mr-2" />
                {service.category}
              </div>


            <h2 className="text-xl font-bold mt-2">{service.product}</h2>

              <button className="bg-purple-800 w-full text-white px-4 py-2 rounded-md mt-4 hover:bg-purple-700">
                View Product
              </button>
            </div>
          </div>
        ))}
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
  )
}

export default Services
