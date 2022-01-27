import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Header from "@components/Header";
import { fetchHabits } from "@views/firebase";
import HabitsDropdown from "@components/HabitsDropdown";
import { addHabit } from "@store/habitsReducer";
import QMark from "@assets/QMark.svg";
import tick from "@assets/tick.svg"
import MoreVertIcon from "@mui/icons-material/MoreVert";

import "@styles/habits.css";
function Habits() {
  const dispatch=useDispatch();
  const [habits, setHabits] = useState([]);
  const [Y,setY]=useState(0);
  const [showMore,setShowMore]=useState(false);
  const handleMore=(key)=>{
    setShowMore(!showMore);
    setY(105+(key*65));
  }
  const uid = useSelector((state) => state.users.ID);
  useEffect(() => {
    fetch();
  }, []);
  const fetch = async () => {
   const arr = await fetchHabits(uid);
   dispatch(addHabit(arr));
   setHabits(arr);
  };
  return (
    <>
      <Header></Header>
      <div className="main">
        <div className="habits">
          
          {habits.map((habit,key) => {
              return (
                <div key={key} className="habit">
                  <div className="habit-icon">
                    <div className="habit-progress">
                      <svg viewBox="0 0 100 100" className="circle">
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="track"
                        ></circle>
                        <circle
                          cx="50"
                          cy="50"
                          r="42"
                          className="indicator"
                        ></circle>
                      </svg>
                      <div className="habit-symbol">
                        <img src={QMark} alt="Question Mark"></img>
                      </div>
                    </div>
                  </div>
                  <div className="habit-info">
                    <div>
                      <p className="habit-name">{habit.Name}</p>
                      <div className="habit-times">
                        <p className="times-text">0 / 1 times</p>
                      </div>
                    </div>
                    <div className="habit-done">
                      <div className="done-icon">
                        <div className="icon-img">
                          <img src={tick} alt="tick"></img>
                        </div>
                        <p className="done-text">Done</p>
                      </div>
                    </div>
                    <button className="more" 
                    onClick={()=>{handleMore(key);}} 
                    >
                      <MoreVertIcon></MoreVertIcon>
                    </button>
                  </div>
                </div>
              );
            })}
        </div>
        {showMore && <HabitsDropdown Y={Y}/>}
      </div>
    </>
  );
}
export default Habits;
