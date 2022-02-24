import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSANGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    await db.collection("users").where("uid", "==", user.uid).get();
  } catch (err) {
    alert(err.message);
  }
};
const logout = () => {
  auth.signOut();
};
export const habitsRef = (uid) => {
  return db.collection("habit").where("uid", "==", uid);
};
export const habitDocRef = (id) => {
  return db.collection("habit").doc(id);
};
export const progressDocRef = (id) => {
  return db.collection("progress").doc(id);
};
export {
  auth,
  db,
  signInWithGoogle,
  logout,
};
