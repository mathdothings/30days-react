import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

class App extends React.Component {
  state = { count: 0 };
  render() {
    const count = this.state.count;
    return (
      <div className="App">
        <h1>{count}</h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +1
        </button>
        <button
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

export default App;
