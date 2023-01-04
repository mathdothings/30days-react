import logo from "./logo.svg";
import "./App.css";
import htmlLogo from "./html-svgrepo-com.svg";
import cssLogo from "./css-svgrepo-com.svg";
import jsLogo from "./js-svgrepo-com.svg";
import reactLogo from "./reactjs-svgrepo-com.svg";

const Image = (props) => {
  return <img src={props.imgSrc} alt={props.imgAlt} />;
};

function App() {
  return (
    <div>
      <Image imgSrc={htmlLogo} imgAlt="html logo" />
      <Image imgSrc={cssLogo} imgAlt="css logo" />
      <Image imgSrc={jsLogo} imgAlt="js logo" />
      <Image imgSrc={reactLogo} imgAlt="react logo" />
    </div>
  );
}

export default App;
