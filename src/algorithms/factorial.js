const calculateFactorial = (n) => {
  if (n < 0) {
    return undefined;
  }
  let result = 1;
  if (n === 0 || n === 1) {
    return result;
  }
  for (let i = 1; i <= n; i += 1) {
    result *= i;
  }
  return result;
};

module.exports = (n) => {
  if (Array.isArray(n) && n.length !== 0) {
    n = n.map(calculateFactorial);
  } else if (Number.isInteger(n)) {
    n = calculateFactorial(n);
  } else {
    n = 'Argument not a number.';
  }
  return n;
};

