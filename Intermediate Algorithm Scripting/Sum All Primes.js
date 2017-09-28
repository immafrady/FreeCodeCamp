function sumPrimes(num) {
  var sum=0;
  switch(num){
    case 0:
      sum=0;
      break;
    case 1:
      sum=0;
      break;
    default:
      for (var i=0;i<=num;i++){
        var test=0;
        for (var j=1;j<i;j++){
          if(i%j===0) test++;
        }
        if (test===1){
          sum+=i;
        }
      }
  }
  return sum;
}

sumPrimes(977);
