import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <h1>Welcome to 30 Days of React</h1>
        <h2>Getting Started React</h2>
        <h3>JavaScript Library</h3>
        <hr />
      </header>
    );
  }
}

class Main extends React.Component {
  render() {
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
}

class Card extends React.Component {
  greetPeople = () => {
    alert("Hello, welcome!");
  };

  showTime = () => {
    alert(new Date());
  };

  render() {
    return (
      <div className={this.props.theme}>
        <img src="http://via.placeholder.com/640x640" alt="profile" />
        <p>Mathdothings</p>
        <button type="button" onClick={this.greetPeople}>
          Greet People
        </button>
        <button type="button" onClick={this.showTime}>
          Show Time
        </button>
        <button type="button" onClick={this.props.updateState}>
          Change Background
        </button>
        <hr />
      </div>
    );
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <small>Copyright 2023 - @mathdothings</small>
      </footer>
    );
  }
}

export { Header, Main, Card, Footer };
