import React, { useState, useEffect } from "react";
import "./virtualScreen.css";

const VirtualScreen = ({ typedText, paragraph }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      setCurrentIndex(typedText.length);
    }, [typedText, paragraph]);

    const coloredText = paragraph.slice(0, currentIndex);
    const remainingText = paragraph.slice(currentIndex);

    return (
        <div className="screen">
            <p>
                <span style={{ color: "#4fffc7" }}>{coloredText}</span>
                {remainingText}
            </p>
        </div>
    );
};

export default VirtualScreen;
