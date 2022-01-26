import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { SidebarData,SidebarAreas } from "@components/config/SidebarData.js";
import { logout } from "@views/firebase";

import "@styles/sidebar.css";

function Sidebar() {
  const [visibility, setvisibility] = useState("hidden");
  const [zIndex,setZIndex]=useState(0)
  const navigate=useNavigate()
  const photoURL=useSelector((state)=>state.photoURL)
  const displayName = useSelector((state) => state.displayName);
  const handleSignOut=()=>{
    navigate("/");
    logout();
  }
  const handleDropdown = () => {
    const visible = visibility === "hidden" ? "visible" : "hidden";
    const Z = visibility === "hidden" ? 10 : 0;
    setvisibility(visible);
    setZIndex(Z);
  }; 
  return (
    <>
      <div className="Sidebar">
        <div className="SideList">
          <div className="user" onClick={() => handleDropdown()}>
            <img src={photoURL} className="user-img" alt="user"></img>
            <p className="user-text">{displayName}</p>
          </div>
          <div className="popUp" style={{ zIndex: zIndex }}>
            <div className="sign-out" style={{ visibility: visibility }}>
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
