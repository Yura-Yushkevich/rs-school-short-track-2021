function getEmailDomain(email) {
  const strEmail = email;
  const pos = strEmail.lastIndexOf('@');
  return strEmail.slice(pos + 1);
}

getEmailDomain('prettyandsimple@example.com');// , 'example.com');
getEmailDomain('someaddress@yandex.ru');// , 'yandex.ru');
getEmailDomain('very.unusual.@.unusual.com@usual.com');// , 'usual.com');
getEmailDomain('admin@mailserver2.ru');// , 'mailserver2.ru');
getEmailDomain('example-indeed@strange-example.com');// , 'strange-example.com');
