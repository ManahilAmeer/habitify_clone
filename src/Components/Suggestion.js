import React from 'react';
import { MostPopularData, StayFitData } from "./SuggestionData";

function Suggestion(props) {
  return (
    <>
    {console.log(props.Visibility)}
      <div style={{ visibility: props.Visibility }} className="menu">
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

export default Suggestion;
