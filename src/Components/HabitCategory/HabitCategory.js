import React, { useEffect } from "react";
import PropTypes from "prop-types";
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
  updateCat,
}) {
  const search = (searchWord) => {
    searchWord = searchWord.toLowerCase();
    arr = arr.filter((e) => {
      return e.Name.toLowerCase().match(new RegExp(searchWord, "g"));
    });
  };
  if (input) {
    search(input);
  }
  useEffect(() => {
  }, [arr]);
  return (
    <>
      {arr.length >= 1 && (
        <div className="category">
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
            updateCat={updateCat}
            handleProgress={handleProgress}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
            visible={visible}
          />
        </div>
      )}
    </>
  );
}
HabitCategory.propTypes = {
  title: PropTypes.string,
  arr: PropTypes.arrayOf(
    PropTypes.shape({
      Name: PropTypes.string,
      CompleteLength: PropTypes.number,
      FailLength: PropTypes.number,
      SkipLength: PropTypes.number,
      streak: PropTypes.number,
      total: PropTypes.number,
    })
  ),
  visible: PropTypes.bool,
  handleProgress: PropTypes.func.isRequired,
  changeCompleted: PropTypes.func.isRequired,
  handleMore: PropTypes.func.isRequired,
  input: PropTypes.string,
  updateCat: PropTypes.func,
};
HabitCategory.defaultProps = {
  title: "",
  arr:[],
  visible: false,
  input: "",
  updateCat: () => {},
};
export default HabitCategory;
