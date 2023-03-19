import React from "react";
import current_streak from "assets/current-streak.svg";
import tick from "assets/tick.svg";
import DoneIcon from "@mui/icons-material/Done";
import CloseIcon from "@mui/icons-material/Close";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import PropTypes from "prop-types";
function ProgressContent(props) {
  const { completeLength, failLength,skipLength, streak, total } = props;
  return (
    <>
      <div className="progress-content">
        <div className="currentStreak">
          <div className="streak-data">
            <div className="streak-logo" role="button">
              <img
                width="23"
                height="31"
                src={current_streak}
                alt="My Happy SVG"
              />
            </div>
            <div className="streak-info">
              <p className="streak">Current Streak</p>
              <p className="days">{streak} days</p>
            </div>
          </div>
        </div>
        <div className="progress-grid">
          <div className="grid-data">
            <div className="progress-category">
              <DoneIcon className="category-logo"></DoneIcon>
              <p className="category-text">Complete</p>
            </div>
            <p className="category-days">{completeLength} days</p>
            <div className="category-change">---</div>
          </div>
          <div className="grid-data">
            <div className="progress-category">
              <CloseIcon className="category-logo"></CloseIcon>
              <p className="category-text">Failed</p>
            </div>
            <p className="category-days">{failLength} days</p>
            <div className="category-change">---</div>
          </div>
          <div className="grid-data">
            <div className="progress-category">
              <ArrowForwardIcon className="category-logo"></ArrowForwardIcon>
              <p className="category-text">Skipped</p>
            </div>
            <p className="category-days">{skipLength} days</p>
            <div className="category-change">---</div>
          </div>
          <div className="grid-data">
            <div className="progress-category">
              <div className="category-logo"></div>
              <p className="category-text">Total</p>
            </div>
            <p className="category-days">{total} times</p>
            <div className="category-change">---</div>
          </div>
        </div>
      </div>
    </>
  );
}
ProgressContent.prototype = {
  completeLength: PropTypes.number,
  skipLength: PropTypes.number,
  failLength: PropTypes.number,
  streak: PropTypes.number,
  total: PropTypes.number,
};
ProgressContent.defaultProps = {
  completeLength: 0,
  skipLength: 0,
  failLength: 0,
  streak: 0,
  total: 0,
};
export default ProgressContent;
