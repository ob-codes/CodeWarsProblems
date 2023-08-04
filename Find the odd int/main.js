function x(arr) {
  let count=[], prevElement=0, temp=0;
  let arrSorted = arr.sort((a,b) => a-b);
  
  arrSorted.forEach((element, idx) => {
    if (idx===0) {  
      temp++;
    }    
    else if (element === prevElement) {
      temp++;
    }
    else if (element !== prevElement){      
      count.push(temp);
      temp=1;
    }
    prevElement = element;
  });

  result = count.forEach(el => {
    if (el%2)
      return el;
  });
}

console.log(x([1,2,2,3,3,3,4,3,3,3,2,2,1,5,5]));