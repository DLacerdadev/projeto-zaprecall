import React, { useState } from "react";
import Flashcard from "./FlashCard";
import Result from "./Result";

const FlashcardDeck = ({ flashcards, onFlashcardAnswer }) => {
  const [userResponses, setUserResponses] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);

  const handleFlashcardAnswer = (status) => {
    setUserResponses([...userResponses, status]);
    onFlashcardAnswer(status);
    setAnsweredCount(answeredCount + 1);
  };

  return (
    <div>
      <h2>Deck de Flashcards</h2>
      <p>{`${answeredCount}/${flashcards.length}`}</p>
      {flashcards.map((flashcard, index) => (
        <Flashcard
          key={flashcard.id}
          flashcard={flashcard}
          index={index + 1}
          onAnswer={handleFlashcardAnswer}
        />
      ))}
      <Result userResponses={userResponses} answeredCount={answeredCount} />
    </div>
  );
};

export default FlashcardDeck;
