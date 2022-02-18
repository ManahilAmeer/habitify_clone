import React from "react";
import goodHabit from "@assets/GoodHabit.svg";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import AddIcon from "@mui/icons-material/Add";
export const DropdownData = [
  {
    id: 0,
    title: "Reminder Time",
  },
  {
    id: 1,
    title: "My Habits Order",
  },
  {
    id: 2,
    title: "Alphabetical",
  },
];
export const newHabitData = [
  {
    id: 0,
    title: "Create Good Habit",
    icon: <img width="16" height="16" src={goodHabit} alt="My" />,
  },
  {
    id:1,
    title: "Break Bad Habit",
    icon: <DoNotDisturbIcon style={{ transform: "scale(0.8)" }} />,
  },
  
  
  
];
export const logMoodData = [
  {
    id: 0,
    title: "Log Mood",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <path
          d="M0,12a1.5,1.5,0,0,0,1.5,1.5h8.75a.25.25,0,0,1,.25.25V22.5a1.5,1.5,0,0,0,3,0V13.75a.25.25,0,0,1,.25-.25H22.5a1.5,1.5,0,0,0,0-3H13.75a.25.25,0,0,1-.25-.25V1.5a1.5,1.5,0,0,0-3,0v8.75a.25.25,0,0,1-.25.25H1.5A1.5,1.5,0,0,0,0,12Z"
          fill="var(--icon-color)"
        />
      </svg>
    ),
  },
];
