import "./App.css";
import React from "react";
import { Sun, Moon } from "react-feather";

class Navegation extends React.Component {
  capitalize = (word) => {
    const firstLetter = word.charAt(0).toLocaleUpperCase();
    return `${firstLetter + word.slice(1)}`;
  };

  render() {
    return (
      <nav className="nav">
        <ul className={`${this.props.theme} nav_menu`}>
          <li className="nav_menu_item">Home</li>
          <li className="nav_menu_item">Products</li>
          <li className="nav_menu_item">Testimonials</li>
          <li className="nav_menu_item">About</li>
          <li
            className="nav_menu_item nav_menu_item--theme-button"
            onMouseEnter={this.props.changeState}
          >
            {this.props.themes}
          </li>
        </ul>
      </nav>
    );
  }
}

class App extends React.Component {
  state = { theme: <Sun /> };
  changeState = (key, value) => {
    this.setState({ [key]: value });
  };
  render() {
    return (
      <>
        <Navegation theme={this.state.theme} changeState={this.changeState} />
      </>
    );
  }
}

export default App;
