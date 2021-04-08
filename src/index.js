const domains = [
  'code.yandex.ru',
  'music.yandex.ru',
  'yandex.ru'];

function getDNSStats(arr) {
  const arrMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const arrStr = arr[i].split('.');
    let addressPart = '';
    for (let k = arrStr.length - 1; k >= 0; k--) {
      addressPart += `.${arrStr[k]}`;
      if (!arrMap.has(addressPart)) {
        arrMap.set(addressPart, 1);
      } else {
        arrMap.set(addressPart, arrMap.get(addressPart) + 1);
      }
    }
  }

  const res = Object.fromEntries(arrMap);
  return res;
}
console.log(getDNSStats(domains));

// * {
//   *   '.ru': 3,
//   *   '.ru.yandex': 3,
//   *   '.ru.yandex.code': 1,
//   *   '.ru.yandex.music': 1,
//   * }
