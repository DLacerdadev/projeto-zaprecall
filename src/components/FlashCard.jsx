import React, { useState } from "react";

const Flashcard = ({ flashcard, index, onAnswer }) => {
  const [flipped, setFlipped] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [questionVisible, setQuestionVisible] = useState(false);
  const [answerVisible, setAnswerVisible] = useState(false);

  const handleFlip = () => {
    setFlipped(!flipped);
    setQuestionVisible(true);
  };

  const handleAnswer = (status) => {
    setAnswered(true);
    onAnswer(status);
  };
  const handleShowAnswer = () => {
    setAnswerVisible(true);
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
          {questionVisible && !answerVisible && (
            <button onClick={handleShowAnswer}>Mostrar Resposta</button>
          )}
          {answerVisible && <p>{flashcard.answer}</p>}
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
