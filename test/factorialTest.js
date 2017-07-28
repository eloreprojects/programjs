const factorials = require('../src/algorithms/factorials');

module.exports = () => {
  const numbers = [0, 1, 2, 5, 10];
  const answers = [1, 1, 2, 120, 3628800];
  console.log(`Initial Array: ${numbers.join(' ')}`);
  const factorialResult = factorials(numbers);
  console.log(`Factorial Array: ${numbers.join(' ')}`);
  for (let i = 0; i < factorialResult.length; i += 1) {
    if (factorialResult[i] !== answers[i]) {
      return false;
    }
  }
  return true;
};
