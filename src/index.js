const arr = [-1, -1, -1, -1, -1];

function sortByHeight(ar) {
  const arrPosOne = [];

  ar.forEach((el, i) => {
    if (el === -1) {
      arrPosOne.push(i);
    }
  });

  const arrNum = ar.filter((num) => num !== -1).sort((a, b) => a - b);

  if (arrNum) {
    arrPosOne.forEach((el) => {
      arrNum.splice(el, 0, -1);
    });
  } else {
    arrPosOne.forEach(() => {
      arrNum.push(-1);
    });
  }
  return arrNum;
}

console.log(sortByHeight(arr));
