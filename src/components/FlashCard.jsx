import React, { useState } from "react";

const Flashcard = ({ flashcard }) => {
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const handleAnswer = (status) => {
    setAnswered(true);
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
          {!answered && (
            <div>
              <button onClick={() => handleAnswer("Não lembrei")}>
                Não lembrei
              </button>
              <button onClick={() => handleAnswer("Quase não lembrei")}>
                Quase não lembrei
              </button>
              <button onClick={() => handleAnswer("Zap!")}>Zap!</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
