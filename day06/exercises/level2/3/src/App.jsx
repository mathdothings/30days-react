import "./App.css";

const data = [
  { place: "World", value: 7693165599 },
  {
    place: "China",
    value: 1377422166,
  },
  {
    place: "India",
    value: 1295210000,
  },
  {
    place: "USA",
    value: 323947000,
  },
  {
    place: "Indonesia",
    value: 258705000,
  },
  {
    place: "Brazil",
    value: 206135893,
  },
  {
    place: "Pakistan",
    value: 194125062,
  },
  {
    place: "Nigeria",
    value: 186988000,
  },
  {
    place: "Bangladesh",
    value: 161006790,
  },
  {
    place: "Russia",
    value: 146599183,
  },
  {
    place: "Japan",
    value: 126960000,
  },
];

const calculatePercentages = () => {
  const totalPopulation = data[0].value;
  const range = data[1].value - data[data.length - 1].value;
  const step = Math.floor(totalPopulation / 100); // step is equivalent to 1% of the total population
  return data.map((item) => `${item.place} ${(item.value / step).toFixed(2)}`);
};

const Box = () => {
  const percentages = calculatePercentages();
  return (
    <div className="box">
      {percentages.map((item, index) => (
        <Bar key={index} percentage={item.split(" ")[1]} amount={item + "%"} />
      ))}
    </div>
  );
};

const Bar = ({ percentage, amount }) => (
  <div className="bar" style={{ width: `${percentage}%`, maxWidth: "500px" }}>
    <pre style={{ margin: 0 }}>{amount}</pre>
  </div>
);

function App() {
  return (
    <>
      <Box />
    </>
  );
}

export default App;
