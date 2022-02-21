import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import arrowIcon from "@assets/arrowGrey.svg";
import "@components/HabitCategory/habitCategory.css";
import HabitItem from "Components/HabitItem/HabitItem";
import {
  fetchFail,
  fetchHabits,
  fetchSkips,
  fetchSuccess,
} from "store/habitsReducer";
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
  const [array, setArray] = useState([]);
  const dispatch = useDispatch();
  const uid = useSelector((state) => state.users.ID);
  const fetch = () => {
    dispatch(fetchHabits({ uid: uid }));
    dispatch(fetchSkips({ uid: uid }));
    dispatch(fetchSuccess({ uid: uid }));
    dispatch(fetchFail({ uid: uid }));
  };
  // const habits = useSelector((state) => state.habit.habit);
  // const skips = useSelector((state) => state.habit.skips);
  // const successes = useSelector((state) => state.habit.success);
  // const fails = useSelector((state) => state.habit.fails);
  // if (title === "Fail") {
  //   arr = fails;
  // } else if (title === "Success") {
  //   arr = successes;
  // } else if (title === "Skip") {
  //   arr = skips;
  // } else {
  //   arr = habits;
  // }

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
  visible: PropTypes.bool,
  handleProgress: PropTypes.func.isRequired,
  changeCompleted: PropTypes.func.isRequired,
  handleMore: PropTypes.func.isRequired,
  input: PropTypes.string,
  updateCat: PropTypes.func,
};
HabitCategory.defaultProps = {
  title: "",
  visible: false,
  input: "",
  updateCat: () => {},
};
export default HabitCategory;
