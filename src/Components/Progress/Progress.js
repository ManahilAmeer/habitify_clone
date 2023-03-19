import React from "react";
import "Components/Progress/progress.css";
import ProgressHeader from 'Components/ProgressHeader/ProgressHeader'
import PropTypes from "prop-types";
import ProgressContent from "Components/ProgressContent/ProgressContent";
function Progress({habitName,completeLength,skipLength,failLength,streak,total}) {
  return (
    <div className="progress_bar">
      <div className="progress-section">
        <ProgressHeader habitName={habitName}></ProgressHeader>
        <ProgressContent
          completeLength={completeLength}
          failLength={failLength}
          skipLength={skipLength}
          streak={streak}
          total={total}
        ></ProgressContent>
      </div>
    </div>
  );
}
Progress.prototype = {
  habitName: PropTypes.string,
  completeLength: PropTypes.number,
  skipLength: PropTypes.number,
  failLength: PropTypes.number,
  streak: PropTypes.number,
  total: PropTypes.number,
};
Progress.defaultProps = {
  habitName: "",
  completeLength: 0,
  skipLength: 0,
  failLength: 0,
  streak: 0,
  total: 0,
};
export default Progress;
