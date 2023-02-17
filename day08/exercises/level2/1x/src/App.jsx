import "./App.css";
import React from "react";
import { Sun, Moon } from "react-feather";

class Navegation extends React.Component {
  render() {
    return (
      <nav className="nav">
        <ul className="nav_menu">
          <li className="nav_menu_item">Home</li>
          <li className="nav_menu_item">Products</li>
          <li className="nav_menu_item">Testimonials</li>
          <li className="nav_menu_item">About</li>
          <li
            className={`${this.props.theme} nav_menu_item nav_menu_item--theme-button`}
            onMouseDown={this.props.changeTheme}
          >
            {this.props.changeIcon(this.props.theme)}
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

  inactiveTheme = () => {
    const theme = this.state.theme === "light" ? "dark" : "light";
    return theme;
  };

  changeTheme = () => {
    this.changeState("theme", this.inactiveTheme());
  };

  changeIcon = (theme) => {
    if (theme === "light") return <Sun size={"1rem"} />;
    if (theme === "dark") return <Moon size={"1rem"} />;
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <Navegation
          theme={this.state.theme}
          changeState={this.changeState}
          changeTheme={this.changeTheme}
          changeIcon={this.changeIcon}
          inactiveTheme={this.inactiveTheme}
        />
      </>
    );
  }
}

export default App;
