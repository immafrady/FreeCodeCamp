function every(collection, pre) {
  // Is everyone being true?
  return collection.every(function(el){
    if (el.hasOwnProperty(pre) && Boolean(el[pre])) return true;
    else return false;
  });
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");


//简洁的方法
function every(collection, pre) {
  // Is everyone being true?
  return collection.every(function(el){
    return el[pre]
  });
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
