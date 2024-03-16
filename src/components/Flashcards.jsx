import React, { useState } from "react";

function Flashcards({ Flashcards, handleFlip, handleAnswer }) {
  const [selectedFlashcard, setSelectedFlashcard] = useState(null);

  const handleCardClick = (FlashcardId) => {
    setSelectedFlashcard(FlashcardId);
    handleFlip(FlashcardId);
  };

  const handleRespostaClick = (status) => {
    handleAnswer(selectedFlashcard, status);
    setSelectedFlashcard(null);
  };

  return (
    <div className="Flashcards">
      <h2>FlashCards</h2>
      <div className="flashcard-container">
        {Flashcards.map((flashcard) => (
          <div
            id={flashcard.id}
            className="flashcard"
            onClick={() => handleCardClick(flashcard.id)}
          >
            {selectedFlashcard === flashcard.id ? (
              <div className="flashcard-content">
                <div className="question">{flashcard.question}</div>
                <div className="resposta">{flashcard.resposta}</div>
                <div className="buttons-respostas">
                  <button onClick={() => handleRespostaClick("Não lembrei")}>
                    Não Lembrei
                  </button>
                  <button onClick={() => handleRespostaClick("Quase lembrei")}>
                    Quase lembrei!
                  </button>
                  <button onClick={() => handleRespostaClick("Zap!")}>
                    !ZAP
                  </button>
                </div>
              </div>
            ) : (
              <div className="flashcardback">{`FlashCard ${flashcard.id}`}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Flashcards;
