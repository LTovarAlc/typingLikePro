import React from "react";
import "./finishCardAlert.css";
import 'animate.css'
import { Link } from "react-router-dom";

const FinishCardAlert = () => {
  return (
    <div className="finishCardContainer">
      <div className="finishCardAlert animate__animated animate__bounceIn">
        <h2>Congratulations!</h2>
        <p>You completed 5/5 paragraphs</p>
        <div className="buttons-container">
          <Link to={"/"}><button className="button"> Back to home</button></Link>
        </div>
        <span>More levels comming soon!</span>
      </div>
    </div>
  );
};

export default FinishCardAlert;
