import "./App.css";

const image = (
  <img
    className="profile-image"
    src="https://via.placeholder.com/150"
    alt="avatar"
  />
);
const name = <h1 className="title">Mathdothings</h1>;
const experience = <p className="experience">Junior Web Developer, Noneland</p>;
const description = <h2>Skills</h2>;
const skills = [
  <div className="skills">
    <p>HTML</p>
    <p>CSS</p>
    <p>JS</p>
    <p>React</p>
  </div>,
];

function App() {
  return (
    <div className="App">
      {image}
      {name}
      {experience}
      {description}
      {skills}
    </div>
  );
}

export default App;
