import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import Header from "@components/Header/Header";
import HabitCategory from "Components/HabitCategory/HabitCategory";
import HabitItem from "Components/HabitItem/HabitItem";
import {
  fetchFail,
  fetchHabits,fetchSkips,fetchSuccess,
  updateCateg,
  updateComp,
  updateStreak
} from "store/habitsReducer";
import "views/Habit/habits.css";
function Habits({handleProgress}) {
  const dispatch = useDispatch();
  const [habit, setHabit] = useState([]);
  const [showMore, setShowMore] = useState(false);
  const uid = useSelector((state) => state.users.ID);
  const habits=useSelector((state)=>state.habit.habit);
  const handleMore = () => {
    setShowMore(!showMore);
  };
  const fetch = () => {
    dispatch(fetchHabits({ uid: uid }));
    dispatch(fetchSkips({ uid: uid }));
    dispatch(fetchSuccess({ uid: uid }));
    dispatch(fetchFail({ uid: uid }));
    setHabit(habits);
  };
  const changeCompleted = (id) => {
    dispatch(updateComp({ id: id }));
    dispatch(updateStreak({ id: id }));
  };
  const updateCat = (id, category) => {
    if (category === "Skip" || category === "Fail" ) {
      dispatch(updateCateg({ id, category }));
    }
  };
  useEffect(() => {
    fetch();
  }, [fetch, habits]);
  return (
    <>
      <Header></Header>
      <div className="main">
        <div className="habits">
          <HabitItem
            arr={habit}
            handleProgress={handleProgress}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
            visible={true}
            updateCat={updateCat}
          />
            <HabitCategory
              handleProgress={handleProgress}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Success"
            />
            <HabitCategory
              handleProgress={handleProgress}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Skip"
            />
            <HabitCategory
              handleProgress={handleProgress}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Fail"
            />
        </div>
      </div>
    </>
  )
}
Habits.propTypes = {
  handleProgress:PropTypes.func.isRequired,
};
export default Habits;
