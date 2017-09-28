function sumAll(arr) {
  var max=Math.max(arr[0],arr[1]),min=Math.min(arr[0],arr[1]);
  var count=[];
  for(min;min<=max;min++){
    count.push(min);
  }
  var sum=count.reduce(function(a,b){
    return a+b;
  })

  return sum;
}

sumAll([1, 4]);
