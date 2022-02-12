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
    icon: <AddIcon style={{ transform: "scale(0.8)" }}></AddIcon>,
  },
];
