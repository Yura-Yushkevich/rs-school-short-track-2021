const matrix = [
  [true, false, false],
  [false, true, false],
  [false, false, false]];

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
console.log(minesweeper(matrix));
