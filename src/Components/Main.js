import Split from "react-split";
import React from "react";
import Sidebar from "./SideBarPage/SideBar.js";
import Habits from "./HabitPage/Habits"
import Progress from "./Progress.js";
import "@styles/split.css";
function Main() {
  return (
    // import Split from 'react-split'
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
          <Habits />
        </div>
        <div>
          <Progress />
        </div>
      </Split>
    </>
  );
}

export default Main;
