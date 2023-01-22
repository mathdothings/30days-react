import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

/* 
1. How do you write a pure JavaScript function?
    You could use regular function or arrow function.
    a. Regular Function: function main () {// function code};
    b. Arrow Function: const main = () => {// function code};
2. What is inheritance and how do you make a child from a parent class?
    Inheritance occurs when we create a new object from a parent class. The new object will have some properties and method inherited from the parent class.
3. What is class based React component?
    It is just a react component but writted with class syntax.
4. What is the difference between functional React component and class based React component?
    Class components has its own way to deal with state and lifecycle. Function components needs the usage of hooks to work with state and lifecycle.
5. When do we need to use class based components instead of functional components?
    I can't find a scenario where use class based components is better than functional one.
6. What is the use cases of class based component?
    Same use cases as functional components.
7. Which type of component do use most frequently? functional or class-based component
    Functional.
8. What is React life cycle? (not covered yet)
9. What is state in React? (not covered yet)
*/

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
