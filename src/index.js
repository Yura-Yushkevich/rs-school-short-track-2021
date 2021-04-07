const address = '00-1B-63-84-45-E6';

function isMAC48Address(mac) {
  const reg = /^[0-9a-fA-F]{2}(-[0-9a-fA-F]{2}){5}$/i;
  return reg.test(mac);
}
console.log(isMAC48Address(address));
