import React from "react";
import PropTypes from "prop-types";

import { MostPopularData, StayFitData } from "config/SuggestionData";

function Suggestion(props) {
  var className="";
  props.Visibility
    ? (className = "menu-visible")
    : (className = "menu");
  return (
    <>
      <div className={className}>
        <div className="popular">
          <p className="popular-heading">Most Popular Habits</p>

          {MostPopularData.map((val, key) => {
            return (
              <div key={key} className="habit-sug">
                <div className="sug-icon">
                  <div className="icon-container">{val.icon}</div>
                </div>
                <div
                  onClick={() => {
                    props.setFieldValue("name", val.title);
                    props.handleMenu();
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
              <div key={key} className="habit-sug">
                <div className="sug-icon">
                  <div className="icon-container">{val.icon}</div>
                </div>
                <div
                  onClick={() => {
                    props.setFieldValue("name", val.title);
                    props.handleMenu();
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
  Visibility: PropTypes.string.isRequired,
  handleMenu: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

Suggestion.defaultProps = {
  Visibility: "hidden",
  handleMenu: () => {},
  setFieldValue: () => {},
};
export default Suggestion;
