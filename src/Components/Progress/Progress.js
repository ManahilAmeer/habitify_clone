import React from "react";
import "Components/Progress/progress.css";
import ProgressHeader from 'Components/ProgressHeader/ProgressHeader'
import PropTypes from "prop-types";
import ProgressContent from "Components/ProgressContent/ProgressContent";
function Progress(props) {
  const {habitName,CompleteLength,SkipLength,FailLength,streak,total}=props;
  return (
    <div className="progress_bar">
      <div className="progress-section">
        <ProgressHeader habitName={habitName}></ProgressHeader>
        <ProgressContent
          CompleteLength={CompleteLength}
          FailLength={FailLength}
          SkipLength={SkipLength}
          streak={streak}
          total={total}
        ></ProgressContent>
      </div>
    </div>
  );
}
Progress.prototype = {
  habitName: PropTypes.string,
  CompleteLength: PropTypes.number,
  SkipLength: PropTypes.number,
  FailLength: PropTypes.number,
  streak: PropTypes.number,
  total: PropTypes.number,
};
Progress.defaultProps = {
  habitName: "",
  CompleteLength: 0,
  SkipLength: 0,
  FailLength: 0,
  streak: 0,
  total: 0,
};
export default Progress;
