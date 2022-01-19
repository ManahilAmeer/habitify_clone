import React, { useState } from "react";
import { DropdownData, newHabitData, logMoodData } from "./HeaderData";
import "../styles/dropdown.css"
function HeaderDropdown(props) {
  return (
    <div>
      <div>
        <ul
          role="list"
          className="Sortdropdown"
          style={{ visibility: props.Sortvisibility }}
        >
          {DropdownData.map((val, key) => {
            return (
              <div key={key} className="list-item">
                <div className="list-selected"></div>
                <div className="list-title">
                  <p
                    className="list-text"
                    onClick={() => props.handleSortButton(val.title)}
                  >
                    {val.title}
                  </p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        <ul
          role="list"
          className="newDropdown Sortdropdown"
          style={{ visibility: props.Habitvisibility }}
        >
          <div className="habits">
            {newHabitData.map((val, key) => {
              return (
                <div key={key} className="list-item">
                  <div className="list-selected">{val.icon}</div>
                  <div className="list-title">
                    <p
                      className="list-text"
                    >
                      {val.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mood">
            {logMoodData.map((val, key) => {
              return (
                <div key={key} className="list-item">
                  <div className="list-selected">{val.icon}</div>
                  <div className="list-title">
                    <p
                      className="list-text"
                      onClick={() => props.handleSortButton(val.title)}
                    >
                      {val.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}
export default  HeaderDropdown;
