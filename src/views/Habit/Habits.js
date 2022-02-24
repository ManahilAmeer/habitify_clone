import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Header from "Components/Header/Header";
import HabitCategory from "Components/HabitCategory/HabitCategory";
import {
  fetchHabits,
  updateCategory,
  updateCompleted,
  updateStreak,
} from "store/habitsReducer";
import "views/Habit/habits.css";
function Habits({ handleProgress }) {
  const habits = useSelector((state) => state.habit.habit);
  const skips = useSelector((state) => state.habit.skips);
  const successes = useSelector((state) => state.habit.success);
  const fails = useSelector((state) => state.habit.fails);
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [showMore, setShowMore] = useState(false);
  const uid = useSelector((state) => state.users.ID);
  const handleMore = () => {
    setShowMore(!showMore);
  };
  const changeCompleted = (id, completedDate, completed, goal, index) => {
    dispatch(updateCompleted({ id: id, index }));
    if (completed + 1 === goal) {
      dispatch(
        updateStreak({
          id: id,
          completedDate: completedDate,
          completed: completed + 1,
          goal: goal,
          index
        })
      );
    }
  };
  const updateCat = (id, category,index) => {
    if (category === "Skip" || category === "Fail") {
      dispatch(updateCategory({ id, category ,index}));
    }
  };
  useEffect(() => {
    const fetch = () => {
      dispatch(fetchHabits({ uid: uid }));
    };
    fetch();
  }, [dispatch, uid]);
  return (
    <>
      <Header setInput={setInput}></Header>
      <div className="main">
        <div className="habits">
          <HabitCategory
            input={input}
            arr={habits}
            handleProgress={handleProgress}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
            visible={true}
            updateCat={updateCat}
          />
          <HabitCategory
            input={input}
            arr={successes}
            handleProgress={handleProgress}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
            title="Success"
          />
          <HabitCategory
            input={input}
            arr={skips}
            handleProgress={handleProgress}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
            title="Skip"
          />
          <HabitCategory
            input={input}
            arr={fails}
            handleProgress={handleProgress}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
            title="Fail"
          />
        </div>
      </div>
    </>
  );
}
Habits.propTypes = {
  handleProgress: PropTypes.func.isRequired,
};
export default Habits;
