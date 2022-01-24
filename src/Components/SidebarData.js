import React from "react";
import allHabits from "@assets/all-habit.svg";
import setting from "@assets/setting.svg";
import LightModeIcon from "@mui/icons-material/LightMode";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
export const SidebarData = [
  {
    title: "All Habits",
    icon: (<img src={allHabits} alt="All Habits"></img>
    ),
    link: "/all-habits",
  },
  {
    title: "Afternoon",
    icon: <LightModeIcon width="20" height="20" />,
    link: "/time-of-day",
  },
];
export const SidebarAreas = [
  {
    title: "New area",
    icon: <AddIcon />,
    link: "/new area",
  },
];
export const Preferences = [
  {
    title: "Manage Habits",
    icon: <FormatListNumberedIcon />,
    link: "/manage-habits",
  },
  {
    title: "App Settings",
    icon: <img src={setting} alt="App Settings" />,
    link: "/app-settings",
  },
  {
    title: "Resources",
    icon: <ShareIcon />,
    link: "/resources",
  },
];
