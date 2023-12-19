function findEvenIndex(arr) {
  let result = -1, leftSum = 0, rightSum = 0;
  let leftPart = [], rightPart = [];
  
  for (let i = 1; i <= arr.length; i++) {
    leftPart = arr.slice(0, i-1);
    rightPart = arr.slice(i);

    leftSum = leftPart.reduce((acc, c) => acc+c, 0);
    rightSum = rightPart.reduce((acc, c) => acc + c, 0)

    if (leftSum === rightSum) {
      result = i-1;
      break;
    }
  }

  return result;
}

console.log(findEvenIndex([1,2,3,4,3,2,1])); //3
console.log(findEvenIndex([1,100,50,-51,1,1])); //1
console.log(findEvenIndex([20,10,-80,10,10,15,35])); //0
console.log(findEvenIndex([10,-80,10,10,15,35,20])); //6