import "./App.css";

const getBodyOffsetWidth = () => {
  const body = document.querySelector("body");
  body.onresize = () => {
    return body.offsetWidth;
  };

  return body.offsetWidth;
};

const Header = () => {
  const size = getBodyOffsetWidth();
  return (
    <header>
      <img
        src={`${"https://via.placeholder.com/" + Math.floor(size / 5)}`}
        alt=""
      />
    </header>
  );
};

const Main = () => (
  <main>
    <h1>Mathdothings</h1>
    <p>Junior Web Developer</p>
    <h2>Skills</h2>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JS</li>
      <li>React</li>
    </ul>
  </main>
);

const Footer = () => (
  <footer>
    <small>Coded by: @mathdothings</small>
  </footer>
);

const Application = () => (
  <article>
    <Header />
    <Main />
    <Footer />
  </article>
);

function App() {
  return <Application />;
}

export default App;
