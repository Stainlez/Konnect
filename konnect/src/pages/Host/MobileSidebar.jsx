import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import home from '../../assets/homeIcon.png'
import profile from '../../assets/profileIcon.png'
import services from '../../assets/serviceIcon.png'
import settings from '../../assets/settingsIcon.png'
import logout from '../../assets/logoutIcon.png'
import logo from '../../assets/logo.jpg'

const MobileSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`bg-black text-white w-64 h-screen fixed top-0 left-0 flex flex-col p-6 space-y-4 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:hidden z-50`} // This is only visible on mobile, fixed position
    >
      {/* <h1 className="text-2xl font-bold">KONNECT</h1>
       */}
        <div className="p-4 mx-auto rounded-2xl shadow-xl">
          <img 
            src={logo} 
            alt="logo" 
            className="md:flex max-h-20 object-contain" 
          />
        </div>
      <nav className="space-y-2">
      
        <Link to="/dashboard" className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
        <div className="w-4 h-4 overflow-hidden cursor-pointer">
          <img
            src={home}
            alt="Avatar"
            className="object-cover"
          />
        </div> <span className='text-sm'>Dashboard</span>
        </Link>
        
        <Link to="/dashboard/profile" className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
        <div className="w-4 h-4 overflow-hidden cursor-pointer">
          <img
            src={profile}
            alt="Avatar"
            className="object-cover"
          />
        </div> <span className='text-sm'>Profile</span>
        </Link>

        <Link to="/dashboard/services" className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
        <div className="w-4 h-4 overflow-hidden cursor-pointer">
          <img
            src={services}
            alt="Avatar"
            className="object-cover"
          />
        </div> <span className='text-sm'>Services</span>
        </Link>

        {/* <Link to="/dashboard/history" className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
          History
        </Link> */}
        <Link to="/dashboard/settings" className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
        <div className="w-4 h-4 overflow-hidden cursor-pointer">
          <img
            src={settings}
            alt="Avatar"
            className="object-cover"
          />
        </div> <span className='text-sm'>Settings</span>
        </Link>
        
        <Link to="/logout" className="flex space-x-4 py-4 px-4 rounded hover:bg-gray-700" onClick={toggleSidebar}>
        <div className="w-4 h-4 overflow-hidden cursor-pointer">
          <img
            src={logout}
            alt="Avatar"
            className="object-cover"
          />
        </div> <span className='text-sm'>Logout</span>
        </Link>
      </nav>
    </div>
  );
};

MobileSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default MobileSidebar;
