import React from "react";
import "./App.css";
import Projects from "./Components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [
        { title: "Business Website", category: "Web Design" },
        { title: "Social App", category: "Mobile Development" },
        { title: "Ecommerce Shopping Cart", category: "Web Development" },
      ],
    };
  }
  render() {
    return <Projects projects={this.state.projects} />;
  }
}

export default App;
