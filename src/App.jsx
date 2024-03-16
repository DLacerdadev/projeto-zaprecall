import { useState } from "react";
import Inicio from "./components/Inicio";
function App() {
  const [mostrarInicio, setMostrarInicio] = useState(true);
  const [mostrarFlashCards, setMostrarFlashCard] = useState(false);
  const [mostrarResultado, setMostrarResultado] = useState(false);
  const [flashcards, setFlashCards] = useState([
    {
      question: "O que é JSX?",
      answer: "Uma extensão da linguagem JavaScript",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente",
    },
  ]);

  const [zapGoal, setZapGoal] = useState(1);

  const startRecall = () => {
    setMostrarInicio(false);
    setMostrarFlashCard(false);
    setFlashCards(flashcards);
  };

  const handleFlip = (flashcardId) => {
    const updatedFlashcards = flashcards.map((flashcard) => {
      if (flashcard.id === flashcardId) {
        return { ...flashcard, flipped: !flashcard.flipped };
      }
      return flashcard;
    });
    setFlashCards(updatedFlashcards);
  };

  return (
    <div className="App">
      {mostrarInicio && (
        <Inicio startRecall={startRecall} setZap={setZapGoal} />
      )}
    </div>
  );
}

export default App;
