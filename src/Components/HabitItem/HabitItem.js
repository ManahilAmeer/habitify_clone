import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import {
  HabitDropdownData,
  CategoryDropdownData,
} from "@config/HabitDropdownData";
import QMark from "@assets/QMark.svg";
import tick from "@assets/tick.svg";
import addIcon from "@assets/add.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function HabitItem(props) {
  var id = "";
  if (props.habits[props.selectedKey]) {
    id = props.habits[props.selectedKey]["id"];
  }
  var dropdownData;
  props.visible
    ? (dropdownData = HabitDropdownData)
    : (dropdownData = CategoryDropdownData);

  return (
    <>
      {props.habits.map((habit, key) => {
        return (
          <div key={key} className="habit">
            <div className="habit-icon">
              <div className="habit-progress">
                <svg viewBox="0 0 100 100" className="circle">
                  <circle cx="50" cy="50" r="42" className="track"></circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    className="indicator"
                    style={props.style}
                  ></circle>
                </svg>
                <div className="habit-symbol">
                  <img src={QMark} alt="Question Mark"></img>
                </div>
              </div>
            </div>
            <div className="habit-info">
              <div>
                <p className="habit-name">{habit.Name}</p>
                <div className="habit-times">
                  <p className="times-text">
                    {habit.completed} / {habit.goal} times
                  </p>
                </div>
              </div>
              {habit.goal === 1 && props.visible && (
                <>
                  <div
                    className="habit-done"
                    onClick={() => props.changeCompleted(habit.goal, key)}
                  >
                    <div className="done-icon">
                      <div className="icon-img">
                        <img src={tick} alt="tick"></img>
                      </div>
                      <p className="done-text">Done</p>
                    </div>
                  </div>
                </>
              )}
              {habit.goal !== 1 && props.visible && (
                <>
                  <div
                    className="habit-done"
                    onClick={() => props.changeCompleted(habit.goal, key)}
                  >
                    <div className="done-icon">
                      <div className="icon-img">
                        <img src={addIcon} alt="tick"></img>
                      </div>
                      <p className="done-text">1</p>
                    </div>
                  </div>
                </>
              )}
              <Dropdown
                onClick={() => {
                  props.handleMore(key);
                }}
              >
                <Dropdown.Toggle className="more" variant="secondary" noCaret>
                  <MoreVertIcon className="more-icon"></MoreVertIcon>
                </Dropdown.Toggle>
                <Dropdown.Menu className="habitDropdown">
                  <div className="habit-content">
                    <div className="dropdown-container">
                      <div className="dropdown-options">
                        {dropdownData.map((val, key) => {
                          return (
                            <div
                              key={key}
                              className="habit-item"
                              onClick={() =>{if(val.title=="Edit"){console.log("Kro Edit")}
                              else{
                                props.updateCat(id, val.title, key)
                              }}}
                            >
                              <div className="item-icon">
                                <div className="icon-container">{val.icon}</div>
                              </div>
                              <div className="item-text">
                                <p className="text-style">{val.title}</p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        );
      })}
    </>
  );
}
HabitItem.propTypes = {
  habits: PropTypes.array.isRequired,
  style: PropTypes.object.isRequired,
  visible: PropTypes.bool.isRequired,
  changeCompleted: PropTypes.func.isRequired,
  handleMore: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

HabitItem.defaultProps = {
  habits: [],
  id: "",
  style: {
    strokeDasharray: "0 264",
  },
  visible: true,
  changeCompleted: () => {},
  handleMore: () => {},
};
export default HabitItem;