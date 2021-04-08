/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let partFirst = 0;
  let partSecond = array.length - 1;
  let target = -1;
  let devidePos = 0;

  while (target === -1) {
    devidePos = Math.floor((partFirst + partSecond) / 2);
    if (array[devidePos] === value) {
      target = devidePos;
    } else if (array[devidePos] < value) {
      partFirst = devidePos + 1;
    } else if (array[devidePos] > value) {
      partSecond = devidePos - 1;
    }
  }
  return target;
}

module.exports = findIndex;
