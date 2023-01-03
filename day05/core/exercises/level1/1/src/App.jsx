import logo from "./logo.svg";
import "./App.css";

/* 
  1. What is props in a React component?
      Props is a parameter that can be passed as a react component. This way we can write reusable components, passing data through then as props.
  2. How do you access props in a React component?
      Props can be acessed in many ways. We can acess it through dynamicall variables, object literal, destructuring and much more.
  3. What data types can we pass as props to components?
      We can pass any primitive data type as well as arrays, functions and objects.
  4. What is a propTypes?
      PropType is a package that helps us to define and handle datatypes in React components.
  5. What is a default propTypes?
      Default propTypes is a tool to set some default values to a component proprieties datatypes.
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
