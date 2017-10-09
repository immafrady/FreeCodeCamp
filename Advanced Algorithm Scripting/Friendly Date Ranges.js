function makeFriendlyDates(arr) {
  var month = [undefined,'January','February','March','April','May','June','July','August','September','October','November','December'];
  var cache = [],output = [],str1,str2,status,thisYear;
  var y1,y2,m1,m2,d1,d2;

  //获取今天的年份
  var today = new Date();
  thisYear = today.getFullYear();

  //搞数字
  for (var i in arr){
    cache.push(arr[i].split('-'));
  }
  y1 = parseInt(cache[0][0]);
  y2 = parseInt(cache[1][0]);
  m1 = parseInt(cache[0][1]);
  m2 = parseInt(cache[1][1]);
  d1 = parseInt(cache[0][2]);
  d2 = parseInt(cache[1][2]);

  //替换字符
  for (var j in cache){
    var m = parseInt(cache[j][1]);
    cache[j].splice(1,1,month[m]);
    var d = parseInt(cache[j][2]);
    switch(d){
      case 1:
      case 21:
      case 31:
        cache[j].splice(2,1,d + 'st');
        break;
      case 2:
      case 22:
        cache[j].splice(2,1,d + 'nd');
        break;
      case 3:
      case 23:
        cache[j].splice(2,1,d + 'rd');
        break;
      default:
        cache[j].splice(2,1,d + 'th');
    }
  }

  //判断
  //正常情况
  if (y1 === y2){
    if (m1 ===m2){
      if (d1 === d2){
        //同年同月同日
        if (y1 === thisYear){
          //今年
          str1=cache[0][1] + ' ' + cache[0][2];
          str2=null;
        } else{
          //非今年
          str1=cache[0][1] + ' ' + cache[0][2] + ', ' +cache[0][0];
          str2=null;
        }

      } else{
        //同年同月不同日
        if (y1 === thisYear){
          //今年
          str1=cache[0][1] + ' ' + cache[0][2];
          str2=cache[1][2];
        } else {
          //非今年
          str1=cache[0][1] + ' ' + cache[0][2] + ', ' +cache[0][0];
          str2=cache[1][2];
        }
      }
    } else {
      //同年不同月
      if (y1 === thisYear){
        //今年
        str1=cache[0][1] + ' ' + cache[0][2];
        str2=cache[1][1] + ' ' + cache[1][2];
      } else {
        //非今年
        str1=cache[0][1] + ' ' + cache[0][2] + ', ' +cache[0][0];
        str2=cache[1][1] + ' ' + cache[1][2];
      }
    }
  } else {
    //全不同
      if (y1 === thisYear){
        //今年
        str1=cache[0][1] + ' ' + cache[0][2];
        str2=cache[1][1] + ' ' + cache[1][2] + ', ' +cache[1][0];
      } else if (y2 === thisYear){
        //明年
        str1=cache[0][1] + ' ' + cache[0][2] + ', ' +cache[0][0];
        str2=cache[1][1] + ' ' + cache[1][2];
      } else {
        //非这两年
        str1=cache[0][1] + ' ' + cache[0][2] + ', ' +cache[0][0];
        str2=cache[1][1] + ' ' + cache[1][2] + ', ' +cache[1][0];
      }

  }
  //特殊情况：差距不超过一年
  if (y1 + 1 === y2) {
    if (m1 > m2 || (m1 === m2 && d1 > d2)){
      if (y1 === thisYear) {
        str1=cache[0][1] + ' ' + cache[0][2];
        str2=cache[1][1] + ' ' + cache[1][2];
      } else {
        str1=cache[0][1] + ' ' + cache[0][2] + ', ' +cache[0][0];
        str2=cache[1][1] + ' ' + cache[1][2];
      }
    }
  }
  //特殊情况：bug
  if (y1 > y2) {
    return undefined;
  } else if (y1 === y2 && m1 > m2){
    return undefined;
  } else if (y1 === y2 && m1 === m2 && d1 > d2){
    return undefined;
  }


  //输出
  output.push(str1);
  (str2!==null)? output.push(str2):false;
  return output;
}


makeFriendlyDates(["2008-10-31", "2009-10-31"]);
