import React from "react";
import allHabits from "@assets/all-habit.svg";
import setting from "@assets/setting.svg";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
export const SidebarData = [
  {
    id: 0,
    title: "All Habits",
    icon: <img src={allHabits} alt="All Habits"></img>,
    link: "/all-habits",
  },
  {
    id: 1,
    title: "Afternoon",
    icon: <LightModeIcon width="20" height="20" />,
    link: "/time-of-day",
  },
];
export const SidebarAreas = [
  {
    id: 0,
    title: "New area",
    icon: <AddIcon />,
    link: "/new area",
  },
];
export const Preferences = [
  {
    id: 0,
    title: "Theme",
    icon: <LightModeIcon width="15" height="15" />,
    link: "/",
  },
  // {
  //   id: 1,
  //   title: "App Settings",
  //   icon: <img src={setting} alt="App Settings" />,
  //   link: "/app-settings",
  // },
  // {
  //   id: 2,
  //   title: "Resources",
  //   icon: <ShareIcon />,
  //   link: "/resources",
  // },
];
