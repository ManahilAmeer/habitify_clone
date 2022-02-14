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
            <div className='icon'>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 14 14"
                
              >
                <path
                  d="M2.56767 2.62103V3.9684C2.56767 4.32574 2.7059 4.66845 2.95195 4.92113C3.19799 5.17381 3.53171 5.31576 3.87967 5.31576C4.22763 5.31576 4.56135 5.17381 4.80739 4.92113C5.05344 4.66845 5.19167 4.32574 5.19167 3.9684V2.62103H9.12767V3.9684C9.12767 4.32574 9.2659 4.66845 9.51195 4.92113C9.75799 5.17381 10.0917 5.31576 10.4397 5.31576C10.7876 5.31576 11.1213 5.17381 11.3674 4.92113C11.6134 4.66845 11.7517 4.32574 11.7517 3.9684V2.62103C12.2736 2.62103 12.7742 2.83396 13.1433 3.21298C13.5123 3.592 13.7197 4.10606 13.7197 4.64208V5.98945H0.59967V4.64208C0.59967 4.10606 0.807013 3.592 1.17608 3.21298C1.54516 2.83396 2.04572 2.62103 2.56767 2.62103ZM13.7197 7.33682V11.3789C13.7197 11.9149 13.5123 12.429 13.1433 12.808C12.7742 13.187 12.2736 13.4 11.7517 13.4H2.56767C2.04572 13.4 1.54516 13.187 1.17608 12.808C0.807013 12.429 0.59967 11.9149 0.59967 11.3789L0.59967 7.33682H13.7197ZM10.4397 0.599976C10.6137 0.599976 10.7805 0.670953 10.9035 0.797293C11.0266 0.923633 11.0957 1.09499 11.0957 1.27366V3.9684C11.0957 4.14707 11.0266 4.31842 10.9035 4.44476C10.7805 4.5711 10.6137 4.64208 10.4397 4.64208C10.2657 4.64208 10.0988 4.5711 9.97581 4.44476C9.85279 4.31842 9.78367 4.14707 9.78367 3.9684V1.27366C9.78367 1.09499 9.85279 0.923633 9.97581 0.797293C10.0988 0.670953 10.2657 0.599976 10.4397 0.599976V0.599976ZM3.87967 0.599976C4.05365 0.599976 4.22051 0.670953 4.34353 0.797293C4.46656 0.923633 4.53567 1.09499 4.53567 1.27366V3.9684C4.53567 4.14707 4.46656 4.31842 4.34353 4.44476C4.22051 4.5711 4.05365 4.64208 3.87967 4.64208C3.70569 4.64208 3.53883 4.5711 3.41581 4.44476C3.29278 4.31842 3.22367 4.14707 3.22367 3.9684V1.27366C3.22367 1.09499 3.29278 0.923633 3.41581 0.797293C3.53883 0.670953 3.70569 0.599976 3.87967 0.599976V0.599976Z"
                  fill="var(--icon-color)"
                />
              </svg>
            </div>
            {/* <img
                
                
                src={calenderIcon}
                alt="Calendar"
              /> */}
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