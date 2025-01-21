import { getAllData } from '../api';
import { requireAuth } from './Authentication/utility';
import { redirect } from "react-router-dom"
import { createUserWithEmailAndPassword, 
        sendEmailVerification, 
        signInWithEmailAndPassword, 
        signOut
      } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import { auth } from "../Firebase/firebase";


export async function loader({ request }) {
    
        await requireAuth(request)
        // Fetch the data
        const services = await getAllData();
        
        // Optionally return the product data if needed elsewhere
        return services;
}

export async function serviceloader() {
    
  // await requireAuth(request)
  // Fetch the data
  const services = await getAllData();
  
  // Optionally return the vans data if needed elsewhere
  return services;
}

export async function serviceDetailLoader({ params, request }) {
  // Ensure user is authenticated
    await requireAuth(request);

    const serviceId = params.id;
    const servicesData = await getAllData();

  // Find the specific service
  const service = servicesData.find(service => service.id === +serviceId);
  if (!service) {
    throw new Error("Service not found");
  }

  return service;
}

// New loader that extracts "message" from the request URL
export function messageLoader({ request }) {
    const message = new URL(request.url).searchParams.get("message");
    return message || null; // Ensure it returns a value or null
}


// Firebase configuration
const db = getFirestore();


// Action function to handle sign-up
export async function action({ request }) {
  const formData = await request.formData();
  const firstname = formData.get('firstname');
  const lastname = formData.get('lastname');
  const email = formData.get('email');
  const password = formData.get('password');
  const confirmPassword = formData.get('confirmPassword');

  // Basic validation
  if (password !== confirmPassword) {
    return { error: 'Passwords do not match!' };
  }

    // Check if the email ends with @unn.edu.ng
    if (!email.endsWith('@unn.edu.ng')) {
      return { error: 'Sign Up UNN email (e.g  Mbagwu.Chiemerie.123456@unn.edu.ng)' };
    }

  try {
     // 1. Create the user with email and password
     const userCredential = await createUserWithEmailAndPassword(auth, email, password);
     const user = userCredential.user;
 
     // 2. Send the verification email
     await sendEmailVerification(user);
 
     // 3. Create a new document in Firestore's users collection
    const userData = {
      createdAt: new Date(),
      email: user.email,
      firstname,
      lastname,
      accounttype: "User",  // Initially, the user is not verified
      profilePicUrl: "",
      verified: false
    };
 
     // Add user ID to the document
    userData.userID = user.uid;
    await setDoc(doc(db, "users", user.uid), userData);
     
    // 4. Redirect to the login page with a message to verify email
     return redirect("/login?message=Before proceeding, please check your email for verification link.");
    //  return redirect("/login?message=Please verify your email before signing in.");
   
  } catch (error) {
    console.error("Error during sign-up:", error);
    // Return an error if something goes wrong
    
    return { error: error.message }; // Return error if sign-up fails
  }
}



// Action function to handle sign-in
export async function signinAction({ request }) {
  const formData = await request.formData();
  const email = formData.get('email');
  const password = formData.get('password');
  const pathname = new URL(request.url).searchParams.get("redirectTo") || "/dashboard";
  console.log(pathname);

  try {
    // 1. Sign in the user with email and password
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // 2. Check if the user's email is verified
    if (!user.emailVerified) {
      // If email is not verified, log out the user and return an error
      await signOut(auth);
      return { error: 'Please verify your email before signing in.' };
    }

    // 3. If email is verified, proceed to login
    return redirect(pathname); // Redirect to your dashboard or home page

  } catch (error) {
    console.error('Error during sign-in:', error);
    // Return an error if sign-in fails
    return { error: error.message };
  }
}

