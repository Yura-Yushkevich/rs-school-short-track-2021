const m = [
  [1, 2, 3, 4],
  [0, 5, 0, 0],
  [2, 0, 3, 3],
];

function getMatrixElementsSum(matrix) {
  let sum = 0;

  for (let i = 0; i < matrix[0].length; i++) {
    for (let k = 0; k < matrix.length; k++) {
      if (matrix[k][i] !== 0) {
        sum += matrix[k][i];
      } else {
        k = matrix.length;
      }
    }
  }
  return sum;
}

console.log(getMatrixElementsSum(m));
