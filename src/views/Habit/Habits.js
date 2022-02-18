import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Header from "Components/Header/Header";
import HabitCategory from "Components/HabitCategory/HabitCategory";
import {
  fetchFail,
  fetchHabits,
  fetchSkips,
  fetchSuccess,
  updateCateg,
  updateComp,
  updateHabit,
  updateStreak,
} from "store/habitsReducer";
import "views/Habit/habits.css";
function Habits({ handleProgress }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const [showMore, setShowMore] = useState(false);
  const uid = useSelector((state) => state.users.ID);
  const handleMore = () => {
    setShowMore(!showMore);
  };
  const fetch = () => {
    dispatch(fetchHabits({ uid: uid }));
    dispatch(fetchSkips({ uid: uid }));
    dispatch(fetchSuccess({ uid: uid }));
    dispatch(fetchFail({ uid: uid }));
  };
  const changeCompleted = (id) => {
    dispatch(updateComp({ id: id }));
    dispatch(updateStreak({ id: id }));
  };
  const updateCat = (id, category) => {
    if (category === "Skip" || category === "Fail") {
      dispatch(updateCateg({ id, category }));
    }
  };
  useEffect(() => {
    fetch();
  }, [fetch]);
  return (
    <>
      <Header setInput={setInput}></Header>
      <div className="main">
        <div className="habits">
          <HabitCategory
            input={input}
            arr={[]}
            handleProgress={handleProgress}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
            visible={true}
            updateCat={updateCat}
          />
          <HabitCategory
            input={input}
            handleProgress={handleProgress}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
            title="Success"
          />
          <HabitCategory
            input={input}
            handleProgress={handleProgress}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
            title="Skip"
          />
          <HabitCategory
            input={input}
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
