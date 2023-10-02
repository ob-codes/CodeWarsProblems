function checkExam(array1, array2) {
  let result = 0;
   
  for (let i=0; i< array1.length; i++) {
    if (array1[i] === array2[i])
      result += 4;
    else if (array2[i] === "")
      result;
    else
      result--;
  }
   
  return result > 0 ? result : 0;
}
 
console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); //6
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"]));  //16