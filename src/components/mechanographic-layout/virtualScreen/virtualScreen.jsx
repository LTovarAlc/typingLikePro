import React, { useState, useEffect } from "react";
import "./virtualScreen.css";

const VirtualScreen = ({ typedText, paragraph }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const lastTypedLetter = typedText ? typedText[typedText.length - 1].toUpperCase() : null;
        const currentChar = paragraph[currentIndex];

        if (currentChar && lastTypedLetter === currentChar.toUpperCase()) {
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    }, [typedText, paragraph, currentIndex]);

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
