function findMaxNumber(arr) {
  let num = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > num) {
      num = arr[i];
    }
  }
  return num;
}

module.exports = findMaxNumber;
