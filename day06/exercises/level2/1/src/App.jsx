import { useInsertionEffect, useState } from "react";
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

function determineBackgroundColor(number) {
  let backgroundColor = "";
  if (isEven(number)) {
    backgroundColor = "green";
  }

  if (isOdd(number)) {
    backgroundColor = "orange";
  }

  if (isPrime(number)) {
    backgroundColor = "red";
  }

  return backgroundColor;
}

function Numbers({ content, backgroundColor }) {
  const numbers = generateNumbers(0, 32);
  const numbersElements = numbers.map(({ backgroundColor, value }, index) => (
    <li key={index} className="number-card" style={{ backgroundColor }}>
      {(content = value)}
    </li>
  ));

  return numbersElements;
}

function App() {
  return (
    <ul className="numbers-list">
      <Numbers />
    </ul>
  );
}

export default App;
