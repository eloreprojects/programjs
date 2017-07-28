const factorial = require('../src/algorithms/factorial');

module.exports = () => {
  const numbers = [-1, 0, 1, 2, 5, 10];
  const answers = [undefined, 1, 1, 2, 120, 3628800];
  console.log(`Initial Array: ${numbers.join(' ')}`);
  const factorialResult = factorial(numbers);
  console.log(`Factorial Array: ${numbers.join(' ')}`);
  for (let i = 0; i < factorialResult.length; i += 1) {
    if (factorialResult[i] !== answers[i]) {
      return false;
    }
  }
  return true;
};
