import React from "react";
import PropTypes from 'prop-types';
import '@styles/habitDropdown.css'
import {HabitDropdownData} from "@config/HabitDropdownData"

function HabitsDropdown(props) {
  const y=props.Y;
  console.log(y)
  const style = {
    transform: "translate( 65.37vw, "+y +"vh)"
  };
  return (
    <div 
    style={style}
     className="habitDropdown">
      <div className="habit-content">
        <div className="dropdown-container">
          <div className="dropdown-options">
            {HabitDropdownData.map((val, key) => {
              return (
                <div key={key} className="habit-item">
                  <div className="item-icon">
                    <div className="icon-container">{val.icon}</div>
                  </div>
                  <div className="item-text">
                    <p className="text-style">{val.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
HabitsDropdown.propTypes = {
  props: PropTypes.string,
};
export default HabitsDropdown;
