import React from "react";

import tick from "@assets/tick.svg";
import progress from "@assets/progress.svg";
import edit from "@assets/edit.svg";
import viewProgress from "@assets/view_progress.svg";
import fail from "@assets/fail.svg";
import skip from "@assets/skip.svg";

export const HabitDropdownData = [
  {
    title: "Check-In",
    icon: <img src={tick} alt="tick"></img>,
  },
  {
    title: "Skip",
    icon: <img src={skip} alt="Skip"></img>,
  },
  {
    title: "Fail",
    icon: <img src={fail} alt="Fail"></img>,
  },
  {
    title: "Log Progress",
    icon: <img src={progress} alt="tick"></img>,
  },
  {
    title: "Edit",
    icon: <img src={edit} alt="tick"></img>,
  },
  {
    title: "View Progress",
    icon: <img src={viewProgress} alt="tick"></img>,
  },
];