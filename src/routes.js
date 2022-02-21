import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "database/firebase";
import path from "config/routes";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import { changeHabits } from "store/habitsReducer";
import { addID, addPhoto, addDisplayName } from "store/usersReducer";
import SignIn from "@views/Sign-in/SignIn";
import Home from "Components/Home/Home";
const Routers = () => {
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        dispatch(addID(user.uid));
      dispatch(addDisplayName(user.displayName));
      dispatch(addPhoto(user.photoURL));
        dispatch(changeHabits({uid:user.uid}));
      } else {
        setUser(false);
      }
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={!user ? <SignIn /> : <Navigate to={path.app} />}
        />
        <Route
          exact
          path="/app"
          element={user ? <Home /> : <Navigate to={path.home} />}
        />
      </Routes>
    </Router>
  );
};
export default Routers;
