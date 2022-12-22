import "./App.css";
import html_logo from "./images/html-svgrepo-com.svg";
import css_logo from "./images/css-svgrepo-com.svg";
import js_logo from "./images/js-svgrepo-com.svg";
import react_logo from "./images/reactjs-svgrepo-com.svg";

function insertSvgAsImage(svgFile, alt = "img alt") {
  return <img src={svgFile} alt={alt} />;
}

function App() {
  return (
    <div className="App">
      {insertSvgAsImage(html_logo, "HTML Logo")}
      {insertSvgAsImage(css_logo, "CSS Logo")}
      {insertSvgAsImage(js_logo, "JS Logo")}
      {insertSvgAsImage(react_logo, "React Logo")}
    </div>
  );
}

export default App;
