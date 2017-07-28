const factorial = require('../src/algorithms/factorial');

module.exports = () => {
  const numbers = [-1, 0, 1, 2, 5, 10];
  const answers = [-1, 1, 1, 2, 120, 3628800];
  const attempt = [];
  let flag = false;

  for (let i = 0; i < numbers.length; i += 1) {
    attempt.push(factorial(numbers[i]));
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
