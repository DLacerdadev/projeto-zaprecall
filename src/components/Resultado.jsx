import React from "react";

function Resultado({ answeredFlashcards, resetGame, zapGoal }) {
  const zapCount = answeredFlashcards.filter(
    (flashcards) => flashcards.status === "Zap!"
  ).length;

  const isSucess = zapCount >= zapGoal;

  return (
    <div className="Resultado">
      <h2>Resultado</h2>
      <div className="result-info">
        <p>
          {zapCount}/{zapGoal} Concluídos`
        </p>
      </div>
      {isSucess ? (
        <div className="sucess-message">
          Parabéns! Você alcançou sua meta de Zaps!
        </div>
      ) : (
        <div className="failure-message">
          Putz! Você não alcançou sua meta de Zaps.
        </div>
      )}
      <button onClick={resetGame}>Reiniciar Game</button>
    </div>
  );
}

export default Resultado;
