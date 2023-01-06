import "./App.css";

// array of numbers
const numbers = [1, 2, 3, 4, 5];

// array of arrays
const skills = [
  ["HTML", 10],
  ["CSS", 7],
  ["JavaScript", 9],
  ["React", 8],
];

const destruct = (array) => {
  return array.map(([skill, level]) => `Skill: ${skill}, Level: ${level}`);
};

console.log(destruct(skills));

const NumbersList = ({ numbers }) => {
  const list = numbers.map((item, index) => <li key={index}>{item}</li>);
  return (
    <div className="container">
      <div>
        <h1>Numbers List</h1>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

const TechList = ({ skills: [tech, level] }) => {
  const skillsList = skills.map(([skill, level], index) => (
    <li key={index}>
      {skill} {level}
    </li>
  ));
  return <ul>{skillsList}</ul>;
};

function App() {
  return (
    <>
      <NumbersList numbers={numbers} />
      <TechList skills={skills} />
    </>
  );
}

export default App;
