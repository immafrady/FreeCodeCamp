function find(arr, func) {
  var cache=arr.filter(func);
  return cache[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
