function translate(str) {
  var vowel=['a','e','i','o','u'];
  str=str.split('');
  var index=[];
  for (var i in vowel){
     if (str.indexOf(vowel[i])>-1) index.push(str.indexOf(vowel[i]));
  }
  index=index.sort(function(a,b){
    return a-b;
  });
  var min=index[0];
  if (min===0){
    str.push('way');
    str=str.join('');
  } else {
    var first=[];
    for (var j=0;j<min;j++){
      first.push(str[0]);
      str.shift();
    }
    str=str.concat(first);
    str.push('ay');
    str=str.join('');
  }

    return str;
}

translate("glove");
