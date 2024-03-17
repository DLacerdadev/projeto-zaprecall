import React from "react";

const Inicio = ({ onStartRecall }) => {
  return (
    <div className="start-screen">
      <h2>Bem-vindo ao ZapRecall!</h2>
      <button onClick={onStartRecall}>Iniciar Recall!</button>
    </div>
  );
};

export default Inicio;
