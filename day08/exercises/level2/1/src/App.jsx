import "./App.css";
import React from "react";
import { Header, Main, Card, Footer } from "./Components";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
    };
  }

  updateState = () => {
    const removeAllClass = (element) => {
      const list = element.classList;
      if (list.length > 0) {
        list.forEach((item) => {
          list.remove(item);
        });
      }
    };
    let theme = this.state.theme === "light" ? "dark" : "light";
    const body = document.querySelector("body");
    removeAllClass(body);
    body.classList.add(theme);
    this.setState({ theme });
  };

  componentDidUpdate() {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <Header />
        <Main />
        <Card updateState={this.updateState} />
        <Footer />
      </>
    );
  }
}

export default App;
