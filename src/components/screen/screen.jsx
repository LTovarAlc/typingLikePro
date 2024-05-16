import React, { useState, useEffect } from "react";
import "./screen.css";

const VirtualScreen = ({ typedText }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const paragraph =
    "Birds chirped in the morning, sun rising over hills, painting skies with hues of gold an orange, picturesque dawn.";

    useEffect(() => {
        const lastTypedLetter = typedText ? typedText[typedText.length - 1].toUpperCase() : null;
        console.log(`Last typed letter: ${lastTypedLetter}`); // Add this line
        console.log(`Current letter in paragraph: ${paragraph[currentIndex].toUpperCase()}`); // Add this line
        if (lastTypedLetter && lastTypedLetter === paragraph[currentIndex].toUpperCase()) {
            console.log("Las letras coinciden");
            setCurrentIndex(prevIndex => prevIndex + 1);
        }
    }, [typedText]);

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
