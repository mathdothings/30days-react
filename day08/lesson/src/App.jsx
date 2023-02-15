import React from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Person from "./class";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.addOne = this.addOne.bind(this);
  }

  state = { count: 0 };

  addOne() {
    return this.setState({ count: this.state.count + 1 });
  }

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

class ShowImage extends React.Component {
  state = {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5wkc0OMXsy3CMnmKoKiAlPGZYKVI-IYUqQ&usqp=CAU",
  };

  changeAnimal = () => {
    const catURL =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE5wkc0OMXsy3CMnmKoKiAlPGZYKVI-IYUqQ&usqp=CAU";
    const dogURL =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBjerXruaS8acItMK6nbaUFz9vjU-F21dYA&usqp=CAU";
    let image = this.state.image === catURL ? dogURL : catURL;
    this.setState({ image });
  };

  render() {
    return (
      <div>
        <img
          src={this.state.image}
          alt=""
          style={{
            width: "200px",
            height: "200px",
            margin: "1rem 0",
            display: "block",
            borderRadius: "10px",
          }}
        />
        <button onClick={this.changeAnimal}>Change!</button>
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <>
        <Counter />
        <ShowImage />
      </>
    );
  }
}

export default App;
