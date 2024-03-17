import React, { useState } from "react";
import FlashcardDeck from "./components/FlashcardDeck";
import Inicio from "./components/Inicio";

const App = () => {
  const initialFlashcards = [
    {
      id: 1,
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript",
    },
    {
      id: 2,
      question: "O React é __?",
      answer: "Uma biblioteca JavaScript para construção de interfaces",
    },
    {
      id: 3,
      question: "Componentes devem iniciar com __?",
      answer: "Letra maiúscula",
    },
    {
      id: 4,
      question: "Podemos colocar __ dentro do JSX",
      answer: "Expressões",
    },
    {
      id: 5,
      question: "O ReactDOM nos ajuda __?",
      answer: "Interagindo com a DOM para colocar componentes React na mesma",
    },
    {
      id: 6,
      question: "Usamos o npm para __?",
      answer: "Gerenciar os pacotes necessários e suas dependências",
    },
    {
      id: 7,
      question: "Usamos props para __?",
      answer: "Passar diferentes informações para componentes",
    },
    {
      id: 8,
      question: "Usamos estado (state) para __?",
      answer:
        "Dizer para o React quais informações, quando atualizadas, devem renderizar a tela novamente",
    },
  ];

  const [flashcards, setFlashcards] = useState([]);
  const [userResponses, setUserResponses] = useState([]);
  const [answeredCount, setAnsweredCount] = useState(0);
  const [showStartScreen, setShowStartScreen] = useState(true);

  const shuffleFlashcards = () => {
    const shuffled = [...initialFlashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setShowStartScreen(false);
  };

  // const handleStartRecall = () => {
  //   setFlashcards(initialFlashcards);
  //   setShowStartScreen(false);
  // };

  const handleFlashcardAnswer = (status) => {
    setUserResponses([...userResponses, status]);
    setAnsweredCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="container">
      <div className="App" style={styles.app}>
        {showStartScreen ? (
          <Inicio onStartRecall={shuffleFlashcards} />
        ) : (
          <>
            <FlashcardDeck
              flashcards={flashcards}
              onFlashcardAnswer={handleFlashcardAnswer}
            />
          </>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#FFF",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "70px",
  },
  app: {
    width: "100vw",
    minHeight: "100vh",
    backgroundColor: "#FB6B6B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    marginBottom: "70px",
    textAlign: "center",
  },
  questionAnswer: {
    color: "#FFFFFF",
    fontWeight: 400,
    fontFamily: "Righteous",
    fontSize: "36px",
    marginLeft: "20px",
  },
};

export default App;
