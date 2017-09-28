function pair(str) {
  var dna=['A','T','C','G'],result=[];
  str=str.split('');
  for (var i in str){
    var cache=[];
    cache.push(str[i]);
    result.push(cache);
  }
  for (var j in result){
    switch(result[j][0]){
        case 'A':
          result[j].push('T');
          break;
        case 'T':
          result[j].push('A');
          break;
        case 'C':
          result[j].push('G');
          break;
        case 'G':
          result[j].push('C');
    }
  }
  return result;
}

pair("GCG");
