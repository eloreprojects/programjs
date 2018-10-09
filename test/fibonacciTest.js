const fibonacci = require('../src/algorithms/fibonacci');

module.exports = () => {
  const numbers = [-1, 0, 1, 2, 3, 5, 10];
  const answers = [-1, -1, 1, 1, 2, 5, 55];
  const attempt = [];
  let flag = false;

  for (let i = 0; i < numbers.length; i += 1) {
    attempt.push(fibonacci(numbers[i]));
    if (attempt[i] !== answers[i]) {
      flag = true;
    }
  }

  console.log(`Input array: ${numbers.join(' ')}`);
  console.log(`Answer array: ${answers.join(' ')}`);
  console.log(`Attempted array: ${attempt.join(' ')}`);

  if (flag) {
    return false;
  }
  return true;
};
