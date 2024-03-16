import React, { useState } from "react";

export function Inicio({ startJogo, selectDeck }) {
  const [selectedDeck, setSelectDeck] = useState("");

  const handleclick = () => {
    startJogo();
  };

  const handleSelectDeck = (e) => {
    setSelectDeck(e.target.value);
    selectDeck(e.target.value);
  };

  return (
    <div className="Inicio">
      <h2>Selecione um DEck</h2>
      <select value={selectedDeck} onChange={handleSelectDeck}>
        <option value="deck1"> Deck 1 </option>
      </select>
      <button onClick={handleclick}>IniciarRecall</button>
    </div>
  );
}
export default Inicio;
