import { useState, useEffect } from "react";
import erroIcon from "../images/icone_erro.png";
import certoIcon from "../images/icone_certo.png";
import quaseIcon from "../images/icone_quase.png";
import setaPlay from "../images/seta_play.png";
import sadIcon from "../images/sad.png";
import partyIcon from "../images/party.png";
import "../css/rodape.css";

function Rodape({ questions, completed, cardStatus }) {
  const [lastCardStatus, setLastCardStatus] = useState("unanswered");
  const [icons, setIcons] = useState([]);

  useEffect(() => {
    if (cardStatus !== lastCardStatus) {
      setLastCardStatus(cardStatus);
      setIcons([...icons, getIconForStatus(cardStatus)]);
    }
  }, [cardStatus, lastCardStatus, icons]);

  function getIconForStatus(status) {
    switch (status) {
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

  const allCompleted = completed >= questions;

  const hasIncorrectAnswer = icons.some((icon) => icon === erroIcon);

  return (
    <div className="rodape" data-test="rodape">
      <p>
        {completed}/{questions} CONCLUIDOS
      </p>
      <div className="icon-container">
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon}
            alt={`Icon ${index + 1}`}
            className="status-icon"
          />
        ))}
      </div>
      {allCompleted && (
        <div className="completion-message">
          {hasIncorrectAnswer ? (
            <>
              <img src={sadIcon} alt="Sad Icon" />
              <h3>Putz...</h3>
              <p> Ainda faltam alguns... Mas não desanime!</p>
            </>
          ) : (
            <>
              <img src={partyIcon} alt="Party Icon" />
              <h3>Parabéns... </h3>
              <p>Você não esqueceu de nenhum flashcard!</p>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Rodape;
