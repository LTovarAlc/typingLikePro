import React, { useState } from "react";
import VirtualKeyboard from "./keyboard/virtualKeyboard";
import VirtualScreen from "./virtualScreen/virtualScreen";
import SidePanel from "./sidePanel/sidePanel";
import "./mechanographic-layout.css";

function MechanographicLayout() {
    const [typedText, setTypedText] = useState("");
    const [highlightedIndex, setHighlightedIndex] = useState(0);
    const [stopwatchStarted, setStopwatchStarted] = useState(false);
    const [stopwatchStopped, setStopwatchStopped] = useState(false);

    const paragraph = "Birds chirped in the morning, sun rising over hills, painting skies with hues of gold an orange, picturesque dawn.";

    const handleKeyPress = (pressedKey) => {
        const currentChar = paragraph[highlightedIndex];
        const upperKey = pressedKey.toUpperCase();

        if (currentChar) {
            const upperChar = currentChar.toUpperCase();

            if (!stopwatchStarted && upperKey === upperChar) {
                setStopwatchStarted(true);
            }

            if (upperKey === upperChar) {
                setHighlightedIndex(prevIndex => prevIndex + 1);

                if (highlightedIndex + 1 === paragraph.length) {
                    setStopwatchStopped(true);
                }
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
            <div className="sidePanel-container">
                <SidePanel start={stopwatchStarted} stop={stopwatchStopped} />
            </div>
        </section>
    );
}

export default MechanographicLayout;
