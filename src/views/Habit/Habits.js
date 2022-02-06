import React, { useRef, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "@components/Header/Header";
import HabitCategory from "Components/HabitCategory/HabitCategory";
import HabitItem from "Components/HabitItem/HabitItem";
import {
  fetchFail,
  // fetchHabits,fetchSkips,fetchSuccess,
  updateCateg,
  updateComp,
} from "@store/habitsReducer";
import "@views/Habit/habits.css";
function Habits() {
  const dispatch = useDispatch();
  const mountedRef = useRef(true);
  const [stroke, setStroke] = useState(0);
  const [success, setSucces] = useState([]);
  const [skip, setSkip] = useState([]);
  const [fail, setFail] = useState([]);
  const [habit, setHabit] = useState([]);
  const [Y, setY] = useState(0);
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
    setY(16.5 + key * 10.7);
    setSelectedKey(key);
  };
  const fetch = () => {
    // dispatch(fetchHabits({ uid: uid }));
    // dispatch(fetchSkips({ uid: uid }));
    // dispatch(fetchSuccess({ uid: uid }));
    // dispatch(fetchFail({ uid: uid }));
    setHabit(habits);
    setSkip(skips);
    setSucces(successes);
    setFail(fails);
  };
  useEffect(() => {
    fetch();
  }, [fetch, habit]);
  const changeCompleted = (times, completed,id,goal) => {
    dispatch(updateComp({id:id, completed:completed + 1}));
    let stroke = 264 / times;
    setGoal(completed + 1);
    if (completed + 1 === goal) {
      updateCat(id, "Complete");
    }
    changeStroke(stroke);
  };
  const updateCat = (id, category) => {
    if (category === "Skip" || category === "Fail" || category === "Complete") {
      dispatch(updateCateg({ id, category }));
    }
  };
  const style = {
    strokeDasharray: stroke + 0 + " " + (264 - stroke),
  };
  const changeStroke = (strokePoint) => {
    setStroke(stroke + strokePoint);
  };
  return (
    <>
      <Header></Header>
      <div className="main">
        <div className="habits">
          <HabitItem
            habits={habits}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
            selectedKey={selectedKey}
            visible={true}
            updateCat={updateCat}
          />
          {success.length >= 1 && (
            <HabitCategory
              arr={success}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Success"
            />
          )}
          {skip.length >= 1 && (
            <HabitCategory
              arr={skip}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Skip"
            />
          )}
          {fail.length >= 1 && (
            <HabitCategory
              arr={fail}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Fail"
            />
          )}
        </div>
      </div>
    </>
  );
}
export default Habits;
