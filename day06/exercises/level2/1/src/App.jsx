import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function isPrime(number) {
  let divisors = 0;

  if (number === 1) {
    return true;
  }

  if (number > 2 && number % 2 === 0) {
    return false;
  }

  for (let x = 0; x <= number; x += 1) {
    if (number % x === 0) {
      divisors += 1;
    }
  }

  if (divisors === 2) {
    return true;
  }

  return false;
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
