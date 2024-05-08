
let temp = false;
const omnibool = {
  valueOf : function() {
    temp = !temp;
  
    return temp;
  }
}

console.log((omnibool == true) && (omnibool == false));