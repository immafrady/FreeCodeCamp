function myReplace(str, before, after) {
  if (before.charCodeAt(0)>='A'.charCodeAt(0) && before.charCodeAt(0)<='Z'.charCodeAt(0)){
    after=after.split('');
    after.splice(0,1,after[0].toUpperCase());
    after=after.join('');
    str=str.replace(before,after);
  } else str=str.replace(before,after);

  return str;
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
