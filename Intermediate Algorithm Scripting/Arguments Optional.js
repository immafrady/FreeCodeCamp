function add() {
  var arg=arguments;
  if (arg.length===2){
    if (typeof arg[0]==='number' && typeof arg[1]==='number') return arg[0] + arg[1];
  } else if (arg.length===1){
    if (typeof arg[0]==='number'){
      return function (val){
        if (typeof val==='number'){
          return arg[0] + val;
        } else return undefined;
      };
    }
  }
}

add(2, "3");
