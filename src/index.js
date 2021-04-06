const arr = [-1, 150, 190, 170, -1, -1, 160, 180];

function sortByHeight(ar) {
  const resArr = [];

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] === -1) {
      resArr.push(ar[i]);
    }
    if (resArr.length > 0) {
      let lastEl = resArr[resArr.length - 1];
      if (lastEl !== -1) {
        lastEl = resArr.pop();
        if (lastEl < arr[i]) {
          resArr.push(lastEl);
          resArr.push(ar[i]);
        } else {
          resArr.push(ar[i]);
          resArr.push(lastEl);
        }
      }
    } else {
      resArr.push(ar[i]);
    }
  }
  return resArr;
}

console.log(sortByHeight(arr));
