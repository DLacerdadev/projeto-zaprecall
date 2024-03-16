import React, { useState } from "react";
import FlashcardDeck from "./components/FlashcardDeck";

const App = () => {
  const [showDeck, setShowDeck] = useState(false);

  const handleStartRecall = () => {
    setShowDeck(true);
  };

  return (
    <div>
      <h1>Bem-vindo ao ZapRecall!</h1>
      {!showDeck && (
        <button onClick={handleStartRecall}>Iniciar Recall!</button>
      )}
      {showDeck && <FlashcardDeck />}
    </div>
  );
};

export default App;
