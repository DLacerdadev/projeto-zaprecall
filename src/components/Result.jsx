const Result = ({ userResponses, answeredCount }) => {
  const renderResultMessage = () => {
    if (answeredCount === 0) {
      return <p> Responda os flashcards para ver os resultados.</p>;
    }

    const correctResponses = userResponses.filter(
      (response) => response === "Zap!" || response === "Quase não lembrei"
    );

    if (correctResponses.length === answeredCount) {
      return <p> Parabéns! Você lembrou de todos os flashcards.</p>;
    } else if (correctResponses === 0) {
      return <p>Putz! Parece que você não lembrou de nenhum flashcard</p>;
    } else {
      return (
        <p>
          Você lembrou de {correctResponses.length} flashcards com sucesso, mas
          parece que alguns ainda precisam de revisão.
        </p>
      );
    }
  };
  return (
    <div className="result">
      <h2>Resultados</h2>
      {renderResultMessage()}
    </div>
  );
};

export default Result;
