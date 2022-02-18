import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import arrowIcon from "@assets/arrowGrey.svg";
import "@components/HabitCategory/habitCategory.css";
import HabitItem from "Components/HabitItem/HabitItem";
function HabitCategory({
  input,
  arr,
  title,
  handleProgress,
  changeCompleted,
  handleMore,
  visible,
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
    const search = (searchWord) => {
      searchWord = searchWord.toLowerCase();
      arr = arr.filter((e) => {
        return e.Name.toLowerCase().match(new RegExp(searchWord, "g"));
      });
    };
  if (input) {
    search(input);
  }
  return (
    <>
      {arr.length >= 1 && (
        <div className="category">
          {/* {search("m")} */}
          {!visible && (
            <div className="category-heading">
              <div className="heading-div">
                <img src={arrowIcon}></img>
                <p className="heading-text">
                  {arr.length} {title}
                </p>
              </div>
            </div>
          )}
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
  title: PropTypes.string,
  visible: PropTypes.bool,
  handleProgress: PropTypes.func.isRequired,
  changeCompleted: PropTypes.func.isRequired,
  handleMore: PropTypes.func.isRequired,
  input: PropTypes.string,
};
HabitCategory.defaultProps = {
  title: "",
  visible: false,
  input:""
};
export default HabitCategory;
