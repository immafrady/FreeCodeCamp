function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins
  var reg1=/(?=[A-Z])/g;
  var reg2=/([a-z])([A-Z])/g;
  var reg3=/[^a-zA-Z]/g;

  if (reg2.test(str)){
    str=str.replace(reg1,'-').toLowerCase();
  } else {
    str=str.replace(reg3,'-').toLowerCase();
  }

  return str;
}

spinalCase("This Is Spinal Tap");
