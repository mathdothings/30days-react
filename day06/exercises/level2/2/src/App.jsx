import "./App.css";
import { generateHex, range } from "./helpers";

const MiniCard = ({ backgroundColor }) => (
  <div className="mini-card" style={{ backgroundColor }}>
    {backgroundColor}
  </div>
);

const MiniCards = ({ amount }) => (
  <>
    {range(0, amount).map((item) => (
      <MiniCard backgroundColor={generateHex()} />
    ))}
  </>
);

function App() {
  return (
    <>
      <MiniCards amount={40} />
    </>
  );
}

export default App;
