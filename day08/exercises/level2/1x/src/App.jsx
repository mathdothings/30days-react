import "./App.css";
import React from "react";

class Navegation extends React.Component {
  capitalize = (entireWord) => {
    entireWord = this.props.theme;
    const firstLetter = entireWord.charAt(0).toLocaleUpperCase();
    return `${firstLetter + entireWord.slice(1)}`;
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
            className="nav_menu_item nav_menu_item--theme-select"
            onMouseEnter={this.props.changeState}
          >
            {this.capitalize(this.props.theme)}
          </li>
        </ul>
      </nav>
    );
  }
}

class App extends React.Component {
  state = { theme: "light" };
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
