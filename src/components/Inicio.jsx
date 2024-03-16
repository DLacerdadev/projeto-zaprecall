import React, { useState } from "react";

export function Inicio({ startJogo, selectDeck, setZap }) {
  const [selectedDeck, setSelectDeck] = useState("");

  const handleclick = () => {
    startJogo();
  };

  const handleSelectDeck = (e) => {
    setSelectDeck(e.target.value);
    selectDeck(e.target.value);
  };

  const handlezapGoalChange = (e) => {
    setZap(parseInt(e.target.value));
  };

  return (
    <div className="Inicio">
      <h2>Selecione um Deck</h2>
      <select value={selectedDeck} onChange={handleSelectDeck}>
        <option value="deck1"> Deck 1 </option>
      </select>
      <h2>Defina Meta Zap</h2>
      <input type="number" min="1" onChange={handlezapGoalChange} />
      <button onClick={handleclick}>IniciarRecall</button>
    </div>
  );
}
export default Inicio;
