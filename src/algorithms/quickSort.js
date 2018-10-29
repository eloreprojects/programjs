function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, pivot, left, right) {
  const pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i += 1) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex += 1;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function quickSort(array, left, right) {
  let pivot; let
    partitionIndex;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

module.exports = quickSort;
