import "./App.css";
import React from "react";

function Header() {
  return (
    <header>
      <h1>Welcome to 30 Days of React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
      <hr />
    </header>
  );
}

function Main() {
  return (
    <main>
      <p>Prerequisite to get started react.js</p>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
      </ul>
      <hr />
    </main>
  );
}

class Card extends React.Component {
  state = {
    background: "light",
    light: {
      backgroundColor: "rgba(0, 0, 0, 70%)",
      color: "white",
    },
    dark: {
      backgroundColor: "rgb(255, 255, 255)",
      color: "black",
    },
    style: {},
  };

  greetPeople = () => {
    alert("Hello, welcome!");
  };

  showTime = () => {
    alert(new Date());
  };

  changeBackground = () => {
    if (this.state.background === "light") {
      this.state.style = this.state.dark;
      this.state.background = "dark";
      this.setState({ style: this.state.style });
    } else {
      this.state.style = this.state.light;
      this.state.background = "light";
      this.setState({ style: this.state.style });
    }
  };

  render() {
    return (
      <div style={this.state.style}>
        <img src="http://via.placeholder.com/640x640" alt="profile" />
        <p>Mathdothings</p>
        <button type="button" onClick={this.greetPeople}>
          Greet People
        </button>
        <button type="button" onClick={this.showTime}>
          Show Time
        </button>
        <button type="button" onClick={this.changeBackground}>
          Change Background
        </button>
        <hr />
      </div>
    );
  }
}

function Footer() {
  return (
    <footer>
      <small>Copyright 2023 - @mathdothings</small>
    </footer>
  );
}

function App() {
  return (
    <>
      <Header />
      <Main />
      <Card />
      <Footer />
    </>
  );
}

export default App;
