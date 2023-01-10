function isPrime(number) {
  let divisors = 0;

  if (number === 1) {
    return true;
  }

  if (number > 2 && number % 2 === 0) {
    return false;
  }

  for (let x = 0; x <= number; x += 1) {
    if (number % x === 0) {
      divisors += 1;
    }
  }

  if (divisors === 2) {
    return true;
  }

  return false;
}

function isEven(number) {
  return number % 2 === 0;
}

function isOdd(number) {
  return !isEven(number);
}

function determineBackgroundColor(number) {
  let style = "";
  if (isEven(number)) {
    style = "is-even";
  }

  if (isOdd(number)) {
    style = "is-odd";
  }

  if (isPrime(number)) {
    style = "is-prime";
  }

  return style;
}

function generateNumbers(start, end) {
  const numbers = [];
  for (let x = start; x < end; x += 1) {
    numbers.push({
      value: x,
      backgroundColor: determineBackgroundColor(x),
    });
  }

  return numbers;
}

export default generateNumbers;
