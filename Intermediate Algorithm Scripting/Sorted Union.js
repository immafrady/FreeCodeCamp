function unite(arr1, arr2, arr3) {
  var arg=arguments;
  var arr=[];
  arr=arr.concat(arg[0]);
  for (var i=1;i<arg.length;i++){
    for (var j in arg[i]){
      if (arr.indexOf(arg[i][j])===-1) arr.push(arg[i][j]);
    }
  }
  return arr;
}

unite([1, 3, 2], [5, 2, 1, 4], [2, 1]);
