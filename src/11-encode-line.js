/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(s) {
  let res = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char !== s[i + 1]) {
      res += char;
    } else {
      let count = 1;
      while (char === s[i + 1]) {
        count++;
        i++;
      }
      res += `${count}${char}`;
    }
  }
  return res;
}

module.exports = encodeLine;
