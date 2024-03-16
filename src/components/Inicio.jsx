function Inicio({ startJogo }) {
  const handleclick = () => {
    startJogo();
  };

  return (
    <div className="Inicio">
      <button onClick={handleclick}>IniciarRecall</button>
    </div>
  );
}

export default Inicio;
