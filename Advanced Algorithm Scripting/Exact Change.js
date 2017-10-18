function checkCashRegister(price, cash, cid) {
  var diff,
    value,
    //下面两个数组与cid数组位置一一对应
    change = [
      ["PENNY"],
      ["NICKEL"],
      ["DIME"],
      ["QUARTER"],
      ["ONE"],
      ["FIVE"],
      ["TEN"],
      ["TWENTY"],
      ["ONE HUNDRED"]
    ],
    worth = [1, 5, 10, 25, 100, 500, 1000, 2000, 10000];
  diff = (cash - price) * 100;

  for (var i = worth.length - 1; i >= 0; i--) {
    value = diff % worth[i];
    if (value === diff) {
      //如果求余结果value和比较数diff相等，说明钱没动过
      continue;
    } else {
      //cache是可被整除的部分
      var cache = diff - value;

      if (cid[i][1] * 100 > cache) {
        cache = cache / 100;
        // 如果钱箱里的钱比cache多
        change[i].push(cache);
        // 计算钱箱剩余的钱
        cid[i][1] -= cache;
      } else {
        //钱全赔进去
        change[i].push(cid[i][1]);
        //还没找的放回去
        value += cache - cid[i][1] * 100;
        //计算钱箱剩余的钱
        cid[i][1] = 0;
      }
      diff = value;
    }
  }
  //筛选出有数据的数组
  change = change.filter(function(arr) {
    return arr[1] > 0;
  });
  //把钱箱清算一下，看看还剩多少
  cid = cid.filter(function(arr) {
    return arr[1] > 0;
  });
  // 最终判断
  if (diff > 0) {
    return "Insufficient Funds";
  } else if (!cid[0]) {
    //“[]”空数组好像无法判断，只能用这种方法了……
    return "Closed";
  } else {
    //返回结果
    return change.reverse();
  }
}

checkCashRegister(19.5, 20.0, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90.0],
  ["FIVE", 55.0],
  ["TEN", 20.0],
  ["TWENTY", 60.0],
  ["ONE HUNDRED", 100.0]
]);
