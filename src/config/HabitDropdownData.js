import React from "react";
import tick from "@assets/tick.svg";
import progress from "@assets/progress.svg";
import edit from "@assets/edit.svg";
import viewProgress from "@assets/view_progress.svg";
import fail from "@assets/fail.svg";
import skip from "@assets/skip.svg";
import UndoIcon from "@mui/icons-material/Undo";
export const HabitDropdownData = [
  {
    id: 0,
    title: "Check-In",
    icon: <img src={tick} alt="tick"></img>,
  },
  {
    id: 1,
    title: "Skip",
    icon: <img src={skip} alt="Skip"></img>,
  },
  {
    id: 2,
    title: "Fail",
    icon: <img src={fail} alt="Fail"></img>,
  },
  {
    id: 3,
    title: "Log Progress",
    icon: <img src={progress} alt="tick"></img>,
  },
  {
    id: 4,
    title: "Edit",
    icon: <img src={edit} alt="tick"></img>,
  },
  {
    id: 5,
    title: "View Progress",
    icon: <img src={viewProgress} alt="tick"></img>,
  },
];
export const CategoryDropdownData = [
  {
    id: 0,
    title: "Log Progress",
    icon: <img src={progress} alt="tick"></img>,
  },
  {
    id: 1,
    title: "Undo",
    icon: <UndoIcon></UndoIcon>,
  },
  {
    id: 2,
    title: "Edit",
    icon: <img src={edit} alt="tick"></img>,
  },
  {
    id: 3,
    title: "View Progress",
    icon: <img src={viewProgress} alt="tick"></img>,
  },
];