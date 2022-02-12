import React from "react";
import "Components/Progress/progress.css";
import ProgressHeader from 'Components/ProgressHeader/ProgressHeader'
import PropTypes from "prop-types";
import ProgressContent from "Components/ProgressContent/ProgressContent";
function Progress(props) {
  const {habitName,CompleteLength,SkipLength,FailLength}=props;
  return (
    <div className="progress_bar">
      <div className="progress-section">
        <ProgressHeader habitName={habitName}></ProgressHeader>
        <ProgressContent
          CompleteLength={CompleteLength}
          FailLength={FailLength}
          SkipLength={SkipLength}
        ></ProgressContent>
      </div>
    </div>
  );
}
export default Progress;
