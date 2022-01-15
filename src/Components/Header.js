import React from "react";
import "../styles/header.css";
import sortIcon from "../assets/sort.svg"
import arrowIcon from "../assets/arrow.svg";
import calenderIcon from "../assets/calenderIcon.svg";
import searchIcon from "../assets/search.svg";
import addIcon from "../assets/add.svg";
import GoodHabit from "../assets/GoodHabit.svg";

import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
// import { Menu } from "@mui/material";
import { Menu, Transition } from "@headlessui/react";
function Header() {
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
              {/* <span> */}
                <img
                  width="14"
                  height="14"
                  className="icon"
                  src={calenderIcon}
                  alt="My Happy SVG"
                />
              {/* </span> */}
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
            <button type="button" className="button">
              <span className="icon">
                <img width="16" height="16" src={sortIcon} alt="My Happy SVG" />
              </span>
              My Habits Order
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
        <ul role="list" className="Sortdropdown">
          <div className="SortList">Reminder Time</div>
          <li className="SortList">My Habit Order</li>
          <li className="SortList">Alphabetical</li>
        </ul>
      </div>
      <div>
        <ul role="list" className="newDropdown">
          <div className="newList">
            <div className="newIcon">
              <img width="16" height="16" src={GoodHabit} />
            </div>
            Reminder Time
          </div>

          <li className="newList">My Habit Order</li>
          <li className="newList">Alphabetical</li>
        </ul>
      </div>
    </div>
  );
}
export default Header;
