function drop(arr, func) {
  // Drop them elements.
  var test=[];
  for (var i in arr){
    if (func(arr[i])) test.push(true);
    else test.push(false);
  }
  var count=test.indexOf(true);
  if (count===-1) arr=[];
  else arr=arr.slice(count);
  return arr;
}

drop([1, 2, 3, 4], function(n) {return n > 5;});
