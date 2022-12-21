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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam saepe
      quidem explicabo veritatis earum minima provident quo nobis doloremque,
      ducimus nemo blanditiis ut! Consequuntur voluptatem, nisi quasi
      necessitatibus reprehenderit ducimus.
    </p>
  </main>
);

const footer = (
  <footer>
    <h3>Footer</h3>
    <small>Lorem ipsum dolor sit amet.</small>
  </footer>
);

const app = (
  <div className="App">
    {header}
    {main}
    {footer}
  </div>
);

function App() {
  return app;
}

export default App;
