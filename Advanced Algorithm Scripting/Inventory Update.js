function updateInventory(arr1, arr2) {
  // 请保证你的代码考虑到所有情况
  var fragment = [];
  for (var i in arr1) {
    for (var j in arr2) {
      if (arr1[i][1].indexOf(arr2[j][1]) !== -1) {
        arr1[i][0] += arr2[j][0];
        fragment.push(arr2[j]);
      }
    }
  }
  for (var k in fragment) {
    var index = arr2.indexOf(fragment[k]);
    if (index > -1) {
      arr2.splice(index, 1);
    }
  }
  arr1 = arr1.concat(arr2);
  arr1.sort(function(a, b) {
    return a[1].localeCompare(b[1]);
  });
  return arr1;
}

// 仓库库存示例
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
