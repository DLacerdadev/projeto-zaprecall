import React, { useState } from "react";
import Flashcard from "./FlashCard";

const FlashcardDeck = ({ flashcards, onFlashcardAnswer }) => {
  const [shuffledFlashcards, setShuffledFlashcards] = useState([]);

  const shuffleFlashcards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setShuffledFlashcards(shuffled);
  };

  return (
    <div>
      <h2>Deck de Flashcards</h2>
      <button onClick={shuffleFlashcards}>Iniciar Recall!</button>
      {shuffledFlashcards.map((flashcard, index) => (
        <Flashcard
          key={flashcard.id}
          flashcard={flashcard}
          index={index + 1}
          onFlashcardAnswer={onFlashcardAnswer}
        />
      ))}
    </div>
  );
};

export default FlashcardDeck;
