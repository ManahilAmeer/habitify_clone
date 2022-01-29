import React from 'react';
import QMark from "@assets/QMark.svg";
import tick from "@assets/tick.svg";
import addIcon from "@assets/add.svg";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function HabitItem(props) {
  return (
    <>
      {props.habits.map((habit, key) => {
        return (
          <div key={key} className="habit">
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
              <div>
                <p className="habit-name">{habit.Name}</p>
                <div className="habit-times">
                  <p className="times-text">
                    {habit.completed} / {habit.goal} times
                  </p>
                </div>
              </div>
              {habit.goal === 1 && (
                <>
                  <div className="habit-done">
                    <div className="done-icon">
                      <div className="icon-img">
                        <img src={tick} alt="tick"></img>
                      </div>
                      <p className="done-text">Done</p>
                    </div>
                  </div>
                </>
              )}
              {habit.goal !== 1 && (
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
              <button
                className="more"
                onClick={() => {
                  props.handleMore(key);
                }}
              >
                <MoreVertIcon></MoreVertIcon>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default HabitItem;
