import { redirect } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase";


import axios from "axios";




// export async function requireAuth(request) {
//   try {
//     // Extract the pathname for redirect purposes
//     const pathname = new URL(request.url).pathname;

//     // Make a GET request to verify the user's token
//     const response = await axios.get("https://techkrontech.com/api/auth/verify-token", {
//       withCredentials: true, // Include cookies in the request
//     });

//     // Check if the token is valid
//     if (response.status === 200 && response.data?.user) {
//       return response.data.user; // Return the authenticated user
//     } else {
//       throw new Error("User is not authenticated");
//     }
//   } catch (error) {
//     console.error("Authentication required:", error);

//     // Redirect to the login page if authentication fails
//     const redirectTo = new URL(request.url).pathname;
//     throw redirect(`/login?message=Please log in to access this feature.&redirectTo=${redirectTo}`);
//   }
// }


export async function requireAuth(request) {
  const pathname = new URL(request.url).pathname;
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Check if the email domain is "unn.edu.ng"
        if (!user.email.endsWith("@unn.edu.ng")) {
          reject(
            redirect(
              "/login?message=You must log in with a UNN email to access this feature."
            )
          );
        } else {
          resolve(true);
        }
      } else {
        reject(
          redirect(
            `/login?message=You must log in to access this feature.&redirectTo=${pathname}`
          )
        );
      }
    });
  });
}



