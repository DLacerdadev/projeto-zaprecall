import { useState, useEffect } from "react";
import erroIcon from "../images/icone_erro.png";
import certoIcon from "../images/icone_certo.png";
import quaseIcon from "../images/icone_quase.png";
import setaPlay from "../images/seta_play.png";
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
    </div>
  );
}

export default Rodape;
