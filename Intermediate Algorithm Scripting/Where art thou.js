function where(collection, source) {
  var arr = [];
  var keys=Object.keys(source);
  // What's in a name?
  for (var i in collection){
    var count=0;
    for (var j in keys){
      if (collection[i].hasOwnProperty(keys[j]) && collection[i][keys[j]] === source[keys[j]]) count++;
    }
    if (count>=keys.length) arr.push(collection[i]);
  }
  return arr;
}

where([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
