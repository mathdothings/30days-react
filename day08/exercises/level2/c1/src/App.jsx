import React from "react";
import "./App.css";
import { AddProject, Projects } from "./Components";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      projects: [],
    };
  }

  componentDidMount() {
    this.setState({
      projects: [
        { title: "Business Website", category: "Web Design" },
        { title: "Social App", category: "Mobile Development" },
        { title: "Ecommerce Shopping Cart", category: "Web Development" },
      ],
    });
  }

  addProject = (newProject) => {
    this.setState({ projects: this.state.projects.push(newProject) });
  };

  render() {
    return (
      <>
        <AddProject addProject={this.addProject} />
        <Projects projects={this.state.projects} />
      </>
    );
  }
}

export default App;
