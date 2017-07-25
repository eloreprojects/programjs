module.exports = (array) => {
  let min;

  for (let i = 0; i < array.length; i += 1) {
    min = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[min]) {
        min = j;
      }
    }

    if (min !== i) {
      const temp = array[i];
      array[i] = array[min];
      array[min] = temp;
    }
  }

  return array;
};
