import logo from "../images/logo.png";
import "../css/container.css";

function Inicio() {
  const [answeredCount, setAnsweredCount] = useState(0);

  function handleFlashcardCount() {
    setAnsweredCount(answeredCount + 1);
  }
}

return (
  <div className="container">
    <div className="logo">
      <img src={logo} alt="Logo" />
      <h1>ZapRecall</h1>
    </div>
  </div>
);

export default Inicio;
