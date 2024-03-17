import { useState, useEffect } from "react";
import erroIcon from "../images/icone_erro.png";
import certoIcon from "../images/icone_certo.png";
import quaseIcon from "../images/icone_quase.png";
import setaPlay from "../images/seta_play.png";
import setaVira from "../images/seta_virar.png";
import "../css/flashCard.css";

function Flashcards({ index, card, handleFlashcardCount, status }) {
  const [answered, setAnswered] = useState(false);
  const [start, setStart] = useState(false);
  const [questionStatus, setQuestionStatus] = useState(status);
  const [flipped, setFlipped] = useState(false);
  const [hasIncorrect, setHasIncorrect] = useState(false);

  useEffect(() => {
    setQuestionStatus(status);
  }, [status]);

  function Question() {
    if (!answered) {
      setStart(true);
    }
  }

  function showAnswer() {
    setFlipped(true);
  }

  function answeredQuestion(status) {
    setStart(false);
    setAnswered(true);
    setQuestionStatus(status);
    handleFlashcardCount();
    if (status === "wrong") {
      setHasIncorrect(true);
    }
  }

  function iconSelector() {
    switch (questionStatus) {
      case "wrong":
        return erroIcon;
      case "nearly":
        return quaseIcon;
      case "correct":
        return certoIcon;
      default:
        return setaPlay;
    }
  }

  return (
    <>
      {!start && (
        <div className="cards" data-test="flashcard">
          <p
            className="status"
            style={{
              textDecoration: answered ? "line-through" : "none",
              color:
                questionStatus === "correct"
                  ? "green"
                  : questionStatus === "wrong"
                  ? "red"
                  : questionStatus === "nearly"
                  ? "orange"
                  : "grey",
            }}
            data-test="flashcard-text"
          >
            {" "}
            Pergunta {index + 1}
          </p>
          <img
            src={iconSelector()}
            onClick={Question}
            data-test="play-btn"
            alt="Play Button"
          />
        </div>
      )}
      {start && !flipped && (
        <div className="open-card" data-test="flashcard">
          <p data-test="flashcard-text">{card.question}</p>
          <img src={setaVira} onClick={showAnswer} alt="Flip Button" />
        </div>
      )}
      {start && flipped && (
        <div className="open-card" data-test="flashcard">
          <p data-test="flashcard-text">{card.answer}</p>
          <div className="buttons">
            <button
              className="wrong"
              onClick={() => answeredQuestion("wrong")}
              data-test="no-btn"
            >
              Não Lembrei
            </button>
            <button
              className="nearly"
              onClick={() => answeredQuestion("nearly")}
              data-test="partial-btn"
            >
              Quase Lembrei
            </button>
            <button
              className="correct"
              onClick={() => answeredQuestion("correct")}
              data-test="zap-btn"
            >
              Zap!
            </button>
          </div>
        </div>
      )}
      {hasIncorrect && !start && (
        <div className="putz-message">
          <p>Putz!</p>
        </div>
      )}
    </>
  );
}

export default Flashcards;
