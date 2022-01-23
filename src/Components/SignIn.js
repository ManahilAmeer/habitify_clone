// import React from "react";
import "../App.css";
import habitifyIcon from "../assets/habitify.png";
import GoogleIcon from "../assets/google.svg";
import "../styles/signIn.css";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import {
  auth,
  signInWithGoogle,
} from "../Components/firebase";
function Sidebar() {

  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) {
      navigate("/app");};
  }, [user, loading]);
  return (
    <>
      <div className="content">
        <div className="signIn-container">
          <img src={habitifyIcon} className="img"></img>
          <p className="heading">Welcome to Habitify</p>
          <p className="subheading">
            Sign in to your account and start building good habits with Habitify
          </p>
          <div className="buttons">
            <div className="google" onClick={signInWithGoogle}>
              <img src={GoogleIcon} className="google-img"></img>
              <p className="google-text">Sign In with Google</p>
            </div>
            <div className="space"></div>
            <div className="Apple">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14px"
                height="18px"
                viewBox="0 0 16 20"
              >
                <path
                  d="M13.623,10.627a4.526,4.526,0,0,1,2.159-3.808,4.668,4.668,0,0,0-3.657-1.982c-1.557-.158-3.039.917-3.83.917s-2.008-.894-3.3-.87A4.891,4.891,0,0,0,.86,7.39C-.9,10.45.408,14.985,2.127,17.467c.84,1.215,1.842,2.58,3.157,2.53,1.266-.05,1.745-.819,3.276-.819s1.962.82,3.3.8c1.363-.026,2.226-1.239,3.06-2.457a11.059,11.059,0,0,0,1.386-2.845,4.415,4.415,0,0,1-2.684-4.045ZM11.105,3.194A4.406,4.406,0,0,0,12.145,0,4.479,4.479,0,0,0,9.2,1.515,4.192,4.192,0,0,0,8.138,4.609,3.709,3.709,0,0,0,11.1,3.194Z "
                  fill="#FFF"
                />
              </svg>
              <p className="apple-text">Sign In with Apple</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
