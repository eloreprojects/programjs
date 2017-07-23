module.exports = (array) => {
  let i;
  let j;
  let current;

  for (i = 0; i < array.length; i += 1) {
    current = array[i];

    for (j = i - 1; array[j] > current && j >= 0; j -= 1) {
      array[j + 1] = array[j];
    }

    array[j + 1] = current;
  }

  return array;
};
