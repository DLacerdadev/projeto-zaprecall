import React, { useState } from "react";

const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
          <h3>{`Flashcard ${flashcard.id}`}</h3>
        </div>
        <div className="card-back">
          <h3>{flashcard.question}</h3>
          <p>{flashcard.answer}</p>
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
