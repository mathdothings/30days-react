import "./App.css";

// array of numbers
const numbers = [1, 2, 3, 4, 5];

// array of arrays
const skills = [
  ["HTML", 10, "Professional"],
  ["CSS", 7, "Intermidiate"],
  ["JavaScript", 9, "Professional"],
  ["React", 8, "Intermediate"],
];

const destructSkills = (array) => {
  return array.map(([skill, level, grade]) => `${skill}, ${level}, ${grade}`);
};

console.log(destructSkills(skills));

const countries = [
  { name: "Finland", city: "Helsinki" },
  { name: "Sweden", city: "Stockholm" },
  { name: "Denmark", city: "Copenhagen" },
  { name: "Norway", city: "Oslo" },
  { name: "Iceland", city: "Reykjavík" },
];

const destructCountries = (array) => {
  return array.map(({ name, city }) => `${name}, ${city}`);
};

console.log(destructCountries(countries));

const Country = ({ country: { name, city } }) => (
  <div>
    <p>
      {name}: {city}
    </p>
  </div>
);

const Countries = ({ countries }) =>
  countries.map((country, index) => <Country country={country} key={index} />);

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

const TechList = ({ skills }) => {
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
      <Countries countries={countries} />
    </>
  );
}

export default App;
