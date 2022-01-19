import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData.js";
import { SidebarAreas } from "./SidebarData.js";
import "../styles/sidebar.css";
import { Preferences } from "./SidebarData";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";
function Sidebar() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <>
      {/* <div className="header">sdfdf</div> */}
      <div className="Sidebar">
        <div className="SideList">
          <div className="user">
            <img src={user.photoURL} className="user-img"></img>
            <p className="user-text">{user.displayName}</p>
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
              );})}
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
