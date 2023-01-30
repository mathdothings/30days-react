import React from "react";
import "./App.css";
import logo from "./assets/react.svg";

class Images extends React.Component {
  render() {
    return (
      <div>
        <img src={logo} alt="" style={{ height: "100px" }} />
        <img src={logo} alt="" style={{ height: "100px" }} />
        <img src={logo} alt="" style={{ height: "100px" }} />
        <img src={logo} alt="" style={{ height: "100px" }} />
      </div>
    );
  }
}

class Form extends React.Component {
  render() {
    const inputStyle = {
      padding: "0.55rem",
      borderRadius: "0.25rem",
      border: "none",
    };
    return (
      <div
        style={{
          borderRadius: "1rem",
          padding: "1rem",
          margin: "1rem 0",
          backgroundColor: "darkturquoise",
        }}
      >
        <h1 style={{ textTransform: "uppercase", fontSize: "2rem" }}>
          subscribe
        </h1>
        <small
          style={{
            display: "inline-block",
            marginBottom: "1rem",
          }}
        >
          Sign up with your email address to receive news and updates.
        </small>
        <div style={{ display: "flex", placeItems: "center", gap: "1rem" }}>
          <input style={inputStyle} type="text" placeholder="First name" />
          <input style={inputStyle} type="text" placeholder="Last name" />
          <input style={inputStyle} type="text" placeholder="Email name" />
        </div>
        <button style={{ marginTop: "1rem", backgroundColor: "salmon" }}>
          Subscribe
        </button>
      </div>
    );
  }
}

function generateRandomHexadecimalColor() {
  const rnd = () => Math.floor(Math.random() * 16);
  const hexaValues = "0123456789abcdef";
  let color = "#";
  for (let x = 0; x < 6; x++) {
    color += hexaValues[rnd()];
  }

  return { color };
}

class HexadecimalColorCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.color);
    const { color } = this.props.color;

    return (
      <>
        <div
          style={{
            backgroundColor: color,
            padding: "0.35rem",
            color: "white",
            fontFamily: "monospace",
          }}
        >
          {color.toLocaleUpperCase()}
        </div>
      </>
    );
  }
}

function App() {
  return (
    <>
      <Images />
      <Form />
      <HexadecimalColorCard color={generateRandomHexadecimalColor()} />
      <HexadecimalColorCard color={generateRandomHexadecimalColor()} />
      <HexadecimalColorCard color={generateRandomHexadecimalColor()} />
      <HexadecimalColorCard color={generateRandomHexadecimalColor()} />
      <HexadecimalColorCard color={generateRandomHexadecimalColor()} />
    </>
  );
}

export default App;
