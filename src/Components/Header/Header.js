import React, { useState } from "react";
import "Components/Header/header.css";
import sortIcon from "assets/sort.svg";
import arrowIcon from "assets/arrow.svg";
import calenderIcon from "assets/calenderIcon.svg";
import searchIcon from "assets/search.svg";
import addIcon from "assets/add.svg";
import { useSelector } from "react-redux";
import HeaderDropdown from "Components/HeaderDropdown/HeaderDropdown";
function Header() {
  const habits = useSelector((state) => state.habit.habit);
  const skips = useSelector((state) => state.habit.skips);
  const successes = useSelector((state) => state.habit.success);
  const fails = useSelector((state) => state.habit.fails);
  const search = (title) => {
    console.log(title);
  };
  const [sortText, setsortText] = useState("Alphabetical");
  const [visible, setVisible] = useState(false);
  const [Sortvisibility, setSortvisiblity] = useState(false);
  const [Habitvisibility, setHabitvisibility] = useState(false);
  const handleSortButton = (option) => {
    setsortText(option);
  };
  const handleSearch = () => {
    setVisible(!visible);
  };
  const handleSortDropdown = () => {
    setSortvisiblity(!Sortvisibility);
  };
  const handleHabitDropdown = () => {
    setHabitvisibility(!Habitvisibility);
  };
  return (
    <div className="header">
      <div className="navb">
        <div className="title">All Habits</div>
        <div className="options">
          <div className="Buttondiv" role="button">
            {/* <img
              onClick={() => handleSearch()}
              
              src={searchIcon}
              alt="My Happy SVG"
            /> */}
            <svg
              onClick={() => handleSearch()}
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 18.193 18.193"
            >
              <path
                d="M8,14A6,6,0,1,0,2,8a6,6,0,0,0,6,6Zm6.32-1.094,3.58,3.58A1,1,0,1,1,16.485,17.9l-3.58-3.58A8,8,0,1,1,14.319,12.9Z"
                fill="var(--icon-color)"
              />
            </svg>
            {visible && (
              <input
                type="text"
                placeholder="Search"
                className="search_input visible"
                onChange={(e) => {
                  search(e.target.value);
                }}
              ></input>
            )}
          </div>
          <div>
            <button type="button" className="button">
              <div className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
                  <path
                    d="M2.56767 2.62103V3.9684C2.56767 4.32574 2.7059 4.66845 2.95195 4.92113C3.19799 5.17381 3.53171 5.31576 3.87967 5.31576C4.22763 5.31576 4.56135 5.17381 4.80739 4.92113C5.05344 4.66845 5.19167 4.32574 5.19167 3.9684V2.62103H9.12767V3.9684C9.12767 4.32574 9.2659 4.66845 9.51195 4.92113C9.75799 5.17381 10.0917 5.31576 10.4397 5.31576C10.7876 5.31576 11.1213 5.17381 11.3674 4.92113C11.6134 4.66845 11.7517 4.32574 11.7517 3.9684V2.62103C12.2736 2.62103 12.7742 2.83396 13.1433 3.21298C13.5123 3.592 13.7197 4.10606 13.7197 4.64208V5.98945H0.59967V4.64208C0.59967 4.10606 0.807013 3.592 1.17608 3.21298C1.54516 2.83396 2.04572 2.62103 2.56767 2.62103ZM13.7197 7.33682V11.3789C13.7197 11.9149 13.5123 12.429 13.1433 12.808C12.7742 13.187 12.2736 13.4 11.7517 13.4H2.56767C2.04572 13.4 1.54516 13.187 1.17608 12.808C0.807013 12.429 0.59967 11.9149 0.59967 11.3789L0.59967 7.33682H13.7197ZM10.4397 0.599976C10.6137 0.599976 10.7805 0.670953 10.9035 0.797293C11.0266 0.923633 11.0957 1.09499 11.0957 1.27366V3.9684C11.0957 4.14707 11.0266 4.31842 10.9035 4.44476C10.7805 4.5711 10.6137 4.64208 10.4397 4.64208C10.2657 4.64208 10.0988 4.5711 9.97581 4.44476C9.85279 4.31842 9.78367 4.14707 9.78367 3.9684V1.27366C9.78367 1.09499 9.85279 0.923633 9.97581 0.797293C10.0988 0.670953 10.2657 0.599976 10.4397 0.599976V0.599976ZM3.87967 0.599976C4.05365 0.599976 4.22051 0.670953 4.34353 0.797293C4.46656 0.923633 4.53567 1.09499 4.53567 1.27366V3.9684C4.53567 4.14707 4.46656 4.31842 4.34353 4.44476C4.22051 4.5711 4.05365 4.64208 3.87967 4.64208C3.70569 4.64208 3.53883 4.5711 3.41581 4.44476C3.29278 4.31842 3.22367 4.14707 3.22367 3.9684V1.27366C3.22367 1.09499 3.29278 0.923633 3.41581 0.797293C3.53883 0.670953 3.70569 0.599976 3.87967 0.599976V0.599976Z"
                    fill="var(--icon-color)"
                  />
                </svg>
              </div>
              {!visible && <div className="button-text">Today</div>}
              {!visible && (
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M6 11L16.5 21L27 11H6Z" fill="var(--icon-color)" />
                  </svg>
                </span>
              )}
            </button>
          </div>
          <div>
            <button
              type="button"
              className="button"
              onClick={() => handleSortDropdown()}
            >
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path
                    d="M6.64928 4.04303C6.58998 3.97893 6.51842 3.92784 6.439 3.89293C6.35957 3.85801 6.27396 3.84 6.18744 3.84C6.10092 3.84 6.01531 3.85801 5.93589 3.89293C5.85647 3.92784 5.7849 3.97893 5.72561 4.04303L1.43234 9.03636C1.35441 9.12661 1.30374 9.23783 1.28642 9.35667C1.2691 9.4755 1.28586 9.59689 1.33469 9.70627C1.38352 9.81565 1.46235 9.90836 1.5617 9.97328C1.66105 10.0382 1.77671 10.0725 1.89479 10.0722H4.96018V27.552C4.96018 27.883 5.08942 28.2004 5.31946 28.4345C5.5495 28.6685 5.8615 28.8 6.18683 28.8C6.51216 28.8 6.82416 28.6685 7.0542 28.4345C7.28424 28.2004 7.41348 27.883 7.41348 27.552V10.0722H10.4801C10.5983 10.0728 10.7141 10.0386 10.8136 9.97372C10.9131 9.90882 10.9921 9.81598 11.0408 9.70644C11.0896 9.5969 11.1062 9.47533 11.0885 9.35642C11.0708 9.23752 11.0197 9.12635 10.9413 9.03636L6.64805 4.04303H6.64928ZM28.8798 20.0601H15.3867C14.371 20.0601 13.5467 20.9 13.5467 21.9321V23.1814C13.5467 24.2135 14.371 25.0534 15.3867 25.0534H28.8798C29.8943 25.0534 30.7198 24.2135 30.7198 23.1814V21.9334C30.7198 20.9 29.8943 20.0614 28.8798 20.0614V20.0601ZM15.3867 12.5695H19.0666C20.0811 12.5695 20.9066 11.7283 20.9066 10.6962V9.44821C20.9066 8.41485 20.0811 7.57493 19.0666 7.57493H15.3867C14.371 7.57493 13.5467 8.41485 13.5467 9.44696V10.6962C13.5467 11.7283 14.371 12.5683 15.3867 12.5683V12.5695ZM13.5467 16.9388V15.6908C13.5467 14.6574 14.371 13.8175 15.3867 13.8175H23.9732C24.9877 13.8175 25.8132 14.6574 25.8132 15.6896V16.9388C25.8132 17.9709 24.9877 18.8108 23.9732 18.8108H15.3867C14.371 18.8108 13.5467 17.9709 13.5467 16.9388Z"
                    fill="var(--icon-color)"
                  />
                </svg>
              </span>
              {!visible && <div>{sortText}</div>}
              {!visible && (
                <span className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M6 11L16.5 21L27 11H6Z" fill="var(--icon-color)" />
                  </svg>
                </span>
              )}
            </button>
          </div>
          <div>
            <button
              type="button"
              className="button primary"
              onClick={() => handleHabitDropdown()}
            >
              <span className="icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path
                    d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
                    fill="#ffffff"
                  />
                </svg>
              </span>
              Add Habits
              <span className="arrow">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                  <path d="M6 11L16.5 21L27 11H6Z" fill="var(--icon-color)" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </div>
      <HeaderDropdown
        handleHabitDropdown={handleHabitDropdown}
        Sortvisibility={Sortvisibility}
        handleSortButton={handleSortButton}
        Habitvisibility={Habitvisibility}
      />
    </div>
  );
}
export default Header;
