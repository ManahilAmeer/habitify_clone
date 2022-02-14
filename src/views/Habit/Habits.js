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
function Habits(props) {
  const {handleProgress}=props;
  const dispatch = useDispatch();
  const [success, setSucces] = useState([]);
  const [skip, setSkip] = useState([]);
  const [fail, setFail] = useState([]);
  const [habit, setHabit] = useState([]);
  const [goal, setGoal] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [selectedKey, setSelectedKey] = useState(0);
  const uid = useSelector((state) => state.users.ID);
  const habits=useSelector((state)=>state.habit.habit);
  const skips = useSelector((state) => state.habit.skips);
  const successes = useSelector((state) => state.habit.success);
  const fails = useSelector((state) => state.habit.fails);
  const handleMore = (key) => {
    setShowMore(!showMore);
    setSelectedKey(key);
  };
  const fetch = () => {
    dispatch(fetchHabits({ uid: uid }));
    dispatch(fetchSkips({ uid: uid }));
    dispatch(fetchSuccess({ uid: uid }));
    dispatch(fetchFail({ uid: uid }));
    setHabit(habits);
    setSkip(skips);
    setSucces(successes);
    setFail(fails);
  };
  const changeCompleted = (times, completed, id, goal) => {
    dispatch(updateComp({ id: id, completed: completed + 1 }));
    setGoal(completed + 1);
    if (completed + 1 === goal) {
      updateCat(id, "Complete");
      dispatch(updateStreak({ id: id }));
    }
  };
  const updateCat = (id, category) => {
    if (category === "Skip" || category === "Fail" || category === "Complete") {
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
            selectedKey={selectedKey}
            visible={true}
            updateCat={updateCat}
          />
          {success.length >= 1 && (
            <HabitCategory
              handleProgress={handleProgress}
              arr={success}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Success"
            />
          )}
          {skip.length >= 1 && (
            <HabitCategory
              handleProgress={handleProgress}
              arr={skip}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Skip"
            />
          )}
          {fail.length >= 1 && (
            <HabitCategory
              arr={fail}
              handleProgress={handleProgress}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Fail"
            />
          )}
        </div>
      </div>
    </>
  )
}
Habits.propTypes = {
  handleProgress:PropTypes.func.isRequired,
};
Habits.defaultProps={
  handleProgress:()=>{}
}
export default Habits;
