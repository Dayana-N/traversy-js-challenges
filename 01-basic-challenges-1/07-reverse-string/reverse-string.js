function reverseString(str) {
  reverse = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }
  return reverse;
}

module.exports = reverseString;
