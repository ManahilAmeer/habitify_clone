import React from "react";
import PropTypes from "prop-types";

import arrowIcon from "@assets/arrowGrey.svg";
import "@components/HabitCategory/habitCategory.css";
import HabitItem from "Components/HabitItem/HabitItem";
function HabitCategory({arr,title,handleProgress,changeCompleted,handleMore}) {
  return (
    <>
      <div className="category">
        <div className="category-heading">
          <div className="heading-div">
            <img src={arrowIcon}></img>
            <p className="heading-text">
              {arr.length} {title}
            </p>
          </div>
        </div>
        <HabitItem
          arr={arr}
          handleProgress={handleProgress}
          changeCompleted={changeCompleted}
          handleMore={handleMore}
          visible={false}
        />
      </div>
    </>
  );
}
HabitCategory.propTypes = {
  arr: PropTypes.array.isRequired,
  title:PropTypes.string.isRequired,
  handleProgress:PropTypes.func.isRequired,
  changeCompleted: PropTypes.func.isRequired,
  handleMore: PropTypes.func.isRequired,
};
export default HabitCategory;
