import Split from "react-split";
import React from "react";
import Sidebar from "@components/Sidebar/SideBar";
import Habits from "@views/Habit/Habits"
import Progress from "@components/Progress/Progress.js";
import "@components/home/home.css";
function Home() {
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
          <Habits />
        </div>
        <div>
          <Progress />
        </div>
      </Split>
    </>
  );
}

export default Home;
