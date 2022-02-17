import React from "react";
import PropTypes from "prop-types";

import { mostPopularData, stayFitData } from "config/SuggestionData";

function Suggestion({ setFieldValue, handleMenu, visibility }) {
  let className = "";
  visibility ? (className = "menu-visible") : (className = "menu");
  return (
    <>
      <div className={className}>
        <div className="popular">
          <p className="popular-heading">Most Popular Habits</p>

          {mostPopularData.map((val, key) => {
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

          {stayFitData.map((val, key) => {
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
  visibility: PropTypes.bool,
  handleMenu: PropTypes.func.isRequired,
  setFieldValue: PropTypes.func.isRequired,
};

Suggestion.defaultProps = {
  visibility: false,
};
export default Suggestion;
