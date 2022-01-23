import React, { useState, useEffect } from "react";
import Header from "./Header";
import HabitsDropdown from "./HabitsDropdown";
import QMark from "../assets/QMark.svg";
import tick from "../assets/tick.svg"
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "../styles/habits.css";
import { db } from "./firebase";
function Habits() {
  const [habits, setHabits] = useState([]);
  const [Y,setY]=useState(0);
  const [showMore,setShowMore]=useState(false);
  const handleMore=(key)=>{
    setShowMore(!showMore);
    setY(105+(key*65));
    // console.log(Y);
  }
  useEffect(() => {
    console.log("useEffect called");
    fetchBlogs();
  }, []);
  const fetchBlogs = async () => {
    const response = db.collection("habit");
    const data = await response.get();
    data.docs.forEach((item) => {
      habits.push(item.data());
    });
    console.log(habits);
  };
  return (
    <>
      <Header></Header>
      <div className="main">
        <div className="habits">
          {habits.map((habit,key) => {
            // {console.log(habit)}
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
                          <img src={tick}></img>
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
        {/* <HabitsDropdown></HabitsDropdown> */}
      </div>
    </>
  );
}
export default Habits;
