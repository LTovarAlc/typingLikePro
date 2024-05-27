import React, { useState, useEffect } from "react";
import VirtualKeyboard from "./keyboard/virtualKeyboard";
import VirtualScreen from "./virtualScreen/virtualScreen";
import "./mechanographic-layout.css";

function MechanographicLayout() {
  const [typedText, setTypedText] = useState("");
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [correctLettersCount, setCorrectLettersCount] = useState(0);

  const paragraphs = [
    "Charizard looks like a dragon... but he is not a dragon type. Actually, a pokemon that looks like an apple is a dragon type...",
    "Batman, the dark knight of Gotham City, uses his intelligence, physical prowess, and a vast array of gadgets to protect the city from notorious villains like the Joker, always staying one step ahead.",
    "Luke Skywalker, a young farm boy with a destiny, trains to become a Jedi Knight and battles the evil Galactic Empire, ultimately confronting Darth Vader and the Emperor to restore peace and justice to the galaxy.",
    "SpiderMan, the young and agile hero of New York City, swings through the streets using his spider like abilities, all while balancing the challenges of being a high school student and protecting his city from formidable villains.",
    "Everyone questions who built the Egyptian pyramids... but nobody questions who built the pyramids in Mexico.",
    "The sound of Darth Vaders lightsaber was created by mixing the sound of an old camera with the hum of a television with the volume turned off.",
    "Spider-Man was created by Stan Lee and Steve Ditko. Originally, he was going to be called Mosquito Man.",
    "Harry Potters lightning bolt scar was the result of Voldemorts Avada Kedavra curse when he was a baby.",
    "The 'Lord of the Rings' trilogy was filmed in New Zealand. After the success of the films, tourism in the country increased significantly."
  ];

  useEffect(() => {
    setTypedText("");
    setCorrectLettersCount(0);
  }, [currentParagraphIndex]);

  useEffect(() => {
    const currentParagraph = paragraphs[currentParagraphIndex];

    if (correctLettersCount === currentParagraph.length) {
      console.log("Párrafo actual escrito correctamente");
      if (currentParagraphIndex + 1 < paragraphs.length) {
        setCurrentParagraphIndex((prevIndex) => prevIndex + 1);
        setCorrectLettersCount(0);
      } else {
        setGameCompleted(true);
        console.log("¡Juego completado! ¡Felicidades!");
      }
    }
  }, [correctLettersCount, currentParagraphIndex, paragraphs]);

  const handleKeyPress = (pressedKey) => {
    console.log('Tecla pulsada:', pressedKey);
    const currentParagraph = paragraphs[currentParagraphIndex];
    const upperKey = pressedKey.toUpperCase();

    setCorrectLettersCount((prevCount) => {
      const currentChar = currentParagraph[prevCount].toUpperCase();
      console.log(`Comparando: '${currentChar}' con '${upperKey}'`);

      if (currentChar === upperKey) {
        const newCount = prevCount + 1;
        console.log('correctLettersCount actualizado :>> ', newCount);
        setTypedText((prevText) => prevText + pressedKey);
        return newCount;
      } else {
        console.log(`Letra incorrecta: esperaba '${currentChar}', pero se ingresó '${upperKey}'`);
        return prevCount;
      }
    });
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