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
    let theme = this.state.theme === "light" ? "dark" : "light";
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
        <Card theme={this.state.theme} updateState={this.updateState} />
        <Footer />
      </>
    );
  }
}

export default App;
