import React, { useEffect,useState } from 'react';
import { NavLink, useNavigation } from 'react-router-dom'
import { auth, db, storage } from '../../Firebase/firebase';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';


const Profile = () => {
    // State to control modal visibility
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
   
   
    // Function to toggle modal
    const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
    };
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
  


    const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      contact: "",
      occupation: "",
    });
  
    // Handle form input changes
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    // Function to update user data in Firebase
    const updateUserData = async (e) => {
      e.preventDefault();
      
  // Check if all fields are filled
  const { firstname, lastname, contact, occupation } = formData;
  if (!firstname || !lastname || !contact || !occupation) {
    alert("Please fill out all fields before saving.");
    return;
  }

      if (!userId) return alert("User not found!");
  
      try {
        const userRef = doc(db, "users", userId);
        await updateDoc(userRef, formData);
        alert("User data updated successfully!");
        toggleModal(); // Close modal after update
        window.location.reload(); // Refresh the page after success
      } catch (error) {
        console.error("Error updating user data:", error);
        alert("Failed to update user data.");
      }
    };

    const [isEditing, setIsEditing] = useState(false);
  const [profilePic, setProfilePic] = useState({ photo: null });
  const [previewUrl, setPreviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  // const handleFileChange = (e) => {
  //   setProfilePic(e.target.files[0]);
  // };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setProfilePic({ photo: selectedFile });
      const preview = URL.createObjectURL(selectedFile);
      setPreviewUrl(preview); // Set the preview URL in state
    }
  };
  
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl); // Cleanup old preview URL
      }
    };
  }, [previewUrl]);

  // Handle profilepic form submission
  // const handleProfilePicSubmit = async (e) => {
  //   e.preventDefault();
  //   if (!profilePic || !userId) return;

  //   try {
  //     // Upload to Firebase Storage
  //     const storageRef = ref(storage, `profile_pictures/${userId}`);
  //     await uploadBytes(storageRef, profilePic);

  //     // Get the download URL
  //     const profilePicUrl = await getDownloadURL(storageRef);

  //     // Update Firestore document
  //     const userDocRef = doc(db, 'users', userId);
  //     await updateDoc(userDocRef, { profilePicUrl });

  //     alert('Profile picture updated successfully!');
  //   } catch (error) {
  //     console.error('Error updating profile picture:', error);
  //   }

  //   setIsEditing(false);
  // };

  const handleProfilePicSubmit = async () => {
    setLoading(true);
    try {
      // Fetch user document
      const userDoc = doc(db, "users", userId);
      const userSnapshot = await getDoc(userDoc);
      const oldPhotoUrl = userSnapshot.data()?.profilePicUrl;
  
      // Delete the old photo if it exists
      if (oldPhotoUrl) {
        const oldPhotoRef = ref(storage, oldPhotoUrl);
        await deleteObject(oldPhotoRef);
      }
  
      let photoUrl = oldPhotoUrl;
  
      // Upload the new photo
      if (profilePic.photo) {
        // ref(storage, photos/${formData.photo.name});
        // ref(storage, `profilePics/${profilePic.photo.name}`);
        const photoRef = ref(storage, `photos/${profilePic.photo.name}`);
        await uploadBytes(photoRef, profilePic.photo);
        photoUrl = await getDownloadURL(photoRef);
      }
  
      // Update Firestore document
      await updateDoc(userDoc, { profilePicUrl: photoUrl });
      alert("Profile picture updated successfully!");
    } catch (error) {
      console.error("Error updating profile picture:", error);
      alert("Failed to update profile picture: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setProfilePic(null);
  };

        // Fetch the user data when the component mounts
        useEffect(() => {
          const userId = auth.currentUser?.uid; // Replace with dynamic ID if needed
          if (userId) {
            setUserId(userId);
          getUserData(userId);
          }
        }, []);


  return (
    
      <div className="bg-textColor h-screen md:p-8 w-full">
      <div className="hidden md:flex border-b-2 justify-between items-center p-4  border-b-gray-400"> 
      {/* Header Bar */}
        {/* Header Section */}
        
          <div className='ml-auto'>
          <button
              onClick={toggleModal}
              className="bg-highlight px-3 py-2 rounded-md mr-2 hover:bg-green-600"
            >
              Update Profile
            </button>
            {/* <button className="bg-textColor text-gray-700 px-3 py-2 rounded-md hover:bg-gray-400">Cancel</button> */}
          </div>

      </div>
    <div className='px-12'>
        <div className='flex p-5 text-center items-center'>
              <h2 className="text-3xl text-center font-bold">Personal Info</h2>
                        <NavLink
                          to="/registerentrepreneur"
                          className="py-2 md:p-4 md:px-3 font-bold ml-auto text-sm text-center bg-highlight rounded-lg hover:bg-green-600"
                        >Become an Entrepreneur</NavLink>
              </div>


        {/* Profile Picture */}
        <div className="flex ml-14 mb-6">
        <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Avatar"
            className="rounded-full w-32 h-32"
          />
        <div className='md:hidden ml-auto m-auto'>
          <button
              onClick={toggleModal}
              className="bg-highlight text-sm font-bold px-3 py-2 rounded-md mr-2 hover:bg-green-600"
            >
              Update Profile
            </button>
            </div>
        </div>
      

        {/* Form Section */}
        <form className='border-y-2 justify-between items-center border-gray-400'>
          {/* Name */}
          <div className="flex py-5 items-center border-b-2 border-gray-400">
            <label className="flex flex-start text-sm font-medium text-gray-700">Name</label>
            <div className="w-2/3 flex ml-auto gap-4 ">
              <input
                type="text"
                className="w-full p-2 border text-xs md:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="First Name"
                value={user ? `${user.firstname}` : ''}
                readOnly
              />
              <input
                type="text"
                className="w-full p-2 border text-xs md:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Last Name"
                value={user ? `${user.lastname}` : ''}
                readOnly
              />
            </div>
          </div>

          {/* Email */}
          <div className="flex py-5 items-center border-b-2 border-gray-400">
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
          <div className="w-2/3 flex ml-auto gap-4 ">
            <input
              type="email"
              className="w-full p-2 text-xs md:text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder='jazzyokorie@gmail.com'
              value={user ? `${user.email}` : ''}
              readOnly
            />
          </div>
          </div>

          {/* Phone Number */}
          <div className="flex  py-5 items-center border-b-2 border-gray-400">
            <label className="block text-sm font-medium text-gray-700">Phone Number</label>
            <div className="w-2/3 flex ml-auto gap-4 ">
            <input
              type="tel"
              className="w-full p-2 border text-xs md:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder='+2348023475630'
              value={user ? `${user.contact}` : ''}
              readOnly
            />
          </div>
          </div>

          {/* Occupation */}
          <div className="flex py-5 items-center">
            <label className="block text-sm font-medium text-gray-700">Occupation</label>
            <div className="w-2/3 flex ml-auto gap-4 ">
            <input
              type="text"
              className="w-full p-2 border text-xs md:text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder='Student'
              value={user ? `${user.occupation}` : ''}
              readOnly
            />
          </div>
          </div>

        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
            {/* Header Bar */}
            <div className="mb-5 flex justify-between items-center ">
              <div className="ml-auto">
              {/* Submit Button */}
        {isSubmitting ? (
        <button
          type="button"
          disabled
          className="px-4 py-2 rounded-md mr-2 bg-gray-400 text-black"
          >
          Saving...
        </button>
      ) : (
        <button
        type="submit"
        onClick={updateUserData}
          className="px-4 py-2 rounded-md mr-2 bg-green-500 text-white hover:bg-green-600"
        >
          Save Edit
        </button>
      )}
                <button
                  onClick={toggleModal}
                  className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>

            {/* Profile Picture */}
            <h2 className="text-2xl font-bold">Edit Your Profile</h2>
            <div className="relative w-32 h-32 m-auto flex items-center justify-center my-6">
              <div>
              <img
                src={previewUrl || "https://www.w3schools.com/w3images/avatar2.png"}
                alt="Profile"
                className="rounded-full w-32 h-32"
              />
              <span className="absolute bottom-2 right-2 bg-green-500 text-white text-sm px-2 py-1 rounded-md shadow-md">
                  {/* Edit Button */}
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-600 focus:outline-none"
        >
          Edit
        </button>
              </span>
              </div>
           
            </div>
            {isEditing && (
              <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>

        <form onSubmit={handleProfilePicSubmit} className="mt-4  rounded-md">
          <label className="block text-xl font-extrabold text-gray-700 mb-2">
            Upload Profile Picture
          </label>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
          />
          <div className='space-x-4'>
          <button
            type="submit"
            className="mt-4 w-2/5 bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
          >
            Save
          </button>
          <button
              type="button"
              onClick={handleCancel}
              className="bg-gray-300 w-2/5 text-white py-2 px-4 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
        </div>
      )}

            {/* Form Section */}
            <form className="border-y-2 border-gray-400">
              {/* Name */}
              <div className="flex py-5 items-center border-b-2 border-gray-400">
                <label className="flex text-sm font-medium text-gray-700">Name</label>
                <div className="w-2/3 flex ml-auto gap-4">
                  <input
                    type="text"
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="FirstName"
                    required
                  />
                  <input
                    type="text"
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="LastName"
                    required
                  />
                </div>
              </div>

              {/* Email */}
              <div className="flex py-5 items-center border-b-2 border-gray-400">
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="w-2/3 flex ml-auto gap-4">
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="jazzyokorie@gmail.com"
                    value={user ? `${user.email}` : ''}
                    readOnly
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div className="flex py-5 items-center border-b-2 border-gray-400">
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="w-2/3 flex ml-auto gap-4">
                  <input
                    type="tel"
                    pattern="[0-9]*"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="08187755555"
                    required
                  />
                </div>
              </div>

              {/* Occupation */}
              <div className="flex py-5 items-center">
                <label className="block text-sm font-medium text-gray-700">Occupation</label>
                <div className="w-2/3 flex ml-auto gap-4">
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Student"
                    required
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      </div>
  );
};

export default Profile;
