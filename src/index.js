const str = 'abbcca';

function encodeLine(s) {
  let res = '';

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (char !== s[i + 1]) {
      res += char;
    } else {
      let count = 1;
      while (char === s[i + 1]) {
        count++;
        i++;
      }
      res += `${count}${char}`;
    }
  }
  return res;
}
console.log(encodeLine(str));
