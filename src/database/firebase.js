import firebase from "firebase/compat/app";
import { collectionGroup, query, where, getDocs } from "firebase/firestore"; 
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
    const today = new Date();
    const date =
      today.getFullYear() +
      "-" +
      (today.getMonth() + 1) +
      "-" +
      today.getDate();
    var allHabits = query(
      collectionGroup(db, "habit"),
      where("category", "==", category),
      where("uid", "==", uid),
      // where("date","==",date)
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
const addHabits = (name, goal,uid,category,completed,date) => {
  try {
    var doc = db.collection("habit").doc();
    doc.set({
      Name: name,
      goal: goal,
      uid: uid,
      category: category,
      completed: completed,
      date:date
    }).then(()=>{
      console.log(doc.id);
    });
    doc.update({
      id:doc.id
    })
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
