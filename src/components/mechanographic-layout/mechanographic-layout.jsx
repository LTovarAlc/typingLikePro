import React, { useState, useEffect } from "react";
import VirtualKeyboard from "./keyboard/virtualKeyboard";
import VirtualScreen from "./virtualScreen/virtualScreen";
import "./mechanographic-layout.css";

function MechanographicLayout() {
  const [typedText, setTypedText] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const paragraphs = [
    "Charizard looks like a dragon... but he isn't a dragon type. Actually, a pokemon that looks like an apple is a dragon type...",
    "Batman, the dark knight of Gotham City, uses his intelligence, physical prowess, and a vast array of gadgets to protect the city from notorious villains like the Joker, always staying one step ahead.",
    "Luke Skywalker, a young farm boy with a destiny, trains to become a Jedi Knight and battles the evil Galactic Empire, ultimately confronting Darth Vader and the Emperor to restore peace and justice to the galaxy.",
    "Spider-Man, the young and agile hero of New York City, swings through the streets using his spider-like abilities, all while balancing the challenges of being a high school student and protecting his city from formidable villains.",
    "Everyone questions who built the Egyptian pyramids... but nobody questions who built the pyramids in Mexico.",
    "The sound of Darth Vader's lightsaber was created by mixing the sound of an old camera with the hum of a television with the volume turned off.",
    "Spider-Man was created by Stan Lee and Steve Ditko in 1962. Originally, he was going to be called 'Mosquito Man'.",
    "Harry Potter's lightning bolt scar was the result of Voldemort's Avada Kedavra curse when he was a baby.",
    "The 'Lord of the Rings' trilogy was filmed in New Zealand. After the success of the films, tourism in the country increased significantly."
  ];

  useEffect(() => {
    // Select a random paragraph index when the component mounts
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    setCurrentParagraphIndex(randomIndex);
  }, []);

  const handleKeyPress = (pressedKey) => {
    const currentChar = paragraphs[currentParagraphIndex][highlightedIndex];
    const upperKey = pressedKey.toUpperCase();

    if (currentChar) {
      const upperChar = currentChar.toUpperCase();

      if (upperKey === upperChar) {
        setHighlightedIndex((prevIndex) => prevIndex + 1);
      }
    }

    setTypedText((prevText) => prevText + pressedKey);
  };

  return (
    <section className="mechanographic-layout-container">
      <div className="mechanographic-layout">
        <VirtualScreen typedText={typedText} paragraph={paragraphs[currentParagraphIndex]} />
        <VirtualKeyboard
          setTypedText={setTypedText}
          onKeyPress={handleKeyPress}
        />
      </div>
    </section>
  );
}

export default MechanographicLayout;
