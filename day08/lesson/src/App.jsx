import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Person from "./class";

class App extends React.Component {
  state = { count: 0 };

  addOne = () => {
    this.setState({ count: this.state.count + 1 });
  };

  minusOne = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const count = this.state.count;

    return (
      <div className="App">
        <h1>{count}</h1>
        <button onClick={this.addOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
      </div>
    );
  }
}

export default App;
