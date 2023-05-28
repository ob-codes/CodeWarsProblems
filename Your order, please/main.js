function order(string) {  
  let res = [];
  let idx = 0;
  arr = string.split(" ");
  arr.forEach(element => {
      idx = element.match(/\d/);
      res[idx -1] = element;
  });
 
  return res.join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));

/*
function order(string) {  
  let res = "";
  let idx = [];
  arr = string.split(" ")
  arr.forEach(element => {
    if (element.match(/1/)){
      idx[0] = element;
    }
    else if (element.match(/2/)){
      idx[1] = element;
    }
    else if (element.match(/3/)){
      idx[2] = element;
    }
    else if (element.match(/4/)){
      idx[3] = element;
    }
    else if (element.match(/5/)){
      idx[4] = element;
    }
    else if (element.match(/6/)){
      idx[5] = element;
    }
    else if (element.match(/7/)){
      idx[6] = element;
    }
    else if (element.match(/8/)){
      idx[7] = element;
    }
    else if (element.match(/9/)){
      idx[8] = element;
    }
  });
 
  return idx.join(" ");
}
*/