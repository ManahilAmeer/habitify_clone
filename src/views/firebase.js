import firebase from "firebase/compat/app";
import { collectionGroup, query, where, getDocs } from "firebase/firestore"; 
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
const fetchHabits = async (uid,category) => {
  try {
    const arr=[];
    var allHabits = query(
      collectionGroup(db, "habit"),
      where("category", "==", category),
      where("uid", "==", uid)
    );
    const querySnapshot=await getDocs(allHabits)
    querySnapshot.forEach((doc)=>{
      arr.push({
        id: doc.id,
        ...doc.data(),
      });
    })
    return arr;
  } catch (err) {
    alert(err.message);
  }
};
const addHabits = (name, goal,uid,category,completed) => {
  try {
    db.collection("habit").add({
      Name: name,
      goal: goal,
      uid: uid,
      category: category,
      completed: completed,
    });
  } catch (err) {
    alert(err);
    console.log(err)
  }
};
const updateCategory=(ID,category)=>{
  try{
    const data=db.collection("habit").doc(ID);
    data.update({
      category:category
    })
  }
  catch(err){
    alert(err)
  }
}
const updateCompleted = (ID, completed) => {
  try {
    const data = db.collection("habit").doc(ID);
    data.update({
      completed: completed,
    });
  } catch (err) {
    alert(err);
  }
};
const logout = () => {
  auth.signOut();
};
export { auth, db, signInWithGoogle, logout, addHabits, fetchHabits,updateCategory,updateCompleted };
