import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SidebarData, SidebarAreas, Preferences } from "@config/SidebarData.js";
import { logout } from "@database/firebase";
import "Components/Sidebar/sidebar.css";
function Sidebar() {
  const [lightTheme, setLightTheme] = useState(false);
  const [SignOutvisibility, setvisibility] = useState(false);
  const [zIndex, setZIndex] = useState("popUp");
  const [ThemezIndex, setThemezIndex] = useState("themeDrop");
  var signoutClassName = "sign-out";
  SignOutvisibility
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
    SignOutvisibility
      ? setThemezIndex("themeDrop")
      : setThemezIndex("themeDrop-zindex");
    setvisibility(!SignOutvisibility);
  };
  const handleDropdown = () => {
    SignOutvisibility ? setZIndex("popUp") : setZIndex("popUp-zIndex");
    setvisibility(!SignOutvisibility);
  };
  const changeTheme = () => {
    console.log(lightTheme);
    if (lightTheme) {
      console.log("sjgdh");
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
          <div className={zIndex}>
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
                  <div className={ThemezIndex}>
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
                      <div
                        className="label bottom"
                        onClick={() => handleSignOut()}
                      >
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
