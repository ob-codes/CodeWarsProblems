Number.prototype.toString = function (){
  return "" + this;
}

Boolean.prototype.toString = function (){
  return "" + this;
}

Array.prototype.toString = function (){
  let res = "[";
  
  res += this.join(",");

  return res + "]";
}

Object.prototype.toString = function (){
  return "" + this;
}

console.log((123).toString());
console.log(true.toString());
console.log([1,2,3,4].toString());