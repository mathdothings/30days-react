const generateHex = () => {
  let hex = "";
  const hexNums = "0123456789abcdef";

  const random = () => Math.floor(Math.random() * 16);

  for (let x = 0; x < 6; x += 1) {
    hex += hexNums[random()];
  }

  return "#" + hex;
};

export default generateHex;
