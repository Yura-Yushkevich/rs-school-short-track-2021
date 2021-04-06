const s1 = 'zzzz';
const s2 = 'zzzzzzz';

function getCommonCharacterCount(str1, str2) {
  const s1Arr = str1.split('');
  const s2Arr = str2.split('');

  const sumArr = [];

  for (let i = 0; i < s1Arr.length; i++) {
    const pos = s2Arr.indexOf(s1Arr[i]);
    if (pos !== -1) {
      sumArr.push(s2Arr.splice(pos, 1));
    }
  }
  return sumArr.length;
}

console.log(getCommonCharacterCount(s1, s2));
