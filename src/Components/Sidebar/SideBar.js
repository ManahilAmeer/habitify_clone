import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SidebarData, SidebarAreas, Preferences } from "@config/SidebarData.js";
import { logout } from "@database/firebase";
import "Components/Sidebar/sidebar.css";
function Sidebar() {
  const [lightTheme, setLightTheme] = useState(false);
  const [sign_outvisibility, setSign_outvisibility] = useState(false);
  const [z_index, setZ_index] = useState("popUp");
  const [theme, setTheme] = useState("themeDrop");
  let signoutClassName = "sign-out";
  sign_outvisibility
    ? (signoutClassName = "sign-out-visible")
    : (signoutClassName = "sign-out");
  const navigate = useNavigate();
  const photoURL = useSelector((state) => state.users.photoURL);
  const displayName = useSelector((state) => state.users.displayName);
  const handleSignOut = () => {
    navigate("/");
    logout();
  };
  const handleThemeDropdown = () => {
    sign_outvisibility ? setTheme("themeDrop") : setTheme("themeDrop-zindex");
    setSign_outvisibility(!sign_outvisibility);
  };
  const handleDropdown = () => {
    sign_outvisibility ? setZ_index("popUp") : setZ_index("popUp-zIndex");
    setSign_outvisibility(!sign_outvisibility);
  };
  const changeTheme = () => {
    if (lightTheme) {
      document.documentElement.style.setProperty("--dark-back", "#ffffff");
      document.documentElement.style.setProperty("--text-color", "#000000");
      document.documentElement.style.setProperty("--elements-color", "#ffffff");
      document.documentElement.style.setProperty("--icon-color", "#7b7c7c");
      document.documentElement.style.setProperty("--popUp-color", "#ffffff");
      document.documentElement.style.setProperty(
        "--popUp-text-color",
        "#000000B3"
      );
      document.documentElement.style.setProperty(
        "--border",
        "rgb(229, 228, 229)"
      );
    } else {
      document.documentElement.style.setProperty(
        "--dark-back",
        "rgb(23, 23, 23)"
      );
      document.documentElement.style.setProperty(
        "--text-color",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty(
        "--elements-color",
        "rgb(66, 66, 66)"
      );
      document.documentElement.style.setProperty(
        "--icon-color",
        "rgb(255, 255, 255)"
      );
      document.documentElement.style.setProperty(
        "--popUp-color",
        "rgb(50, 50, 50)"
      );
      document.documentElement.style.setProperty(
        "--popUp-text-color",
        "#ffffffb3"
      );
      document.documentElement.style.setProperty("--border", "rgb(74, 74, 74)");
    }
  };
  return (
    <>
      <div className="Sidebar">
        <div className="SideList">
          <div className="user" onClick={() => handleDropdown()}>
            <img src={photoURL} className="user-img" alt="user"></img>
            <p className="user-text">{displayName}</p>
          </div>
          <div className={z_index}>
            <div className={signoutClassName}>
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
              {SidebarData.map((val) => {
                return (
                  <a key={val.id} className="sidebar-link">
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
          {SidebarAreas.map((val) => {
            return (
              <a key={val.id} className="sidebar-link">
                <div className="item">
                  <div className="item-icon">{val.icon}</div>
                  <p className="item-title">{val.title}</p>
                </div>
              </a>
            );
          })}
          <li className="MenuType">THEME</li>
          {Preferences.map((val) => {
            return (
              <>
                <a key={val.id} className="sidebar-link">
                  <div className="item" onClick={() => handleThemeDropdown()}>
                    <div className="item-icon">{val.icon}</div>
                    <p className="item-title">{val.title}</p>
                  </div>
                  <div className={theme}>
                    <div className={signoutClassName}>
                      <div
                        className="label"
                        onClick={() => {
                          setLightTheme((s) => !s);
                          changeTheme();
                        }}
                      >
                        <p className="label-text">Light</p>
                      </div>
                      <div className="label bottom">
                        <p className="label-text">Dark</p>
                      </div>
                    </div>
                  </div>
                </a>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Sidebar;
