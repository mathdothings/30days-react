const generateHex = () => {
  let hex = "";
  const hexNums = "0123456789abcdef";

  const random = () => Math.floor(Math.random() * 16);

  for (let x = 0; x < 6; x += 1) {
    hex += hexNums[random()];
  }

  return "#" + hex;
};

const range = (start = 0, end = 1) => {
  const result = [];
  for (let x = start; x < end; x += 1) {
    result.push(x);
  }

  return result;
};

export { generateHex, range };
