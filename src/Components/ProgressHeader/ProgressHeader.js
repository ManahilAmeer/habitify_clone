import React from 'react'
import 'Components/ProgressHeader/progressHeader.css'
import FullScreen from "assets/FullScreen.svg";
import arrowIcon from "assets/arrow.svg";
import calenderIcon from "assets/calenderIcon.svg";
import Share from "assets/Share.svg";
import OpenNote from "assets/OpenNote.svg";
import edit from "assets/edit.svg";
import PropTypes from "prop-types";
function ProgressHeader(props) {
  const {habitName}=props;
  const today=new Date();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <>
        <div className="progress_header">
          <div className="title_div">
            <div className="progress_button" role="button">
              <img width="16" height="16" src={FullScreen} alt="My Happy SVG" />
            </div>
            <div className="title">{habitName}</div>
          </div>
          <div className="buttons-div">
            <button type="button" className="button calender">
              <img
                width="14"
                height="14"
                className="icon"
                src={calenderIcon}
                alt="Calendar"
              />
              {monthNames[today.getMonth()]}, {today.getFullYear()}
              <span className="arrow">
                <img width="16" height="16" src={arrowIcon} alt="Arrow" />
              </span>
            </button>
            <div className="progress_button" role="button">
              <img width="16" height="16" src={edit} alt="My Happy SVG" />
            </div>
            <div className="progress_button" role="button">
              <img width="16" height="16" src={Share} alt="My Happy SVG" />
            </div>
            <div className="progress_button" role="button">
              <img width="16" height="16" src={OpenNote} alt="My Happy SVG" />
            </div>
          </div>
        </div>
    </>
  );
}
ProgressHeader.prototype = {
  habitName: PropTypes.string,
};
export default ProgressHeader