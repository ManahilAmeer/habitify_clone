import React, { useState } from "react";
import PropTypes from "prop-types";
import { dropdownData, newHabitData, logMoodData } from "config/HeaderData";
import "Components/HeaderDropdown/headerdropdown.css";
import NewHabit from "views/NewHabitForm/NewHabit";
function HeaderDropdown({
  sortvisibility,
  habitvisibility,
  handleSortButton,
  handleHabitDropdown,
}) {
  var sortClassName = "Sortdropdown";
  var habitClassName = "newDropdown Sortdropdown";
  sortvisibility
    ? (sortClassName = "Sortdropdown-visible")
    : (sortClassName = "Sortdropdown");
  habitvisibility
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
        <ul className={sortClassName}>
          {dropdownData.map((val) => {
            return (
              <div key={val.id} className="list-item">
                <div className="list-title">
                  <p
                    className="list-text"
                    onClick={() => handleSortButton(val.title)}
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
        <ul className={habitClassName}>
          <div className="habits">
            {newHabitData.map((val, key) => {
              return (
                <div
                  key={val.id}
                  className="list-item"
                  onClick={() => {
                    handleHabitButton(val.title);
                    handleHabitDropdown();
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
            {logMoodData.map((val) => {
              return (
                <div key={val.id} className="list-item">
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
  sortvisibility: PropTypes.bool,
  habitvisibility: PropTypes.bool,
  handleSortButton: PropTypes.func.isRequired,
  handleHabitDropdown: PropTypes.func.isRequired,
};
HeaderDropdown.defaultProps = {
  sortvisibility: false,
  habitvisibility: false,
};
export default HeaderDropdown;
