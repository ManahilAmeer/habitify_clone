import React,{useState} from "react";
import "Components/Header/header.css";
import sortIcon from "assets/sort.svg"
import arrowIcon from "assets/arrow.svg";
import calenderIcon from "assets/calenderIcon.svg";
import searchIcon from "assets/search.svg";
import addIcon from "assets/add.svg";
import HeaderDropdown from "Components/HeaderDropdown/HeaderDropdown";
function Header() {
  const [sortText, setsortText] = useState("Alphabetical");
  const [visible,setVisible]=useState(false)
  const [Sortvisibility, setSortvisiblity] = useState(false);
  const [Habitvisibility, setHabitvisibility] = useState(false);
  const handleSortButton = (option) => {
    setsortText(option);
  };
  const handleSearch=()=>{
    setVisible(!visible);
  }
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
            <img
              onClick={() => handleSearch()}
              width="16"
              height="16"
              src={searchIcon}
              alt="My Happy SVG"
            />
            {visible && (
              <input
                type="text"
                placeholder="Search"
                className="search_input visible"
              ></input>
            )}
          </div>
          <div>
            <button type="button" className="button">
              <img
                width="14"
                height="14"
                className="icon"
                src={calenderIcon}
                alt="Calendar"
              />
              {!visible && <div>Today</div>}
              {!visible && (
                <span className="arrow">
                  <img width="16" height="16" src={arrowIcon} alt="Arrow" />
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
                <img width="16" height="16" src={sortIcon} alt="Sort" />
              </span>
              {!visible && <div>{sortText}</div>}
              {!visible && (
                <span className="arrow">
                  <img width="16" height="16" src={arrowIcon} alt="Arrow" />
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
                <img width="12" height="12" src={addIcon} alt="Add" />
              </span>
              Add Habits
              <span className="arrow">
                <img width="16" height="16" src={arrowIcon} alt="Arrow" />
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
