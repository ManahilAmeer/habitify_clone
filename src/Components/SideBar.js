import React, { useState } from "react";
// import "@App.css";

import { SidebarData } from "./SidebarData.js";
import { SidebarAreas } from "./SidebarData.js";
import "@styles/sidebar.css";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logout } from "./firebase";
import { useNavigate } from "react-router-dom";
function Sidebar() {
  const [visibility, setvisibility] = useState("hidden");
  const [zIndex,setZIndex]=useState(0)
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
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
      {/* <div className="header">sdfdf</div> */}
      <div className="Sidebar">
        <div className="SideList">
          <div className="user" onClick={() => handleDropdown()}>
            <img src={user.photoURL} className="user-img" alt="user"></img>
            <p className="user-text">{user.displayName}</p>
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
          {/* <div className="list"> */}

          {/* 
            
            {SidebarAreas.map((val, key) => {
              return (
                <li
                  key={key}
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                  className="SideListItem"
                >
                  <div className="icon">{val.icon}</div>
                  <div className="text">{val.title}</div>
                </li>
              );
            
            <li className="MenuType">PRERFERENCES</li>
            {Preferences.map((val, key) => {
              return (
                <li
                  key={key}
                  id={window.location.pathname === val.link ? "active" : ""}
                  onClick={() => {
                    window.location.pathname = val.link;
                  }}
                  className="SideListItem"
                >
                  <div className="icon">{val.icon}</div>
                  <div className="text">{val.title}</div>
                </li>
              );
            })} */}
        </div>
        {/* </ul> */}
      </div>
    </>
  );
}

export default Sidebar;
