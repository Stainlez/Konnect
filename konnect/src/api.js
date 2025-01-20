import { servicesData } from '../src/Data';
// import { users } from './Data';



// Function to get all data
export async function getAllData() {
    return servicesData;
    // console.log(servicesData)
}



// Function to fetch user data
// export function useUserData() {
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);  // Loading state to manage UI while data is being fetched
//     const [error, setError] = useState(null); // Error state in case of failure
  
//     useEffect(() => {
//       // Ensure Firebase auth is initialized
//       const unsubscribe = auth.onAuthStateChanged(async (user) => {
//         if (user) {
//           try {
//             // Fetch user data if the user is authenticated
//             const userDoc = await getDoc(doc(db, "users", user.uid));
            
//             if (userDoc.exists()) {
//               setUserData(userDoc.data());
//               console.log("Fetched User Data:", userDoc.data());
//             } else {
//               throw new Error("No such document!");
//             }
//           } catch (error) {
//             console.error("Error fetching user data:", error);
//             setError(error.message);
//           }
//         } else {
//           setUserData(null); // User is not authenticated, reset user data
//           setError("User not authenticated");
//         }
//         setLoading(false);  // Set loading to false after attempting to fetch data
//       });
  
//       return () => unsubscribe(); // Cleanup the listener on unmount
//     }, []);
// const testUserId = "02oqywNZOoS8OfBDZoZ1R5d7Ntm2"; // Replace with an actual user ID
// const userDoc = await getDoc(doc(db, "users", testUserId));
// console.log("User Document Exists?", userDoc.exists());
// if (userDoc.exists()) {
//     console.log("Fetched User Data:", userDoc.data());
// } else {
//     console.log("No such document!");
// }


// Function to get all users
// export async function getAllUsers() {
//     return users;
// }

export async function authenticateUser(email, password) {
    // Simulate an async operation, like a database call
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = users.find((user)=>user.email === email && user.password === password)
            // console.log("user", user);
            if (user) {
                resolve(user);
            } else {
                reject(new Error("No user with those credentials found!"));
            }
        }, 1000); // Simulate a delay
    });
}



