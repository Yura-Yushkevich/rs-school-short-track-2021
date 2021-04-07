/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(ar) {
  const arrPosOne = [];

  ar.forEach((el, i) => {
    if (el === -1) {
      arrPosOne.push(i);
    }
  });

  const arrNum = ar.filter((num) => num !== -1).sort((a, b) => a - b);
  arrPosOne.forEach((el) => {
    arrNum.splice(el, 0, -1);
  });

  return arrNum;
}

// function sortByHeight(/* arr */) {
//   throw new Error('Not implemented');
// }

module.exports = sortByHeight;
