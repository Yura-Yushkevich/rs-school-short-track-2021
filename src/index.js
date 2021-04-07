const num = 1001;

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
console.log(deleteDigit(num));
