import "./App.css";
import html_logo from "./images/html-svgrepo-com.svg";
import css_logo from "./images/css-svgrepo-com.svg";
import js_logo from "./images/js-svgrepo-com.svg";
import react_logo from "./images/reactjs-svgrepo-com.svg";

function svg(svgFile, alt = "img alt") {
  return <img src={svgFile} alt={alt} />;
}

function App() {
  return (
    <div className="App">
      {svg(html_logo, "HTML Logo")}
      {svg(css_logo, "CSS Logo")}
      {svg(js_logo, "JS Logo")}
      {svg(react_logo, "React Logo")}
    </div>
  );
}

export default App;
