import React from "react";
import "../App.css";
import { SidebarData } from "./SidebarData.js";
import { SidebarAreas } from "./SidebarData.js";
import "../styles/sidebar.css";
import {Preferences} from './SidebarData'
function Sidebar() {
  return (
    <>
      {/* <div className="header">sdfdf</div> */}
      <div className="Sidebar">
        <ul className="SideList">
          {SidebarData.map((val, key) => {
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
          })}
          <li className="MenuType">AREAS</li>
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
          })}
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
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
