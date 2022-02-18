import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import arrowIcon from "@assets/arrowGrey.svg";
import "@components/HabitCategory/habitCategory.css";
import HabitItem from "Components/HabitItem/HabitItem";
function HabitCategory({
  arr,
  title,
  handleProgress,
  changeCompleted,
  handleMore,
}) {
  const habits = useSelector((state) => state.habit.habit);
  const skips = useSelector((state) => state.habit.skips);
  const successes = useSelector((state) => state.habit.success);
  const fails = useSelector((state) => state.habit.fails);

  if (title === "Fail") {
    arr = fails;
  } else if (title === "Success") {
    arr = successes;
  } else if (title === "Skip") {
    arr = skips;
  } else {
    arr = habits;
  }
  return (
    <>
      {arr.length >= 1 && (
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
      )}
    </>
  );
}
HabitCategory.propTypes = {
  arr: PropTypes.array,
  title: PropTypes.string,
  handleProgress: PropTypes.func.isRequired,
  changeCompleted: PropTypes.func.isRequired,
  handleMore: PropTypes.func.isRequired,
};
HabitCategory.defaultProps = {
  arr: [],
  title: "",
};
export default HabitCategory;
