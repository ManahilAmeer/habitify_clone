import React from "react";
// import * as React from "react";
import ReactDOM from "react-dom";
import Button from "@mui/material/Button";
import allHabits from "../assets/allHabits.svg";
import setting from "../assets/setting.svg";
// import AllInboxIcon from "@mui/material/AllInbox";
import LightModeIcon from "@mui/icons-material/LightMode";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
// import FolderIcon from "@mui/icons-material/Folder";
import ShareIcon from "@mui/icons-material/Share";
import AddIcon from "@mui/icons-material/Add";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
export const SidebarData = [
  {
    title: "All Habits",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path
          d="M4.20521 16.25H15.7948C17.3187 16.25 18.125 15.4148 18.125 13.8707V9.89823C18.125 9.00688 18.0088 8.62788 17.6125 8.10149L15.4599 5.19582C14.6263 4.07285 14.2026 3.75 12.9452 3.75H7.05477C5.80425 3.75 5.38057 4.07285 4.54005 5.19582L2.38751 8.10149C1.99117 8.62788 1.875 9.00688 1.875 9.89823V13.8707C1.875 15.4218 2.68818 16.25 4.20521 16.25ZM10 11.7371C8.95448 11.7371 8.31213 10.944 8.31213 10.0456V9.9614C8.31213 9.63855 8.12079 9.32973 7.72445 9.32973H3.78837C3.52187 9.32973 3.47403 9.09812 3.60387 8.92266L6.06392 5.58184C6.33726 5.20985 6.66527 5.05545 7.09577 5.05545H12.9042C13.3347 5.05545 13.6627 5.20985 13.9361 5.58184L16.3893 8.92266C16.526 9.09812 16.4781 9.32973 16.2116 9.32973H12.2824C11.8792 9.32973 11.6879 9.63855 11.6879 9.9614V10.0456C11.6879 10.944 11.0455 11.7371 10 11.7371ZM12.8564 6.11524H7.15044C6.9591 6.11524 6.80877 6.26965 6.80877 6.45915C6.80877 6.66269 6.9591 6.8171 7.15044 6.8171H12.8564C13.0477 6.8171 13.1912 6.66269 13.1912 6.45915C13.1912 6.26965 13.0477 6.11524 12.8564 6.11524ZM13.7379 7.6523H6.26892C6.06392 7.6523 5.91358 7.82777 5.91358 8.0313C5.91358 8.22782 6.06392 8.38925 6.26892 8.38925H13.7379C13.9361 8.38925 14.0933 8.22782 14.0933 8.0313C14.0933 7.82777 13.9361 7.6523 13.7379 7.6523Z"
          fill="#7b7c7c"
        />
      </svg>
    ),
    // icon: <AllInboxIcon />,
    link: "/all-habits",
  },
  {
    title: "Afternoon",
    // icon: "",
    icon: <LightModeIcon width="20" height="20" />,
    link: "/time-of-day",
  },
];
export const SidebarAreas = [
  {
    title: "New area",
    icon: "",
    icon: <AddIcon />,
    link: "/new area",
  },
];
export const Preferences = [
  {
    title: "Manage Habits",
    icon: <FormatListNumberedIcon />,
    // icon: <AllInboxIcon />,
    link: "/manage-habits",
  },
  {
    title: "App Settings",
    icon: <img src={setting} />,
    // icon: <WbSunnyIcon />,
    link: "/app-settings",
  },
  {
    title: "Resources",
    icon: <ShareIcon />,
    // icon: <WbSunnyIcon />,
    link: "/resources",
  },
];
