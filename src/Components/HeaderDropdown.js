import React, { useState } from "react";
import { DropdownData, newHabitData, logMoodData } from "./HeaderData";
import "../styles/dropdown.css";
import NewHabit from "./NewHabit";
function HeaderDropdown(props) {
  const [flag, setFlag] = useState(false);
  const handleHabitButton = (title) => {
    if (title === "Create Good Habit") {
      props.handleHabitDropdown();
      setFlag(!flag);
    }
  };
  return (
    <div>
      <div>
        <ul
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
          className="newDropdown Sortdropdown"
          style={{ visibility: props.Habitvisibility }}
        >
          <div className="habits">
            {newHabitData.map((val, key) => {
              return (
                <div
                  key={key}
                  className="list-item"
                  onClick={() => handleHabitButton(val.title)}
                >
                  <div className="list-selected">{val.icon}</div>
                  <div className="list-title">
                    <p className="list-text">{val.title}</p>
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
      {flag && <NewHabit handleHabitButton ={handleHabitButton}/>}
    </div>
  );
}
export default HeaderDropdown;
