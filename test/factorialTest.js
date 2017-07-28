const factorials = require('../src/algorithms/factorials');

module.exports = () => {
  let numbers = [-1, 0, 1, 2, 5, 10];
  const answers = [undefined, 1, 1, 2, 120, 3628800];
  console.log(`Initial Array: ${numbers.join(' ')}`);
  numbers = factorials(numbers);
  console.log(`Sorted Array: ${numbers.join(' ')}`);
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] !== answers[i]) {
      return false;
    }
  }
  return true;
};
