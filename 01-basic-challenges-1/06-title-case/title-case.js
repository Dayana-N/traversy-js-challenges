function titleCase(str) {
  strArr = str.toLowerCase().split(' ');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = strArr[i][0].toUpperCase() + strArr[i].slice(1);
  }
  let result = strArr.join(' ');
  return result;
}

module.exports = titleCase;
