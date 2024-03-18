import React from "react";
import logo from "../images/logo.png";
import s from "../images/ZapRecall.svg";
import "../css/logo.css";

function TelaInicio({ onStartClick }) {
  return (
    <div className="tela-inicio">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <img src={s} alt="ZapRecall" />
      </div>
      <button onClick={onStartClick}>Iniciar Jogo</button>
    </div>
  );
}

export default TelaInicio;
