import "./App.css";

// hexadecimal color generator
const hexaColor = () => {
  let str = "0123456789abcdef";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length);
    color += str[index];
  }
  return color;
};

// random card's background color style generator
const cardStyle = () => {
  return { backgroundColor: `${hexaColor()}` };
};

// single card componet generator
const Card = (key = 0) => {
  const style = cardStyle();
  return (
    <div style={style} className="card" key={key}>
      {style.backgroundColor}
    </div>
  );
};

// multiple card component generator
const GenerateCards = (amout = 1) => {
  const cards = [];
  if (amout >= 1) {
    for (let x = 0; x < amout; x++) {
      cards.push(Card(x));
    }
  }

  return cards;
};

function App() {
  return <div>{GenerateCards(10)}</div>;
}

export default App;
