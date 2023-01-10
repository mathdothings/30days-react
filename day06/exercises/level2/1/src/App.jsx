import "./App.css";
import generateNumbers from "./helpers";

function Numbers({ numbers }) {
  return numbers.map(({ backgroundColor, value }, index) => (
    <li key={index} className={`number-card ${backgroundColor}`}>
      {value}
    </li>
  ));
}

function App() {
  return (
    <ul className="numbers-list">
      <Numbers numbers={generateNumbers(0, 32)} />
    </ul>
  );
}

export default App;
