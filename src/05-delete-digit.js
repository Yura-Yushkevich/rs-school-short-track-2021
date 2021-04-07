/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */

function deleteDigit(n) {
  const strNum = n.toString();
  const arrNum = [];
  let strLeft = '';
  let strRight = '';
  let strCommon = '';
  for (let i = 0; i < strNum.length; i++) {
    strLeft = strNum.slice(0, i);
    strRight = strNum.slice(i + 1, strNum.length);
    strCommon = strLeft + strRight;
    arrNum.push(+strCommon);
  }
  return Math.max.apply(null, arrNum);
}

// function deleteDigit(/* n */) {
//   throw new Error('Not implemented');
// }

module.exports = deleteDigit;
