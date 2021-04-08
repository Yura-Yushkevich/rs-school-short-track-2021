const n = 91;

function getSumOfDigits(num) {
  const arrNum = num.toString().split('').map(Number);
  let arrSum = arrNum.reduce((sum, cur) => sum + cur);
  if (arrSum.toString().length > 1) {
    arrSum = getSumOfDigits(arrSum);
  }
  return arrSum;
}
console.log(getSumOfDigits(n));
