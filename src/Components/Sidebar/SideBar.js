import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SidebarData,SidebarAreas } from "@config/SidebarData.js";
import { logout } from "@database/firebase";
import "Components/Sidebar/sidebar.css";
function Sidebar() {
  const [visibility, setvisibility] = useState(false);
  const [zIndex, setZIndex] = useState("popUp");
  var signoutClassName="sign-out"
  visibility ? (signoutClassName = "sign-out-visible") : (signoutClassName= "sign-out");
  const navigate=useNavigate()
  const photoURL=useSelector((state)=>state.users.photoURL)
  const displayName = useSelector((state) => state.users.displayName);
  const handleSignOut=()=>{
    navigate("/");
    logout();
  }
  const handleDropdown = () => {
    visibility ? setZIndex("popUp") : setZIndex("popUp-zIndex");
    setvisibility(!visibility);
  }; 
  return (
    <>
      <div className="Sidebar">
        <div className="SideList">
          <div className="user" onClick={() => handleDropdown()}>
            <img src={photoURL} className="user-img" alt="user"></img>
            <p className="user-text">{displayName}</p>
          </div>
          <div className={zIndex} 
          >
            <div className={signoutClassName} >
              <div className="label">
                <p className="label-text">Profile</p>
              </div>
              <div className="label bottom" onClick={() => handleSignOut()}>
                <p className="label-text">Sign Out</p>
              </div>
            </div>
          </div>
          <div className="option">
            <div className="one">
              {SidebarData.map((val, key) => {
                return (
                  <a key={key} className="sidebar-link">
                    <div className="item">
                      <div className="item-icon">{val.icon}</div>
                      <p className="item-title">{val.title}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
          <li className="MenuType">AREAS</li>
          {SidebarAreas.map((val, key) => {
            return (
              <a key={key} className="sidebar-link">
                <div className="item">
                  <div className="item-icon">{val.icon}</div>
                  <p className="item-title">{val.title}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
