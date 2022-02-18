import React,{useEffect} from "react";
import "@views/Landing/landing.css";
import MainNavbar from "@components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import path from "config/routes";

function Landing() {
  useEffect(()=>{
    document.title="All Habits, Today - Habitify"
  })
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(path.sign_in);
  };
  return (
    <>
      <MainNavbar handleClick={handleClick}></MainNavbar>
      <main className="hero">
        <div className="container">
          <h1 className="text">Build Golden Habits, Unlock your Potential</h1>
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
export default Landing;
