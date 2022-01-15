import React from "react";
import { Button } from "react-bootstrap";
import "../styles/start.css";
import MainNavbar from "./Navbar";
import { useNavigate } from "react-router-dom";

const Hello = () => {
  const history = useNavigate();
  const handleClick = () => history.push("/app");
};
function Start() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/app");
    console.log(navigate);
  };
  return (
    <>
      <MainNavbar></MainNavbar>
      <main className="hero">
        <div className="container">
          {/* <div className="tagline"> */}
          <h1 className="text">Build Golden Habits, Unlock your Potential</h1>
          {/* </div> */}
          <div className="subtitle">
            {/* <text> */}
            Focus on what truly matters with Habitify. Build the best version of
            yourself by mastering your habits.
            {/* </text> */}
          </div>
          <div onClick={handleClick} className="button-link">
            Get Started
          </div>
        </div>
      </main>
    </>
  );
}
export default Start;
