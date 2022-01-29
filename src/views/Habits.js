import React, { useRef, useState, useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "@components/Header";
import { fetchHabits, updateCompleted, updateCategory } from "@views/firebase";
import HabitsDropdown from "@components/HabitsDropdown";
import HabitCategory from "@components/HabitCategory";
import HabitItem from "@components/HabitItem";
import { addHabit } from "@store/habitsReducer";
import "@styles/habits.css";
function Habits() {
  const dispatch = useDispatch();
  const mountedRef = useRef(true);

  const [success, setSucces] = useState([]);
  const [skip, setSkip] = useState([]);
  const [habits, setHabits] = useState([]);
  const [Y, setY] = useState(0);
  const [goal, setGoal] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [selectedKey, setSelectedKey] = useState(-1);

  const uid = useSelector((state) => state.users.ID);
  // var SuccessArr = [];
  const fetchSucess = async () => {
    const arr = await fetchHabits(uid, "Complete");
    setSucces(arr);
    // console.log(success)
  };
  const fetchSkip = async () => {
    const arr = await fetchHabits(uid, "Skip");
    setSkip(arr);
  };
  const handleMore = (key) => {
    setShowMore(!showMore);
    setY(16.5 + key * 10.7);
    setSelectedKey(key);
  };
  const fetch = useCallback(async () => {
    try {
      const arr = await fetchHabits(uid, "");

      dispatch(addHabit(arr));
      if (!mountedRef.current) return null;
      else {
        setHabits(arr);
      }
    } catch (err) {}
  }, [dispatch, uid]);
  useEffect(() => {
    fetch();
    fetchSucess();
    fetchSkip();
  }, [fetch]);
  const changeCompleted = (times, key) => {
    const selectedDoc = habits[key];
    updateCompleted(selectedDoc["id"], selectedDoc["completed"] + 1);
    // window.location.reload(false);
    // let stroke = 264 / times;
    setGoal(selectedDoc["completed"] + 1);
    selectedDoc["completed"]++;
    if (selectedDoc["completed"] === selectedDoc["goal"]) {
      updateCat(selectedDoc["id"], "Complete");
    }
    //

    // console.log(habits[key]["completed"]);
    // changeStroke(key,stroke)
  };
  const updateCat = (id, title) => {
    if (title === "Skip" || title === "Fail" || title === "Complete") {
      updateCategory(id, title);
    }
  };
  // const changeStroke = (key,strokePoint) => {
  //   const style = {
  //     strokeDasharray: { strokePoint } + "0 264",
  //   };
  //   stroke[key]=style;
  // };
  return (
    <>
      <Header></Header>
      <div className="main">
        <div className="habits">
          <HabitItem
            habits={habits}
            changeCompleted={changeCompleted}
            handleMore={handleMore}
          />
          {success && (
            <HabitCategory
              arr={success}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Success"
            />
          )}
          {skip && (
            <HabitCategory
              arr={skip}
              changeCompleted={changeCompleted}
              handleMore={handleMore}
              title="Skip"
            />
          )}
        </div>

        {showMore && (
          <HabitsDropdown
            Y={Y}
            id={habits[selectedKey]["id"]}
            updateCat={updateCat}
          />
        )}
      </div>
    </>
  );
}
export default Habits;
