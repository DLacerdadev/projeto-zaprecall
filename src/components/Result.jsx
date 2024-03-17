import React from "react";

const Result = ({ userResponses, answeredCount }) => {
  const correctCount = userResponses.filter(
    (response) => response === "Zap!"
  ).length;
  const incorrectCount = answeredCount - correctCount;
  const allCorrect = incorrectCount === 0;

  return (
    <div className="result">
      <h2>Resultados</h2>
      <p>Perguntas Respondidas: {answeredCount}</p>
      <p>Corretas: {correctCount}</p>
      <p>Incorretas: {incorrectCount}</p>
      {allCorrect && <p>Parabéns!</p>}
      {!allCorrect && <p>Putz</p>}
    </div>
  );
};

export default Result;
