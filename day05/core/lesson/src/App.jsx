import "./App.css";

//component syntax
// User component, component should start with an uppercase
const User = (props) => (
  <div>
    <h1 className={props.class}>
      {props.firstName}
      {props.lastName}
    </h1>
    <small>{props.country}</small>
  </div>
);

const welcome = "Welcome to 30 Days Of React";
const title = "Getting Started React";
const subtitle = "JavaScript Library";
const author = {
  firstName: "Asabeneh",
  lastName: "Yetayeh",
};
const date = "Oct 4, 2020";

// Header Component
const Header = (props) => {
  // console.log(props); // empty object, {}
  return (
    <header>
      <div className="header-wrapper">
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {author.firstName} {author.lastName}
        </p>
        <small>{date}</small>
      </div>
    </header>
  );
};

const Input = (attributes) => <input {...attributes} />;

function App() {
  return (
    <div>
      <Header />
      <Input type="number" />
    </div>
  );
}

export default App;
