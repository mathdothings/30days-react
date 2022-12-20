export function addTwo(a, b) {
  return a + b;
}
export function multiplyTwo(a, b) {
  return a * b;
}

export default (function doSomeMath() {
  return {
    addTwo,
    multiplyTwo,
  };
})();
