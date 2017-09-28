function smallestCommons(arr) {
  var max=Math.max.apply(null,arr),min=Math.min.apply(null,arr);
  var num=[];
  for (var i=min;i<=max;i++){
    num.push(i);
  }
  var greatCM=num.reduce(function(a,b){
    return a*b;
  });
  for (var j in num){

  }

  return arr;
}


smallestCommons([1,5]);
