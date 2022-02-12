import React from "react";
import PropTypes from "prop-types";

import arrowIcon from "@assets/arrowGrey.svg";
import "@components/HabitCategory/habitCategory.css";
import HabitItem from "@components/HabitItem/HabitItem";
function HabitCategory(props) {
  const {habits,title,handleProgress,changeCompleted,handleMore}=props;
  return (
    <>
      <div className="category">
        <div className="category-heading">
          <div className="heading-div">
            <img src={arrowIcon}></img>
            <p className="heading-text">
              {habits.length} {title}
            </p>
          </div>
        </div>
        <HabitItem
          habits={habits}
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
  habits: PropTypes.array.isRequired,
  title:PropTypes.string.isRequired,
  handleProgress:PropTypes.func.isRequired,
  changeCompleted: PropTypes.func.isRequired,
  handleMore: PropTypes.func.isRequired,
  // visible: PropTypes.bool.isRequired,
};

HabitCategory.defaultProps = {
  habits: [],
  title:"",
  handleProgress:()=>{},
  changeCompleted: () => {},
  handleMore: () => {},
  // visible: false,
};
export default HabitCategory;
