import React, { useRef, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "@components/Header/Header";
import {
  fetchHabits,
} from "@database/firebase";
import HabitCategory from "@components/HabitCategory/HabitCategory";
import HabitItem from "@components/HabitItem/HabitItem";
import {
  setHabit,
  addFail,
  addskips,
  addSuccess,
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
  const [habits, setHabits] = useState([]);
  const [Y, setY] = useState(0);
  const [goal, setGoal] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [selectedKey, setSelectedKey] = useState(0);
  const uid = useSelector((state) => state.users.ID);
  const handleMore = (key) => {
    setShowMore(!showMore);
    setY(16.5 + key * 10.7);
    setSelectedKey(key);
  };
  const fetch = useCallback(async () => {
    try {
      const habits = await fetchHabits(uid, "");
      const skip = await fetchHabits(uid, "Skip");
      const success = await fetchHabits(uid, "Complete");
      const fail = await fetchHabits(uid, "Fail");
      dispatch(setHabit(habits));
      dispatch(addFail(fail));
      dispatch(addskips(skip));
      dispatch(addSuccess(success));
      if (!mountedRef.current) return null;
      else {
        setHabits(habits);
        setSkip(skip);
        setSucces(success);
        setFail(fail);
      }
    } catch (err) {}
  }, [dispatch, uid]);
  useEffect(() => {
    fetch();
  }, [fetch, habits]);
  const changeCompleted = (times, completed,id,goal) => {
    console.log(id)
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
