function steamroller(arr) {
  // I'm a steamroller, baby
  var cache=[];

  function TestArr(arrCache){
    for (var i in arrCache) {
      if (!Array.isArray(arrCache[i])) {
        cache.push(arrCache[i]);
      } else {
        TestArr(arrCache[i]);
      }
    }
  }
  TestArr(arr);
  return cache;
}

steamroller([1, [], [3, [[4]]]]);
