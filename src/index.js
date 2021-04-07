const names = ['doc', 'doc', 'image', 'doc(1)', 'doc'];

function renameFiles(arrayNames) {
  const arrNames = arrayNames;

  for (let i = 0; i < arrNames.length; i++) {
    let suffix = 1;
    for (let k = i + 1; k < arrNames.length; k++) {
      if (arrNames[i] === arrNames[k]) {
        arrNames[k] = `${arrNames[k]}(${suffix})`;
        suffix++;
      }
    }
  }
  return arrNames;
}
console.log(renameFiles(names));
