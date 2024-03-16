import React, { useState } from "react";
import Flashcard from "./FlashCard";

const FlashcardDeck = () => {
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
      question: "Podemos colocar __ dentro do JSX?",
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

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const [flashcards, setFlashCards] = useState(shuffle(initialFlashcards));

  return (
    <div>
      <h2>Deck de Flashcards</h2>
      {flashcards.map((flashcard, index) => (
        <Flashcard key={flashcard.id} flashcard={flashcard} index={index + 1} />
      ))}
    </div>
  );
};

export default FlashcardDeck;
