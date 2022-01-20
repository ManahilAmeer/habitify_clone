import React,{useState} from "react";
import "../styles/header.css";
import sortIcon from "../assets/sort.svg"
import arrowIcon from "../assets/arrow.svg";
import calenderIcon from "../assets/calenderIcon.svg";
import searchIcon from "../assets/search.svg";
import addIcon from "../assets/add.svg";
import HeaderDropdown from "./HeaderDropdown";
function Header() {
  const [sortText, setsortText] = useState("Alphabetical");
  const [Sortvisibility, setSortvisiblity] = useState("hidden");
  const [Habitvisibility, setHabitvisibility] = useState("hidden");
  const handleSortButton = (option) => {
    setsortText(option);
  };
 const handleSortDropdown = () => {
   const visible = Sortvisibility === "hidden" ? "visible" : "hidden";
   setSortvisiblity(visible);
 };
 const handleHabitDropdown = () => {
   const visible = Habitvisibility === "hidden" ? "visible" : "hidden";
   setHabitvisibility(visible);
 };
  return (
    <div className="header">
      <div className="navb">
        <div className="title">All Habits</div>
        <div className="options">
          <div className="Buttondiv" role="button">
            <img width="16" height="16" src={searchIcon} alt="My Happy SVG" />
          </div>
          <div>
            <button type="button" className="button">
              <img
                width="14"
                height="14"
                className="icon"
                src={calenderIcon}
                alt="My Happy SVG"
              />
              Today
              <span className="arrow">
                <img
                  width="16"
                  height="16"
                  src={arrowIcon}
                  alt="My Happy SVG"
                />
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="button sort"
              onClick={() => handleSortDropdown()}
            >
              <span className="icon">
                <img width="16" height="16" src={sortIcon} alt="My Happy SVG" />
              </span>
              {sortText}
              <span className="arrow">
                <img
                  width="16"
                  height="16"
                  src={arrowIcon}
                  alt="My Happy SVG"
                />
              </span>
            </button>
          </div>
          <div>
            <button
              type="button"
              className="button primary"
              onClick={() => handleHabitDropdown()}
            >
              <span className="icon">
                <img width="12" height="12" src={addIcon} alt="My Happy SVG" />
              </span>
              Add Habits
              <span className="arrow">
                <img
                  width="16"
                  height="16"
                  src={arrowIcon}
                  alt="My Happy SVG"
                />
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
