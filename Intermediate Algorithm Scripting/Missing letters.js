function fearNotLetter(str) {
  str=str.split('');
  var index=[],result=[];
  for (var i in str){
    index.push(str[i].charCodeAt(0));
  }
  var max=Math.max.apply(null,index),min=Math.min.apply(null,index);
  for (var j=min;j<max;j++){
      if (index.indexOf(j) === -1) result.push(j);
  }
  result=String.fromCharCode.apply(null,result);
  switch(result.length){
    case 0:
      str = undefined;
      break;
    case 1:
      str = result;
      break;
    default:
      str=result.join('');
  }
  return str;
}

fearNotLetter("abce");
