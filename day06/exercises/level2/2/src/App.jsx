import "./App.css";
import generateHex from "./helpers";

const MiniCard = ({ backgroundColor }) => (
  <div style={{ backgroundColor }}>{backgroundColor}</div>
);

function App() {
  return (
    <>
      <MiniCard backgroundColor={generateHex()} />
    </>
  );
}

export default App;
