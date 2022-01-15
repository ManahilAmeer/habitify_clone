import React from "react";
import goodHabit from "../assets/GoodHabit.svg";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import AddIcon from "@mui/icons-material/Add";
export const DropdownData = [
  {
    title: "Reminder Time",
  },
  {
    title: "My Habits Order",
  },
  {
    title: "Alphabetical",
  },
];
export const newHabitData = [
  {
    title: "Create Good Habit",
    icon: <img width="16" height="16" src={goodHabit} alt="My" />,
  },
  {
    title: "Break Bad Habit",
    icon: <DoNotDisturbIcon style={{ transform: "scale(0.8)" }} />,
  },
  //   {
  //     title: "Log Mood",
  //   },
];
export const logMoodData = [
  {
    title: "Log Mood",
    icon: <AddIcon style={{ transform: "scale(0.8)" }}></AddIcon>,
  },
];
