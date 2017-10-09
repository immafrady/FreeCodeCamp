function telephoneCheck(str) {
  // 祝你好运
  var reg=/^1?\s?(\()?\d{3}((\)\s?)|-|\s)?\d{3}(-|\s)?\d{4}$/;
  if (!reg.test(str)) return false;
  if (str.indexOf('(') >=0 && str.indexOf(')') === -1) return false;
  if (str.indexOf('(') ===-1 && str.indexOf(')') >=0) return false;
  return true;
}



telephoneCheck("555-555-5555");

// 简洁的方法
function telephoneCheck(str) {
  // 祝你好运
  var reg=/^1?\s?(\d{3}|\(\d{3}\))-?\s?\d{3}(-|\s)?\d{4}$/;
  if (!reg.test(str)) return false;
  return true;
}



telephoneCheck("555-555-5555");
