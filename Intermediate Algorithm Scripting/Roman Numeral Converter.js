function convert(num) {
 var list = [['','I','II','III','IV','V','VI','VII','VIII','IX'],['',"X",'XX','XXX','XL','L','LX','LXX','LXXX','XC'],['','C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],['','M','MM','MMM']];

  var cache=num.toString();
  var cacheArr=cache.split('');
  cacheArr=cacheArr.reverse();
  (function(){
    var cache=[];
    for (var i in cacheArr){
      cache.push(Number(cacheArr[i]));
    }
    cacheArr=cache;
  })();
  for (var j in cacheArr){
    cacheArr[j]=list[j][cacheArr[j]];
  }
  cacheArr=cacheArr.reverse();
  num=cacheArr.join('');
 return num;
}
convert(3622);
