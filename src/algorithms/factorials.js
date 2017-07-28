const calculateFactorial = (args) => {
  if (args < 0) {
    return undefined;
  }
  if (args === 0) {
    return 1;
  }
  if (args === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 1; i <= args; i += 1) {
    result *= i;
  }
  return result;
};

module.exports = (args) => {
  if (Array.isArray(args) && args.length !== 0) {
    args = args.map(calculateFactorial);
  } else if (Number.isInteger(args)) {
    args = calculateFactorial(args);
  } else {
    args = 'You stupid piece of shit...';
  }
  return args;
};

