import "./App.css";
import Classes from "./class";
import React from "react";

const square = new Classes.Square(5);
const rectangle = new Classes.Rectangle(2, 5);
const triangle = new Classes.Triangle(10, 5);
console.log(rectangle, triangle, triangle.area);

class Header extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header>
        <div className="header-wrapper">
          <h1>{this.props.data.welcome}</h1>
          <h2>{this.props.data.title}</h2>
          <h3>
            {this.props.data.author.firstName} {this.props.data.author.lastName}
          </h3>
          <small>{this.props.data.date}</small>
        </div>
      </header>
    );
  }
}

class Footer extends React.Component {
  render() {
    return <footer>Coded by: @mathdothings</footer>;
  }
}

const App = () => {
  const data = {
    welcome: "Welcome to 30 Days Of React",
    title: "Getting Started React",
    subtitle: "JavaScript Library",
    author: {
      firstName: "Asabeneh",
      lastName: "Yetayeh",
    },
    date: "Oct 7, 2020",
  };

  return (
    <div className="app">
      <Header data={data} />
      <Footer />
    </div>
  );
};

export default App;
