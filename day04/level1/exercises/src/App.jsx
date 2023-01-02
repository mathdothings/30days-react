import "./App.css";

/* 
1. What is the difference between a regular function and an arrow function?
    Regular functions is always hoisted to the top of script's declarations. It needs to explicitly wirte his return statament.
    A Arrow Function is a more 'convinient' way to avoid this hoisting behavior and also she has its own functionalities and tricks like a easily way to write return stataments.

2.What is a React Component?
    Just a piece of reusable code.

3.How do you make a React functional component?
    By just writing a function that returns a JSX element.

4. What is the difference between a pure JavaScript function and a functional component?
    Pure js functions can't return a JSX element, a functional component, instead, can.

5. How small is a React component?
    The smallest component is just a function that returns a simple HTML element like a button, paragraph or input.

6. Can we make a button or input field component?
    Yes.

7. Make a reusable Button component.

8. Make a reusable InputField component.

9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
*/

// 7. Make a reusable Button component.
const Button = () => <button>Reusable!</button>;

// 8. Make a reusable InputField component.
const Input = ({
  labelFor = "name",
  inputType = "text",
  inputName = "name",
  inputId = "name",
}) => (
  <div>
    <label htmlFor={labelFor}></label>
    <input type={inputType} name={inputName} id={inputId} />
  </div>
);

// 9. Make a reusable alert box component with one div parent element and one p child element of the div(warning alert box, success alert box).
const AlertBox = () => (
  <div>
    <p className="alertbox alertbox--warning">Warning alert!</p>
    <p className="alertbox alertbox--sucess">Sucess alert!</p>
  </div>
);

function App() {
  return (
    <div className="App">
      <Button></Button>
      {Input("math", "number", "math", "myinput")}
      <AlertBox></AlertBox>
    </div>
  );
}

export default App;
