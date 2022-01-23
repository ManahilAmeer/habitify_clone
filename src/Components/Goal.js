import React from "react";
import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow.svg";
import upDown from "../assets/upDown.svg";
import cross from "../assets/cross.svg";
import calender from "../assets/calenderGrey.svg"
import "../styles/goal.css"
function Goal() {
  return (
    <>
      <div className="grid">
        <div className="goal">
          <label className="goal-text">GOAL</label>
          <div className="goal-grid">
            <div className="goal-number">
              <input
                inputMode="decimal"
                pattern="[0-9]*(.[0-9]+)?"
                value="1"
                role="spinbutton"
                className="input number"
              ></input>
              <div className="arrows">
                <div className="up">
                  <img src={arrowUp} alt="Arrow up"></img>
                </div>
                <div className="up">
                  <img src={arrowDown} alt="Arrow up"></img>
                </div>
              </div>
            </div>
            <div className="goal-times">
              <input
                readOnly
                inputMode="text"
                value="Times"
                className="input times"
              ></input>
              <div className="arrowIcon">
                {/* <div> */}
                <img src={upDown} alt="Arrow"></img>
                {/* </div> */}
              </div>
            </div>
            <div className="goal-times">
              <input
                readOnly
                inputMode="text"
                value="Per Day"
                className="input times"
              ></input>
              <div className="arrowIcon">
                {/* <div> */}
                <img src={upDown} alt="Arrow"></img>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        <div className="goal">
          <label className="goal-text">REPEAT</label>
          <div className="goal-times">
            <input
              readOnly
              inputMode="text"
              value="Daily"
              className="input times"
            ></input>
            <div className="arrowIcon">
              {/* <div> */}
              <img src={upDown} alt="Arrow"></img>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="goal">
          <label className="goal-text">TIME OF DAY</label>
          <div className="goal-times">
            <input
              readOnly
              inputMode="text"
              value="Any Time"
              className="input times"
            ></input>
            <div className="arrowIcon">
              {/* <div> */}
              <img src={upDown} alt="Arrow"></img>
              {/* </div> */}
            </div>
          </div>
        </div>
        <div className="goal">
          <label className="goal-text">START DATE</label>
          <div className="goal-times">
            <input
              readOnly
              inputMode="text"
              value="Today"
              className="input times"
            ></input>
            <div className="arrowIcon">
              {/* <div> */}
              <img src={calender} alt="Arrow"></img>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
      <div className="reminder">
        <div className="goal">
          <div>
            <label className="goal-text">REMINDERS</label>
          </div>
          <div className="reminder-box">
            <span className="reminder-input">
              <span className="reminder-text">09:00</span>
              <div className="reminder-icon">
                <img src={cross} alt="cross"></img>
              </div>
            </span>
            <input disabled className="reminder-inputBox"></input>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default Goal;
