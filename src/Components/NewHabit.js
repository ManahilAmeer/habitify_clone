import React from "react";
import QMark from "../assets/QMark.svg"
import "../styles/newHabit.css";
function NewHabit(props) {
  return (
    <>
      <div
        className="tab"
        // onClick={() => props.handleHabitButton("Create Good Habit")}
      >
        <div className="tab-content">
          <header className="content-header">New Habit</header>
          <div className="create-form">
            <div className="name">
              <p className="name-text">NAME</p>
              <div className="name-input">
                <div className="input-grp">
                  <input className="input"></input>
                </div>
                <div>
                  <button className="name-btn">
                    <img src={QMark} alt="Question Mark"></img>
                  </button>
                </div>
              </div>
            </div>
            <div className="grid"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewHabit;
