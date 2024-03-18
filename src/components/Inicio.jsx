import logo from "../images/logo.png";
import s from "../images/ZapRecall.svg";
import cards from "../cards";
import "../css/container.css";
import Flashcards from "./Flashcards";
import { useState } from "react";
import Rodape from "./Rodape";
import "../css/logo.css";

function Inicio() {
  const [answeredCount, setAnsweredCount] = useState(0);
  const [cardStatus, setCardStatus] = useState("unanswered");

  function handleFlashcardCount() {
    setAnsweredCount(answeredCount + 1);
  }

  return (
    <div className="container">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <img src={s} alt="ZapRecall" />
      </div>
      {cards.map((card, index) => {
        return (
          <Flashcards
            key={index}
            index={index}
            card={card}
            handleFlashcardCount={handleFlashcardCount}
            setCardStatus={setCardStatus}
            handleCardStatus={setCardStatus}
          />
        );
      })}
      <Rodape
        questions={cards.length}
        completed={answeredCount}
        cardStatus={cardStatus}
      />
    </div>
  );
}

export default Inicio;
