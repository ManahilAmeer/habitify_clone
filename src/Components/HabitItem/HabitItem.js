import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import {
  HabitDropdownData,
  CategoryDropdownData,
} from "config/HabitDropdownData";
import QMark from "@assets/QMark.svg";
import tick from "@assets/tick.svg";
import addIcon from "@assets/add.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditHabit from "@views/EditHabitForm/EditHabit";
import NewHabit from "views/NewHabitForm/NewHabit";
function HabitItem(props) {
  const {
    arr,
    visible,
    changeCompleted,
    handleMore,
    updateCat,
    handleProgress,
  } = props;
  const [flag, setFlag] = useState(false);
  const [name, setName] = useState("");
  const [ID, setID] = useState("");
  const [goal, setGoal] = useState(1);
  const handleButton = (name, id, goal) => {
    setName(name);
    setFlag(!flag);
    setID(id);
    setGoal(goal);
  };
  var dropdownData;
  visible
    ? (dropdownData = HabitDropdownData)
    : (dropdownData = CategoryDropdownData);
  return (
    <>
      {arr.map((habit, key) => {
        return (
          <div key={habit.id} className="habit">
            <div className="habit-icon">
              <div className="habit-progress">
                <svg viewBox="0 0 100 100" className="circle">
                  <circle cx="50" cy="50" r="42" className="track"></circle>
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    className="indicator"
                    // style={props.style}
                  ></circle>
                </svg>
                <div className="habit-symbol">
                  <img src={QMark} alt="Question Mark"></img>
                </div>
              </div>
            </div>
            <div className="habit-info">
              <div
                onClick={() =>
                  handleProgress(
                    habit.Name,
                    habit.CompleteLength,
                    habit.FailLength,
                    habit.SkipLength
                  )
                }
              >
                <p className="habit-name">{habit.Name}</p>
                <div className="habit-times">
                  <p className="times-text">
                    {habit.completed} / {habit.goal} times
                  </p>
                </div>
              </div>
              {habit.goal === 1 && visible && (
                <>
                  <div
                    className="habit-done"
                    onClick={() =>
                      changeCompleted(
                        habit.goal,
                        habit.completed,
                        habit.id,
                        habit.goal
                      )
                    }
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
              {habit.goal !== 1 && visible && (
                <>
                  <div
                    className="habit-done"
                    onClick={() =>
                      changeCompleted(
                        habit.goal,
                        habit.completed,
                        habit.id,
                        habit.goal
                      )
                    }
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
                  handleMore(key);
                }}
              >
                <Dropdown.Toggle className="more" variant="secondary">
                  <MoreVertIcon className="more-icon"></MoreVertIcon>
                </Dropdown.Toggle>
                <Dropdown.Menu className="habitDropdown">
                  <div className="habit-content">
                    <div className="dropdown-container">
                      <div className="dropdown-options">
                        {dropdownData.map((val) => {
                          return (
                            <div
                              key={val.id}
                              className="habit-item"
                              onClick={() => {
                                if (val.title === "Edit") {
                                  handleButton(
                                    habit.Name,
                                    habit.id,
                                    habit.goal
                                  );
                                } else if(val.title==="View Progress"){
                                  handleProgress(
                                    habit.Name,
                                    habit.CompleteLength,
                                    habit.FailLength,
                                    habit.SkipLength
                                  );
                                }
                                else {
                                  updateCat(habit.id, val.title);
                                }
                              }}
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
      {flag && (
        <EditHabit
          handleButton={handleButton}
          name={name}
          ID={ID}
          usergoal={goal}
        />
      )}
      ;
    </>
  );
}
HabitItem.propTypes = {
  habits: PropTypes.array.isRequired,
  updateCat: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  changeCompleted: PropTypes.func.isRequired,
  handleMore: PropTypes.func.isRequired,
  handleProgress: PropTypes.func.isRequired,
};

HabitItem.defaultProps = {
  habits: [],
  // id: "",
  // style: {
  //   strokeDasharray: "0 264",
  // },
  updateCat: () => {},
  visible: true,
  changeCompleted: () => {},
  handleMore: () => {},
  handleProgress: () => {},
};
export default HabitItem;
