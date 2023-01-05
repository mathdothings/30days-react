import "./App.css";
import htmlLogo from "./html-svgrepo-com.svg";
import cssLogo from "./css-svgrepo-com.svg";
import jsLogo from "./js-svgrepo-com.svg";
import reactLogo from "./reactjs-svgrepo-com.svg";

const updateProfile = ({ name, age, nacionality, location }) => {
  return `${name} ${age} ${nacionality} ${location}`;
};

const Elon = {
  name: "Elon Musk",
  age: 41,
  nacionality: "USA",
  location: "Space X",
};

console.log(updateProfile(Elon));

const updateList = ([first, second, third]) => {
  return `${first} ${second} ${third}`;
};

console.log(updateList([10, 3, 7]));

const Image = (props) => {
  return <img src={props.imgSrc} alt={props.imgAlt} />;
};

const Title = ({ content, color, fontFamily, textAlign }) => {
  return (
    <h1 style={{ color: color, fontFamily: fontFamily, textAlign: textAlign }}>
      {content}
    </h1>
  );
};

const Input = (props) => <input {...props} />;

function App() {
  return (
    <div>
      <Title
        content={"Hello, world!"}
        color={"yellow"}
        fontFamily={"monospace"}
        textAlign={"center"}
      />
      <Input type="number" />
      <Image imgSrc={htmlLogo} imgAlt="html logo" />
      <Image imgSrc={cssLogo} imgAlt="css logo" />
      <Image imgSrc={jsLogo} imgAlt="js logo" />
      <Image imgSrc={reactLogo} imgAlt="react logo" />
    </div>
  );
}

export default App;
