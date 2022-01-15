import React,{useState} from "react";
import "../styles/header.css";
import sortIcon from "../assets/sort.svg"
import arrowIcon from "../assets/arrow.svg";
import calenderIcon from "../assets/calenderIcon.svg";
import searchIcon from "../assets/search.svg";
import addIcon from "../assets/add.svg";
import GoodHabit from "../assets/GoodHabit.svg";
import { DropdownData,newHabitData,logMoodData } from "./HeaderData";
function Header() {
  const [sortText, setsortText] = useState("Alphabetical");
  const [visibilty, setvisiblity] = useState("hidden");
  const handleSortButton=(option)=>{
    setsortText(option)
  }
  const handleDropdown=()=>{
    // console.log(visibilty)
    const visible=(visibilty === "hidden" ? "visible" : "hidden") 
    setvisiblity(visible)
    // console.log(visibilty)
  }
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
              onClick={() => handleDropdown()}
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
            <button type="button" className="button primary">
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
      <div>
        <ul
          role="list"
          className="Sortdropdown"
          style={{ visibility: visibilty }}
        >
          {DropdownData.map((val, key) => {
            return (
              <div class="list-item">
                <div class="list-selected"></div>
                <div class="list-title">
                  <p
                    class="list-text"
                    onClick={() => handleSortButton(val.title)}
                  >
                    {val.title}
                  </p>
                </div>
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        <ul
          role="list"
          className="newDropdown Sortdropdown"
          style={{ visibility: "visible" }}
        >
          <div className="habits">
            {newHabitData.map((val, key) => {
              return (
                <div class="list-item">
                  <div class="list-selected">{val.icon}</div>
                  <div class="list-title">
                    <p
                      class="list-text"
                      onClick={() => handleSortButton(val.title)}
                    >
                      {val.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mood">
            {logMoodData.map((val, key) => {
              return (
                <div class="list-item">
                  <div class="list-selected">{val.icon}</div>
                  <div class="list-title">
                    <p
                      class="list-text"
                      onClick={() => handleSortButton(val.title)}
                    >
                      {val.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </ul>
      </div>
    </div>
  );
}
export default Header;
