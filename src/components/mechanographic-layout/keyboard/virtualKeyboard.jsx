import React, { useState, useEffect } from "react";
import ButtonKey from "./buttonKey/buttonKey";
import "./keyboard.css";

const VirtualKeyboard = ({ setTypedText, onKeyPress }) => {
  const [activeKeys, setActiveKeys] = useState({});

  const firstRowLetters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const secondRowLetters = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const thirdRowLetters = ["Z", "X", "C", "V", "B", "N", "M", ",", "."];

  const handleKeyDown = (event) => {
    let keyPressed = event.key.toUpperCase();
    
    if (event.key === ' ') {
      keyPressed = ' ';
    }

    if (
      firstRowLetters.includes(keyPressed) ||
      secondRowLetters.includes(keyPressed) ||
      thirdRowLetters.includes(keyPressed) ||
      keyPressed === ' '
    ) {
      setActiveKeys((prevKeys) => ({ ...prevKeys, [keyPressed]: true }));
      onKeyPress(event.key);  // Pass the pressed key to the handler
      setTimeout(() => {
        setActiveKeys((prevKeys) => {
          const newKeys = { ...prevKeys };
          delete newKeys[keyPressed];
          return newKeys;
        });
      }, 100);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="keyboard">
      <div className="first-row">
        {firstRowLetters.map((letter, index) => (
          <ButtonKey
            key={`first-row-${letter}`}
            text={letter}
            isActive={activeKeys[letter]}
          />
        ))}
      </div>
      <div className="second-row">
        {secondRowLetters.map((letter, index) => (
          <ButtonKey
            key={`second-row-${letter}`}
            text={letter}
            isActive={activeKeys[letter]}
          />
        ))}
      </div>
      <div className="third-row">
        {thirdRowLetters.map((letter, index) => (
          <ButtonKey
            key={`third-row-${letter}`}
            text={letter}
            isActive={activeKeys[letter]}
          />
        ))}
      </div>
      <div className="fourth-row">
        <ButtonKey
          key={`fourth-row-space`}
          text={"Space"}
          isActive={activeKeys[" "]}
          isSpaceKey={true}
        />
      </div>
    </div>
  );
}

export default VirtualKeyboard;
