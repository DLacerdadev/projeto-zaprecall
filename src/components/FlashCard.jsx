import React, { useState } from "react";

const Flashcard = ({ flashcard, index }) => {
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
    setQuestionVisible(true);
  };

  const handleAnswer = (status) => {
    setAnswered(true);
  };

  return (
    <div className="flashcard" onClick={handleFlip}>
      <div className={`card-inner ${flipped ? "flipped" : ""}`}>
        <div className="card-front">
          <h3>Flashcard {index}</h3>
        </div>
        <div className="card-back">
          {!questionVisible && (
            <button onClick={handleFlip}>Mostrar Pergunta</button>
          )}
          <h3 style={{ display: questionVisible ? "block" : "none" }}>
            {flashcard.question}
          </h3>
          {questionVisible && (
            <button onClick={handleFlip}>Mostrar Resposta</button>
          )}
          <p
            style={{ display: questionVisible && !flipped ? "none" : "block" }}
          >
            {flashcard.answer}
          </p>
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
