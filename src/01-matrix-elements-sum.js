/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * let matrix = [
 *     [0, 1, 1, 2],
 *     [0, 5, 0, 0],
 *     [2, 0, 3, 3],
 * ];
*The result should be 9
*/

function getMatrixElementsSum(m) {
  let sum = 0;

  for (let i = 0; i < m[0].length; i++) {
    for (let k = 0; k < m.length; k++) {
      if (m[k][i] !== 0) {
        sum += m[k][i];
      } else {
        k = m.length;
      }
    }
  }
  return sum;
}
// function getMatrixElementsSum(/* matrix */) {
//   throw new Error('Not implemented');
// }

module.exports = getMatrixElementsSum;
