import { getAuth } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { getUserData } from "../../api";
import { requireAuth } from "../Authentication/utility";

const db = getFirestore();

export async function userLoader({ request }) {
  await requireAuth(request);

  // Ensure user is authenticated
  const auth = getAuth();
  const userId = auth.currentUser?.uid;

  if (!userId) {
    throw new Error("User not authenticated");
  }

  // Fetch all user data
  const usersData = await getUserData();
  // console.log(usersData);

  // Find the specific user by ID
  const user = usersData.find((user) => user.id === userId);
  // console.log(user);
  if (!user) {
    throw new Error("User not found");
  }
  // Include role information in the returned user object
  return { ...user, role: user.role };
  // return user;
}
