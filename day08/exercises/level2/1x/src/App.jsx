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
            onMouseEnter={this.props.changeState}
          >
            {this.props.changeIcon()}
          </li>
        </ul>
      </nav>
    );
  }
}

class App extends React.Component {
  state = { theme: "light" };

  changeState = () => {
    const theme = this.state.theme === "light" ? "dark" : "light";

    if (theme === "light") {
      this.setState({ theme });
    }
    if (theme === "dark") {
      this.setState({ theme });
    }
  };

  changeIcon = () => {
    if (this.state.theme === "light") return <Sun />;
    if (this.state.theme === "dark") return <Moon />;
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <Navegation
          theme={this.state.theme}
          themeIcon={this.state.themeIcon}
          changeState={this.changeState}
          changeIcon={this.changeIcon}
        />
      </>
    );
  }
}

export default App;
