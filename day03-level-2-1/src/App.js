import logo from "./logo.svg";
import "./App.css";
import html_logo from "./images/html-svgrepo-com.svg";
import css_logo from "./images/css-svgrepo-com.svg";
import js_logo from "./images/js-svgrepo-com.svg";
import react_logo from "./images/reactjs-svgrepo-com.svg";

function svg(svgFile) {
  return <img src={svgFile} alt="alt" />;
}

function App() {
  return (
    <div className="App">
      {svg(html_logo)}
      {svg(css_logo)}
      {svg(js_logo)}
      {svg(react_logo)}
    </div>
  );
}

export default App;
