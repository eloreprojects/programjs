const permutations = require('../src/algorithms/permutations');

module.exports = () => {
  const inputs = [[10, 4], [2, 1], [0, 0], [1, 1], [2, 4]];
  const answers = [5040, 2, 1, 1, -1];
  const attempt = [];
  let flag = false;

  for (let i = 0; i < inputs.length; i += 1) {
    attempt.push(permutations(inputs[i][0], inputs[i][1]));
    if (attempt[i] !== answers[i]) {
      flag = true;
    }
  }
  console.log(`Input array: ${inputs.join(' ')}`);
  console.log(`Answer array: ${answers.join(' ')}`);
  console.log(`Attempted array: ${attempt.join(' ')}`);

  if (flag) {
    return false;
  }
  return true;
};
