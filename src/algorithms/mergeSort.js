function mergeSort(elements) {
  const n = elements.length;
  const halfArr = Math.floor(n / 2);
  if (n > 1) {
    let restArr;
    if (n % 2 !== 0) {
      restArr = (halfArr) + 1;
    } else {
      restArr = halfArr;
    }
    let a2 = [];
    let a3 = [];

    for (let i = 0; i < halfArr; i += 1) a2[i] = elements[i];

    let arrIndex = 0;
    for (let i = halfArr; i < n; i += 1) {
      a3[arrIndex] = elements[i];
      arrIndex += 1;
    }
    a2 = mergeSort(a2, halfArr);
    a3 = mergeSort(a3, restArr);

    const returnArr = [];
    let i = 0;
    let j = 0;
    for (let k = 0; k < n; k += 1) {
      if (i >= halfArr) {
        for (let k2 = k; k2 < n; k2 += 1) {
          returnArr[k2] = a3[j];
          j += 1;
        }
        break;
      } else if (j >= restArr) {
        for (let k2 = k; k2 < n; k2 += 1) {
          returnArr[k2] = a2[i];
          i += 1;
        }
        break;
      } else if (a2[i] < a3[j]) {
        returnArr[k] = a2[i];
        i += 1;
      } else if (a3[j] < a2[i]) {
        returnArr[k] = a3[j];
        j += 1;
      }
    }
    return returnArr;
  }
  return elements;
}

module.exports = mergeSort;
