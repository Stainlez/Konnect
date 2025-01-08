import { NavLink } from 'react-router-dom'
import SearchBar from './SearchBar'


const Dashboard = () => {
  return (
    <div className='px-8 font-montserrat bg-textColor h-screen max-w-full'>
      <SearchBar/>
      <div className='flex p-8'>
      <h2 className="text-3xl  font-bold">Hello Jasmine!</h2>
                <NavLink
                  to="/registerentrepreneur"
                  className="p-4 px-3 font-bold ml-auto text-center bg-highlight rounded-lg hover:bg-green-600"
                >Become an Entrepreneur</NavLink>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-purple-600 h-80 rounded-xl"></div>
        <div className='grid p-1'>
          <div className="bg-white h-32 rounded-xl"></div>
          <div className="bg-white h-32 rounded-xl"></div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
