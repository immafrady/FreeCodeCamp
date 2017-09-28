function convert(str) {
  // &colon;&rpar;
  var reg=/[^1-9a-z\s]/gim;
  str=str.replace(reg,function(match){
    switch(match){
      case '\&':
        return '&amp;';
      case '\<':
        return '&lt;';
      case '\>':
        return '&gt;';
      case '\"':
        return '&quot;';
      case '\'':
        return '&apos;';
    }
  })
  return str;
}

convert("Dolce & Gabbana");
