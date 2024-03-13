import { useState } from "react";
function App() {
  const FirstScreen = ({ nextScreen }) => (
    <div>
      <button onClick={nextScreen}>Iniciar Recall!</button>
    </div>
  );

  const SecondScreen = () => (
    <div>
      <button> Question </button>
      <button> Question </button>
      <button> Question </button>
      <button> Question </button>
      <button> Question </button>
      <button> Question </button>
      <button> Question </button>
      <button> Question </button>
    </div>
  );
  const [currentScreen, setCurrentScreen] = useState(false);
  const nextScreen = () => {
    setCurrentScreen(true);
  };

  return (
    <div>
      {currentScreen ? (
        <SecondScreen />
      ) : (
        <FirstScreen nextScreen={nextScreen} />
      )}
    </div>
  );
}

export default App;
