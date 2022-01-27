import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDZsGUnrUdoj9O6Yg6DpnXXsz0b8SYCoAI",
  authDomain: "habitify-d9ebc.firebaseapp.com",
  projectId: "habitify-d9ebc",
  storageBucket: "habitify-d9ebc.appspot.com",
  messagingSenderId: "213736257615",
  appId: "1:213736257615:web:f8e18b82fdd88cb033923a",
  measurementId: "G-NEQ76JYFNJ",
};
const app = firebase.initializeApp(firebaseConfig);
const auth = app.auth();
const db = app.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await auth.signInWithPopup(googleProvider);
    const user = res.user;
    await db
      .collection("users")
      .where("uid", "==", user.uid)
      .get();
  } catch (err) {
    alert(err.message);
  }
};
const fetchHabits = async (uid) => {
  try {
    const arr=[];
    const query = await (db.collection("habit").where("uid", "==", uid).get());
    query.forEach((doc)=>{
      arr.push(doc.data());
    })
    return arr;
  } catch (err) {
    alert(err.message);
  }
  
};
const addHabits = (name, goal,uid) => {
  
  try {
    db.collection("habit").add({ Name: name,goal:goal, uid: uid });
  } catch (err) {
    alert(err);
  }
};
const logout = () => {
  auth.signOut();
};
export { auth, db, signInWithGoogle, logout, addHabits, fetchHabits };
