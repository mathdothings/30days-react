import "./App.css";

const data = [
  { place: "world", value: 7693165599 },
  {
    place: "china",
    value: 1377422166,
  },
  {
    place: "india",
    value: 1295210000,
  },
  {
    place: "usa",
    value: 323947000,
  },
  {
    place: "indonesia",
    value: 258705000,
  },
  {
    place: "brazil",
    value: 206135893,
  },
  {
    place: "pakistan",
    value: 194125062,
  },
  {
    place: "nigeria",
    value: 186988000,
  },
  {
    place: "bangladesh",
    value: 161006790,
  },
  {
    place: "russia",
    value: 146599183,
  },
  {
    place: "japan",
    value: 126960000,
  },
];

const Box = () => {
  const range = data[1].value - data[data.length - 1].value;
  const step = Math.floor(range / 100);
  const total = step * 100;
  return (
    <div className="box">
      <Bar percentage={"10%"} amount={"10%"} />
      <Bar percentage={"20%"} amount={"20%"} />
      <Bar percentage={"30%"} amount={"30%"} />
      <Bar percentage={"40%"} amount={"40%"} />
      <Bar percentage={"50%"} amount={"50%"} />
      <Bar percentage={"60%"} amount={"60%"} />
      <Bar percentage={"70%"} amount={"70%"} />
      <Bar percentage={"80%"} amount={"80%"} />
      <Bar percentage={"90%"} amount={"90%"} />
      <Bar percentage={"100%"} amount={"100%"} />
      {/* {console.log("range:", range)}
      {console.log("step:", step)}
      {console.log("total:", total)} */}
      <p>I should do this boring math?</p>
    </div>
  );
};

const Bar = ({ percentage, amount }) => (
  <div className="bar" style={{ minWidth: percentage, maxWidth: "500px" }}>
    {amount}
  </div>
);

const Application = () => <Box />;

function App() {
  return (
    <>
      <Application />
    </>
  );
}

export default App;
