import "./App.css";

const title = <h1>Subscribe</h1>;
const text = (
  <p>Sign up with your email address to receive news and updates.</p>
);
const form = (
  <form>
    <div className="form">
      <input
        type="text"
        name="firstname"
        id="firstname"
        placeholder="Firstname"
        required
      ></input>
      <input
        type="text"
        name="lastname"
        id="lastname"
        placeholder="Lastname"
        required
      ></input>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="Email"
        required
      ></input>
    </div>

    <input type="submit" value="Subscribe!"></input>
  </form>
);

function App() {
  return (
    <div className="App">
      {title}
      {text}
      {form}
    </div>
  );
}

export default App;
