import React, { useState, useEffect, useRef } from "react";
import VirtualKeyboard from "./keyboard/virtualKeyboard";
import VirtualScreen from "./virtualScreen/virtualScreen";
import "./mechanographic-layout.css";
import FinishCardAlert from "../finishGameAlert/finishGameAlert";
import 'animate.css'

function MechanographicLayout() {
  const [typedText, setTypedText] = useState("");
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [correctLettersCount, setCorrectLettersCount] = useState(0);

  const paragraphs = [
    "Charizard looks like a dragon... but he is not a dragon type. Actually, a pokemon that looks like an apple is a dragon type...",
    "The sound of Darth Vaders lightsaber was created by mixing the sound of an old camera with the hum of a television with the volume turned off.",
    "SpiderMan was created by Stan Lee and Steve Ditko. Originally, he was going to be called Mosquito Man.",
    "Harry Potters lightning bolt scar was the result of Voldemorts Avada Kedavra curse when he was a baby.",
    "The Lord of the Rings trilogy was filmed in New Zealand. After the success of the films, tourism in the country increased significantly.",
    "In Jurassic Park, the T. rex roar was a combination of animal sounds, including a baby elephant.",
    "In The Wizard of Oz, the snow was actually asbestos, endangering the actors health.",
    "The E.T. scream was made by sound designer Ben Burtt using a mix of animal noises.",
    "The Titanic set was so large that it couldn't fit into any existing studio and had to be built."
  ];

  const currentParagraphIndexRef = useRef(currentParagraphIndex);
  const correctLettersCountRef = useRef(correctLettersCount);
  const typedTextRef = useRef(typedText);

  useEffect(() => {
    currentParagraphIndexRef.current = currentParagraphIndex;
    correctLettersCountRef.current = 0;
    typedTextRef.current = "";
    setTypedText("");
    setCorrectLettersCount(0);
  }, [currentParagraphIndex]);

  const handleKeyPress = (pressedKey) => {
    const upperKey = pressedKey === ' ' ? ' ' : pressedKey.toUpperCase();

    setCorrectLettersCount((prevCount) => {
      const currentParagraph = paragraphs[currentParagraphIndexRef.current];
      const currentChar = currentParagraph[prevCount] === ' ' ? ' ' : currentParagraph[prevCount].toUpperCase();

      if (currentChar === upperKey) {
        const newCount = prevCount + 1;
        setTypedText((prevText) => prevText + pressedKey);
        typedTextRef.current += pressedKey;

        if (newCount === currentParagraph.length) {
          if (currentParagraphIndexRef.current + 1 < paragraphs.length) {
            setCurrentParagraphIndex((prevIndex) => {
              const newIndex = prevIndex + 1;
              return newIndex;
            });
            correctLettersCountRef.current = 0;
            typedTextRef.current = "";
            return 0;
          } else {
            setGameCompleted(true);
          }
        }
        return newCount;
      } else {
        return prevCount;
      }
    });
  };

  useEffect(() => {
  }, [correctLettersCount, typedText]);

  return (
    <section className="mechanographic-layout-container animate__animated animate__zoomIn animate__delay-1s">
      <div className="mechanographic-layout">
        <VirtualScreen
          typedText={typedText}
          paragraph={paragraphs[currentParagraphIndex]}
        />
        <VirtualKeyboard
          setTypedText={setTypedText}
          onKeyPress={handleKeyPress}
        />
      </div>
      {currentParagraphIndex >= 5 && <FinishCardAlert />}
    </section>
  );
}

export default MechanographicLayout;
