import React, { useState } from "react";
import PropTypes from "prop-types";
import Dropdown from "react-bootstrap/Dropdown";
import {
  HabitDropdownData,
  CategoryDropdownData,
} from "config/HabitDropdownData";
import QMark from "assets/QMark.svg";
import tick from "assets/tick.svg";
import addIcon from "assets/add.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditHabit from "views/EditHabitForm/EditHabit";
import NewHabit from "views/NewHabitForm/NewHabit";
function HabitItem({
  arr,
  visible,
  changeCompleted,
  handleMore,
  updateCat,
  handleProgress,
}) {
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
  let dropdownData;
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
                  <circle cx="50" cy="50" r="42" className="indicator"></circle>
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
                    habit.SkipLength,
                    habit.streak,
                    habit.total
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
                        habit.id,
                      )
                    }
                  >
                    <div className="done-icon">
                      <div className="icon-img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 32 32"
                        >
                          <path
                            d="M13.0407 26C12.7649 26.0006 12.4917 25.9468 12.2368 25.8419C11.9819 25.7369 11.7503 25.5828 11.5553 25.3884L2.64248 16.5013C2.44168 16.3082 2.28145 16.0772 2.17116 15.8217C2.06086 15.5662 2.00271 15.2914 2.00009 15.0133C1.99747 14.7352 2.05044 14.4594 2.1559 14.2019C2.26136 13.9444 2.41721 13.7105 2.61434 13.5137C2.81148 13.3169 3.04595 13.1612 3.30409 13.0557C3.56223 12.9502 3.83886 12.897 4.11783 12.8992C4.39681 12.9014 4.67256 12.959 4.92897 13.0686C5.18539 13.1782 5.41735 13.3376 5.61131 13.5375L13.0386 20.9417L26.412 7.61412C26.806 7.2211 27.3404 7.0002 27.8978 7C28.4551 6.9998 28.9897 7.22033 29.384 7.61308C29.7782 8.00582 29.9998 8.5386 30 9.09422C30.0002 9.64984 29.779 10.1828 29.385 10.5758L14.5262 25.3884C14.3312 25.5828 14.0995 25.7369 13.8446 25.8419C13.5897 25.9468 13.3165 26.0006 13.0407 26Z"
                            fill="var(--icon-color)"
                          />
                        </svg>
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
                        // habit.goal,
                        // habit.completed,
                        habit.id,
                        // habit.goal
                      )
                    }
                  >
                    <div className="done-icon">
                      <div className="icon-img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
                            fill="var(--icon-color)"
                          />
                        </svg>
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
                                } else if (val.title === "View Progress") {
                                  handleProgress(
                                    habit.Name,
                                    habit.CompleteLength,
                                    habit.FailLength,
                                    habit.SkipLength,
                                    habit.streak,
                                    habit.total
                                  );
                                } else {
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
  arr: PropTypes.array.isRequired,
  updateCat: PropTypes.func,
  visible: PropTypes.bool,
  changeCompleted: PropTypes.func.isRequired,
  handleMore: PropTypes.func.isRequired,
  handleProgress: PropTypes.func.isRequired,
};

HabitItem.defaultProps = {
  visible: true,
  updateCat:()=>{},
  
};
export default HabitItem;
