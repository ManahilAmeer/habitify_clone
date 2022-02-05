import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "database/firebase";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import Landing from "@views/Landing/Landing";
import SignIn from "@views/Sign-in/SignIn";
import Home from "Components/home/Home";
const Routers = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        // setLoading(false);
        // dispatch(setUserId(user.uid));
        // dispatch(getNotes(user.uid));
        // dispatch(getLabels(user.uid));
      } else {
        setUser(false);
        // setLoading(false);
      }
    });
  }, []);
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={!user ? <SignIn /> : <Navigate to="/app" />}
        />
        <Route
          exact
          path="/app"
          element={user ? <Home /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};
export default Routers;
