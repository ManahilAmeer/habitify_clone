import React, { useState } from "react";
import PropTypes from "prop-types";

import { DropdownData, newHabitData, logMoodData } from "@config/HeaderData";
import "Components/HeaderDropdown/Headerdropdown.css";
import NewHabit from "views/NewHabitForm/NewHabit";
function HeaderDropdown(props) {
  var sortClassName = "Sortdropdown";
  var habitClassName = "newDropdown Sortdropdown";
  props.Sortvisibility
    ? (sortClassName = "Sortdropdown-visible")
    : (sortClassName = "Sortdropdown");
  props.Habitvisibility
    ? (habitClassName = "newDropdown Sortdropdown-visible")
    : (habitClassName = "newDropdown Sortdropdown");
  const [flag, setFlag] = useState(false);
  const handleHabitButton = (title) => {
    if (title === "Create Good Habit") {
      setFlag(!flag);
    }
  };
  return (
    <div>
      <div>
        <ul
          className={sortClassName}
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
          className={habitClassName}
        >
          <div className="habits">
            {newHabitData.map((val, key) => {
              return (
                <div
                  key={key}
                  className="list-item"
                  onClick={() => {
                    handleHabitButton(val.title);
                    props.handleHabitDropdown();
                  }}
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
                    <p className="list-text">{val.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
      {flag && <NewHabit handleHabitButton={handleHabitButton} />}
    </div>
  );
}
HeaderDropdown.propTypes = {
  Sortvisibility: PropTypes.bool.isRequired,
  Habitvisibility: PropTypes.bool.isRequired,
  handleSortButton: PropTypes.func.isRequired,
  handleHabitDropdown: PropTypes.func.isRequired,
};

HeaderDropdown.defaultProps = {
  Sortvisibility: false,
  Habitvisibility: false,
  handleSortButton: () => {},
  handleHabitDropdown: () => {},
};
export default HeaderDropdown;
