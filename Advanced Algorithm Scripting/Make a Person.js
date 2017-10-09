var Person = function(firstAndLast) {
  var arr = firstAndLast.split(' ');
  this.setFirstName = function (first){
    arr.splice(0,1,first);
  };
  this.setLastName = function (last){
    arr.splice(1,1,last);
  };
  this.setFullName = function (firstAndLast){
    arr = firstAndLast.split(' ');
  };
  this.getFirstName = function (){
    return arr[0];
  };
  this.getLastName = function (){
    return arr[1];
  };
  this.getFullName = function (){
    return arr.join(' ');
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();
