import React from "react";
import "./sidePanel.css";

const SidePanel = () => {
    return (
        <div className="sidePanel">
            <div className="sidePanel-section">
                <span>Time</span>
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