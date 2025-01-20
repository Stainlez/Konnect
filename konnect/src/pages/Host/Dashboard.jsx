import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { NavLink } from 'react-router-dom';
import SearchBar from './SearchBar';
import { auth, db } from '../../Firebase/firebase'; // Adjust the path to your firebase config

const Dashboard = () => {
  const [user, setUser] = useState(null);
  // Function to fetch user data
  const getUserData = async (userId) => {
    try {
      const userDoc = await getDoc(doc(db, "users", userId));
      // const userSnap = await getDoc(userRef);
      if (userDoc.exists()) {
        setUser(userDoc.data());
        
      } else {
        console.log('No such document!');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Fetch the user data when the component mounts
  useEffect(() => {
    const userId = auth.currentUser?.uid; // Replace with dynamic ID if needed
    if (userId) {
    getUserData(userId);
    }
  }, []);



  return (
    <div className="px-8 font-montserrat bg-textColor h-screen max-w-full">
      <SearchBar />
      <div className="flex py-8 ">
        
        <h2 className="text-3xl pt-3 md:pl-7 text-nowrap mr-5 font-bold">
          Hello {user ? `${user.firstname}!` : '...'}
        </h2>
        <NavLink
          to="/registerentrepreneur"
          className="p-4 px-3 font-bold ml-auto text-center bg-highlight rounded-lg hover:bg-green-600"
        >
          Become an Entrepreneur
        </NavLink>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-purple-600 h-80 rounded-xl"></div>
        <div className="grid p-1">
          <div className="bg-white h-32 rounded-xl"></div>
          <div className="bg-white h-32 rounded-xl"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


// import { NavLink } from 'react-router-dom'
// import SearchBar from './SearchBar'


// const Dashboard = () => {
//   return (
//     <div className='px-8 font-montserrat bg-textColor h-screen max-w-full'>
//       <SearchBar/>
//       <div className='flex p-8'>
//       <h2 className="text-3xl  font-bold">Hello Jasmine!</h2>
//                 <NavLink
//                   to="/registerentrepreneur"
//                   className="p-4 px-3 font-bold ml-auto text-center bg-highlight rounded-lg hover:bg-green-600"
//                 >Become an Entrepreneur</NavLink>
//       </div>
//       <div className="grid grid-cols-2 gap-4 mt-6">
//         <div className="bg-purple-600 h-80 rounded-xl"></div>
//         <div className='grid p-1'>
//           <div className="bg-white h-32 rounded-xl"></div>
//           <div className="bg-white h-32 rounded-xl"></div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Dashboard
