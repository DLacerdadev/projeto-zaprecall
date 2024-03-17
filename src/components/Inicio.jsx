import logo from "../images/logo.png";
import cards from "../cards";
import "../css/container.css";
import Flashcards from "./Flashcards";
import { useState } from "react";

function Inicio() {
  const [answeredCount, setAnsweredCount] = useState(0);

  function handleFlashcardCount() {
    setAnsweredCount(answeredCount + 1);
  }
  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <h1>ZapRecall</h1>
      </div>
      {cards.map((card, index) => {
        return (
          <Flashcards
            key={index}
            index={index}
            card={card}
            handleFlashcardCount={handleFlashcardCount}
          />
        );
      })}
    </div>
  );
}

export default Inicio;
