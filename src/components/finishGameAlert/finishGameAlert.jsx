import React from "react";
import "./finishCardAlert.css";
import 'animate.css'

const FinishCardAlert = () => {
  return (
    <div className="finishCardContainer animate__animated animate__bounceIn">
      <div className="finishCardAlert">
        <h2>Congratulations!</h2>
        <p>You completed 5/5 paragraphs</p>
        <div className="buttons-container">
          <button class="button"> Try again</button>
          <button class="button"> Back to home</button>
        </div>
      </div>
    </div>
  );
};

export default FinishCardAlert;
