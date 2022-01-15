import React from 'react'
import '../styles/header.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
function example() {
    return (
      <div>
        <Select
          labelId="demo-simple-select-label"
          className="dropdown"
          value="1"
          label="Age"
          //   onChange={handleChange}
        >
          <MenuItem value={10} className="dropdownList">
            Ten
          </MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <div>
          <ul role="list" className="dropdown">
            <div className="dropdownList">Reminder Time</div>
            <li className="dropdownList">My Habit Order</li>
            <li className="dropdownList">Alphabetical</li>
          </ul>
        </div>
      </div>
    );
}

export default example
