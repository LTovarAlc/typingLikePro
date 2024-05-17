import React from "react";
import Stopwatch from "./stopWatch/stopWatch";
import "./sidePanel.css";

const SidePanel = ({ start, stop }) => {
    return (
        <div className="sidePanel">
            <div className="sidePanel-section">
                <span>Time</span>
                <Stopwatch start={start} stop={stop} />
            </div>
            <div className="sidePanel-section">
                <span>Errors:</span>
            </div>
            <div className="sidePanel-section">
                difficulty
            </div>
        </div>
    );
};

export default SidePanel;
