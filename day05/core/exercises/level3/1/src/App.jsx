import "./App.css";

const genetateRandomRGB = () => {
  const colors = [];

  // generates a random number between 0 and 256
  const random = () => Math.floor(Math.random() * 256);
  for (let x = 0; x < 3; x++) {
    colors.push(random());
  }

  return `rgb(${colors.join(", ")})`;
};

const Card = ({ backgroundColor }) => {
  return <div style={{ backgroundColor }}>{backgroundColor}</div>;
};

function App() {
  return (
    <>
      <Card backgroundColor={genetateRandomRGB()} />
      <Card backgroundColor={genetateRandomRGB()} />
      <Card backgroundColor={genetateRandomRGB()} />
      <Card backgroundColor={genetateRandomRGB()} />
      <Card backgroundColor={genetateRandomRGB()} />
    </>
  );
}

export default App;
