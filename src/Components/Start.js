import React,{useEffect} from "react";
import { Button } from "react-bootstrap";
import "../styles/start.css";
import MainNavbar from "./Navbar";
import { useNavigate } from "react-router-dom";


function Start() {
  useEffect(()=>{
    document.title="All Habits, Today - Habitify"
  })
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/sign-in");
    console.log(navigate);
  };
  return (
    <>
      <MainNavbar handleClick={handleClick}></MainNavbar>
      <main className="hero">
        <div className="container">
          {/* <div className="tagline"> */}
          <h1 className="text">Build Golden Habits, Unlock your Potential</h1>
          {/* </div> */}
          <div className="subtitle">
              Focus on what truly matters with Habitify. Build the best version
              of yourself by mastering your habits.
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
