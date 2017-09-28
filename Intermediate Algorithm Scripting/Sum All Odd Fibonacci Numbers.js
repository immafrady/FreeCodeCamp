function sumFibs(num) {
  var cache = [1,1,2];
  var sum=2;
  for (var i=cache[2];i<=num;){
    cache.splice(2,1,cache[0]+cache[1]);
    cache.splice(0,1,cache[1]);
    cache.splice(1,1,cache[2]);
    if (i%2===1){
      sum+=i;
    }
    i=cache[2];
  }
  return sum;
}

sumFibs(4);
