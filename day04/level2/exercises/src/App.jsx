import "./App.css";
import html_logo from "./html-svgrepo-com.svg";
import css_logo from "./css-svgrepo-com.svg";
import js_logo from "./js-svgrepo-com.svg";
import react_logo from "./reactjs-svgrepo-com.svg";

function App() {
  return (
    <div className="container">
      <div className="logos">
        <img src={html_logo} alt="" />
        <img src={css_logo} alt="" />
        <img src={js_logo} alt="" />
        <img src={react_logo} alt="" />
      </div>

      <div>
        <form className="form" action="">
          <div>
            <h1 className="title">Subscribe</h1>
            <p className="message">
              Sign up with your email address to receive news and updates.
            </p>
          </div>
          <div className="form__input-container">
            <input
              className="text-input"
              type="text"
              placeholder="Frist name"
            />
            <input className="text-input" type="text" placeholder="Last name" />
            <input className="text-input" type="text" placeholder="Email" />
          </div>
          <div>
            <button className="submit-button">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
