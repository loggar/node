const isMonotonic = function (arr = []) {
  if (arr.length < 2) {
    return true;
  }

  let isInc = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isInc = false;
      break;
    }
  }

  let isDec = true;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      isDec = false;
      break;
    }
  }

  return isInc || isDec;
};

module.exports = {
  isMonotonic: isMonotonic,
};

/*
true
[]
[1]
[1, 2]
[1, 1, 1, 1, 1, 1]
[1, 1, 2, 2, 3, 4, 4, 5]
[5, 4, 4, 3, 2, 2, 1, 0, 0, -1]
[-1, -5, -10, -1100, -1100, -1101, -2000]
[1, 5, 10, 1100, 1101, 1102, 2000]

false
[1, 2, 4, 3]
[5, 5, 4, 3, 3, 1, 2, 0]
[-1, -5, -10, -1100, -900, -1101, -1102, -2000]
[1, 2, 0]
[1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11]
*/

/*
console.log(isMonotonic([]));
console.log(isMonotonic([1]));
console.log(isMonotonic([1, 2]));
console.log(isMonotonic([1, 1, 1, 1, 1, 1]));
console.log(isMonotonic([1, 1, 2, 2, 3, 4, 4, 5]));
console.log(isMonotonic([5, 4, 4, 3, 2, 2, 1, 0, 0, -1]));
console.log(isMonotonic([-1, -5, -10, -1100, -1100, -1101, -2000]));
console.log(isMonotonic([1, 5, 10, 1100, 1101, 1102, 2000]));
console.log(!isMonotonic([1, 2, 4, 3]));
console.log(!isMonotonic([5, 5, 4, 3, 3, 1, 2, 0]));
console.log(!isMonotonic([-1, -5, -10, -1100, -900, -1101, -1102, -2000]));
console.log(!isMonotonic([1, 2, 0]));
console.log(!isMonotonic([1, 1, 2, 3, 4, 5, 5, 5, 6, 7, 8, 7, 9, 10, 11]));
*/
