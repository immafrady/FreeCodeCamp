function diff(arr1, arr2) {
  var newArr = [];
  for(var i in arr1){
    if (arr2.indexOf(arr1[i])===-1) newArr.push(arr1[i]);
  }
  for(var j in arr2){
    if (arr1.indexOf(arr2[j])===-1) newArr.push(arr2[j]);
  }
  // Same, same; but different.
  return newArr;
}

diff([1, "calf", 3, "piglet"], [1, "calf", 3, 4]);
