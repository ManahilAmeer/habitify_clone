import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "database/firebase";
import {
  Routes,
  BrowserRouter as Router,
  Route,
  Navigate,
} from "react-router-dom";
import { changeHabits } from "store/habitsReducer";
import SignIn from "@views/Sign-in/SignIn";
import Home from "Components/Home/Home";
const Routers = () => {
  const [user, setUser] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(true);
        dispatch(changeHabits({uid:user.uid}));
        // setLoading(false);
        // dispatch(setUserId(user.uid));
        // dispatch(fetchHabits({uid:user.uid}));
        // dispatch(fetchSkips({ uid: user.uid}));
        // dispatch(fetchSuccess({ uid: user.uid }));
        // dispatch(fetchFail({ uid: user.uid }));
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
