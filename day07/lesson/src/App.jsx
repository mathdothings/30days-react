import "./App.css";
import Classes from "./class";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      welcome,
      title,
      author: { firstName, lastName },
      date,
    } = this.props.data;
    return (
      <header>
        <div className="header-wrapper">
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>
            {firstName} {lastName}
          </h3>
          <small>{date}</small>
        </div>
      </header>
    );
  }
}

class TechList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const techsFormatted = this.props.techs.map((tech) => (
      <li key={tech}>{tech}</li>
    ));
    return (
      <ul>
        <h2>Skills</h2>
        {techsFormatted}
      </ul>
    );
  }
}

const App = () => {
  return (
    <div className="app">
      <Header
        data={{
          welcome: "Welcome to 30 Days Of React",
          title: "Getting Started React",
          subtitle: "JavaScript Library",
          author: {
            firstName: "Asabeneh",
            lastName: "Yetayeh",
          },
          date: "Oct 7, 2020",
        }}
      />
      <TechList techs={["HTML", "CSS", "JS", "React", "Linux", "Bash"]} />
    </div>
  );
};

export default App;
