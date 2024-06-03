import React, { useState, useEffect, useRef } from "react";
import VirtualKeyboard from "./keyboard/virtualKeyboard";
import VirtualScreen from "./virtualScreen/virtualScreen";
import "./mechanographic-layout.css";

function MechanographicLayout() {
  const [typedText, setTypedText] = useState("");
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [correctLettersCount, setCorrectLettersCount] = useState(0);
  const [shuffledParagraphs, setShuffledParagraphs] = useState([]);
  const [completedParagraphs, setCompletedParagraphs] = useState([]);

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

  useEffect(() => {
    // Shuffle the paragraphs array when component mounts or completes all paragraphs
    if (shuffledParagraphs.length === 0 || completedParagraphs.length === paragraphs.length) {
      const shuffled = shuffleArray(paragraphs);
      setShuffledParagraphs(shuffled);
      setCompletedParagraphs([]);
      setCurrentParagraphIndex(0);
    }
  }, [shuffledParagraphs, completedParagraphs, paragraphs]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const handleKeyPress = (pressedKey) => {
    const upperKey = pressedKey === ' ' ? ' ' : pressedKey.toUpperCase();

    setCorrectLettersCount((prevCount) => {
      const currentParagraph = shuffledParagraphs[currentParagraphIndexRef.current];
      const currentChar = currentParagraph[prevCount] === ' ' ? ' ' : currentParagraph[prevCount].toUpperCase();

      if (currentChar === upperKey) {
        const newCount = prevCount + 1;
        setTypedText((prevText) => prevText + pressedKey);
        typedTextRef.current += pressedKey;

        if (newCount === currentParagraph.length) {
          const updatedCompletedParagraphs = [...completedParagraphs, currentParagraph];
          setCompletedParagraphs(updatedCompletedParagraphs);
          if (currentParagraphIndexRef.current + 1 < shuffledParagraphs.length) {
            setCurrentParagraphIndex((prevIndex) => prevIndex + 1);
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
    <section className="mechanographic-layout-container">
      <div className="mechanographic-layout">
        <VirtualScreen
          typedText={typedText}
          paragraph={shuffledParagraphs[currentParagraphIndex]}
        />
        <VirtualKeyboard
          setTypedText={setTypedText}
          onKeyPress={handleKeyPress}
        />
      </div>
    </section>
  );
}

export default MechanographicLayout;
