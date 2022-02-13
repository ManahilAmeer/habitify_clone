import React from "react";
import PropTypes from "prop-types";

import { MostPopularData, StayFitData } from "config/SuggestionData";

function Suggestion(props) {
  const {setFieldValue,handleMenu,Visibility}=props;
  var className="";
  Visibility
    ? (className = "menu-visible")
    : (className = "menu");
  return (
    <>
      <div className={className}>
        <div className="popular">
          <p className="popular-heading">Most Popular Habits</p>

          {MostPopularData.map((val, key) => {
            return (
              <div key={val.id} className="habit-sug">
                <div className="sug-icon">
                  <div className="icon-container">{val.icon}</div>
                </div>
                <div
                  onClick={() => {
                    setFieldValue("name", val.title);
                    handleMenu();
                  }}
                  className="item-text"
                >
                  <p className="text-style">{val.title}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="popular">
          <p className="popular-heading">Stay Fit with exercise</p>

          {StayFitData.map((val, key) => {
            return (
              <div key={val.id} className="habit-sug">
                <div className="sug-icon">
                  <div className="icon-container">{val.icon}</div>
                </div>
                <div
                  onClick={() => {
                    setFieldValue("name", val.title);
                    handleMenu();
                  }}
                  className="item-text"
                >
                  <p className="text-style">{val.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
Suggestion.propTypes = {
  Visibility: PropTypes.bool.isRequired,
  handleMenu: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

Suggestion.defaultProps = {
  Visibility: false,
  handleMenu: () => {},
  setFieldValue: () => {},
};
export default Suggestion;
