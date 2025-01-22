import { redirect } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase/firebase";

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
