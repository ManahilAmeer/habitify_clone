import React, { useState } from "react";
import PropTypes from "prop-types";

import { DropdownData, newHabitData, logMoodData } from "@config/HeaderData";
import "@components/HeaderDropdown/Headerdropdown.css";
import NewHabit from "@views/NewHabitForm/NewHabit";
function HeaderDropdown(props) {
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
  Sortvisibility: PropTypes.string.isRequired,
  Habitvisibility: PropTypes.string.isRequired,
  handleSortButton: PropTypes.func.isRequired,
  handleHabitDropdown: PropTypes.func.isRequired,
};

HeaderDropdown.defaultProps = {
  Sortvisibility: "",
  Habitvisibility: "",
  handleSortButton: () => {},
  handleHabitDropdown: () => {},
};
export default HeaderDropdown;
