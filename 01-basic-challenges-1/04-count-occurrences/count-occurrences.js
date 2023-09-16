function countOccurrences(str, char) {
  let num = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      num++;
    } else {
      continue;
    }
  }
  return num;
}

module.exports = countOccurrences;
