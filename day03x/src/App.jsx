import "./App.css";

const header = (
  <header>
    <h1>Header</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
      debitis.
    </p>
  </header>
);

const main = (
  <main>
    <h2>Main</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos error
      similique magnam quis fuga facere iure beatae distinctio odit? Culpa.
    </p>
  </main>
);

const footer = (
  <footer>
    <h3>Footer</h3>
    <small>Lorem ipsum dolor sit amet.</small>
  </footer>
);

const app = [header, main, footer];

function App() {
  return <div className="App">{app}</div>;
}

export default App;
