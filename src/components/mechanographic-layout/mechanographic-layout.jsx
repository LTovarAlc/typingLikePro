import React, { useState } from "react";
import VirtualKeyboard from "./keyboard/virtualKeyboard";
import VirtualScreen from "./virtualScreen/virtualScreen";
import "./mechanographic-layout.css";

function MechanographicLayout() {
    const [typedText, setTypedText] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [stopwatchStarted, setStopwatchStarted] = useState(false);
    const [stopwatchStopped, setStopwatchStopped] = useState(false);
    const [errorCount, setErrorCount] = useState(0);

    const paragraph = "Birds chirped in the morning, sun rising over hills, painting skies with hues of gold an orange, picturesque dawn.";

    const handleKeyPress = (pressedKey) => {
        const currentChar = paragraph[highlightedIndex];
        const upperKey = pressedKey.toUpperCase();

        if (currentChar) {
            const upperChar = currentChar.toUpperCase();

            if (upperKey === upperChar) {
                setHighlightedIndex(prevIndex => prevIndex + 1);

                if (!stopwatchStarted) {
                    setStopwatchStarted(true);
                }

                if (highlightedIndex + 1 === paragraph.length) {
                    setStopwatchStopped(true);
                }
            } else if (stopwatchStarted) {
                setErrorCount(prevCount => prevCount + 1);
            }
        }

        setTypedText(prevText => prevText + pressedKey);
    };

    return (
        <section className="mechanographic-layout-container">
            <div className="mechanographic-layout">
                <VirtualScreen typedText={typedText} paragraph={paragraph} />
                <VirtualKeyboard setTypedText={setTypedText} onKeyPress={handleKeyPress} />
            </div>
        </section>
    );
}

export default MechanographicLayout;
