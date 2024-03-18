import React from "react";
import logo from "../images/logo.png";
import s from "../images/ZapRecall.svg";
import "../css/logo.css";
import "../css/telaInicio.css";

function TelaInicio({ onStartClick }) {
  return (
    <div className="tela-inicio">
      <div className="logo-inicio">
        <img src={logo} alt="Logo" />
        <img src={s} alt="ZapRecall" className="zaprecall" />
      </div>
      <button onClick={onStartClick}>Iniciar Jogo</button>
    </div>
  );
}

export default TelaInicio;
