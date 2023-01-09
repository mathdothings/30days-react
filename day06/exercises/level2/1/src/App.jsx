import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

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

function generateNumbers() {
  const numbersLength = 32;
  const numbers = [];
  for (let x = 0; x < numbersLength; x += 1) {
    numbers.push(x);
  }

  return numbers;
}

function App() {
  return;
}

export default App;
