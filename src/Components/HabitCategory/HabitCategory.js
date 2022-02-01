import React from "react";
import arrowIcon from "@assets/arrowGrey.svg";
import "@components/HabitCategory/habitCategory.css";
import HabitItem from "@components/HabitItem/HabitItem";
function HabitCategory(props) {
  return (
    <>
      <div className="category">
        <div className="category-heading">
          <div className="heading-div">
            <img src={arrowIcon}></img>
            <p className="heading-text">{props.arr.length} {props.title}</p>
          </div>
        </div>
        <HabitItem
          habits={props.arr}
          changeCompleted={props.changeCompleted}
          handleMore={props.handleMore}
          visible={false}
        />
      </div>
    </>
  );
}
export default HabitCategory;
