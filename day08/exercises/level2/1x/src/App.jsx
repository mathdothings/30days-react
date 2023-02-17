import "./App.css";
import React from "react";
import { Sun, Moon } from "react-feather";

class Navegation extends React.Component {
  render() {
    const { theme } = this.props.state;
    const changeState = this.props.changeState;
    return (
      <nav className="nav">
        <ul className="nav_menu">
          <li className="nav_menu_item">Home</li>
          <li className="nav_menu_item">Products</li>
          <li className="nav_menu_item">Testimonials</li>
          <li className="nav_menu_item">About</li>
          <li
            className={`${theme} nav_menu_item nav_menu_item--theme-button`}
            onMouseDown={() => {
              const value = theme === "light" ? "dark" : "light";
              changeState({ theme: value });
            }}
          >
            {theme === "light" ? <Sun size={"1rem"} /> : <Moon size={"1rem"} />}
          </li>
        </ul>
      </nav>
    );
  }
}

class App extends React.Component {
  state = { theme: "light" };

  changeState = (prop = { key: value }) => {
    this.setState(prop);
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <Navegation state={this.state} changeState={this.changeState} />
      </>
    );
  }
}

export default App;
