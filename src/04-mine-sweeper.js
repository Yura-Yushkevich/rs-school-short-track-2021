/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(mat) {
  const defaultMine = [];
  for (let col = 0; col < mat.length; col++) {
    const arrCreateArr = [];
    for (let row = 0; row < mat[col].length; row++) {
      if (mat[col][row] === true) {
        arrCreateArr.push('!');
      } else {
        arrCreateArr.push(0);
      }
    }
    defaultMine.push(arrCreateArr);
  }

  for (let col = 0; col < defaultMine.length; col++) {
    for (let row = 0; row < defaultMine[col].length; row++) {
      if (defaultMine[col][row] === '!') {
        if (col !== 0) {
          defaultMine[col - 1][row]++;
          if (row < defaultMine[col].length - 1 && defaultMine[col - 1][row + 1] !== '!') {
            defaultMine[col - 1][row + 1]++;
          }
          if (row !== 0 && defaultMine[col - 1][row - 1] !== '!') {
            defaultMine[col - 1][row - 1]++;
          }
        }
        if (row < defaultMine[col].length - 1) {
          defaultMine[col][row + 1]++;
        }
        if (col < defaultMine.length - 1) {
          defaultMine[col + 1][row]++;
          if (row < defaultMine[col].length - 1 && defaultMine[col + 1][row + 1] !== '!') {
            defaultMine[col + 1][row + 1]++;
          }
          if (row !== 0 && defaultMine[col + 1][row - 1] !== '!') {
            defaultMine[col + 1][row - 1]++;
          }
        }
        if (row !== 0) {
          defaultMine[col][row - 1]++;
        }
      }
    }
  }

  for (let col = 0; col < defaultMine.length; col++) {
    for (let row = 0; row < defaultMine[col].length; row++) {
      if (defaultMine[col][row] === '!') {
        defaultMine[col][row] = 1;
      }
    }
  }

  return defaultMine;
}

// function minesweeper(/* matrix */) {
//   throw new Error('Not implemented');
// }

module.exports = minesweeper;
