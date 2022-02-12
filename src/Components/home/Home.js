import Split from "react-split";
import React, { useState } from "react";
import Sidebar from "Components/Sidebar/SideBar";
import Habits from "views/Habit/Habits";
import Progress from "Components/Progress/Progress.js";
import "Components/Home/home.css";
function Home() {
  const [showProgress, setShowProgress] = useState(false);
  const [habitName,setHabitName]=useState("")
  const [CompleteLength,setCompleteLength]=useState(0);
  const [FailLength, setFailLength] = useState(0);
  const [SkipLength, setSkipLength] = useState(0);
  const handleProgress = (habitName,CompleteLength,FailLength,SkipLength) => {
    setShowProgress(!showProgress);
    setHabitName(habitName);
    setCompleteLength(CompleteLength);
    setFailLength(FailLength);
    setSkipLength(SkipLength);
    // console.log(CompleteLength)
    // console.log(showProgress);
  };
  return (
    <>
      <Split
        className="split"
        gutterSize={1}
        sizes={[17.5, 51.21, 31.29]}
        snapOffset={50}
      >
        <div>
          <Sidebar />
        </div>
        <div>
          <Habits handleProgress={handleProgress} />
        </div>
        <div>
          {showProgress && (
            <Progress
              habitName={habitName}
              CompleteLength={CompleteLength}
              FailLength={FailLength}
              SkipLength={SkipLength}
            />
          )}
        </div>
      </Split>
    </>
  );
}

export default Home;
