import "../css/rodape.css";

function Rodape({ questions, completed }) {
  return (
    <div className="rodape" data-test="rodape">
      {completed}/{questions} CONCLUIDOS
    </div>
  );
}

export default Rodape;
