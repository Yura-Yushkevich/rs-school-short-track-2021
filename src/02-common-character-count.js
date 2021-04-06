/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(str1, str2) {
  const s1Arr = str1.split('');
  const s2Arr = str2.split('');

  const sumArr = [];

  for (let i = 0; i < s1Arr.length; i++) {
    const pos = s2Arr.indexOf(s1Arr[i]);
    if (pos !== -1) {
      sumArr.push(s2Arr.splice(pos, 1));
    }
  }
  return sumArr.length;
}

// function getCommonCharacterCount(/* s1, s2 */) {
//   throw new Error('Not implemented');
// }

module.exports = getCommonCharacterCount;
