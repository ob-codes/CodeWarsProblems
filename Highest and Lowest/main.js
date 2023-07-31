function highAndLow(numbers){
  let result = "";
  let nums = numbers.split(" ");
  let max=nums[0], min=nums[0];

  nums.forEach(element => {
    if (parseInt(element) > max)
      max = parseInt(element);
    if (parseInt(element) < min)
      min = parseInt(element); 
  });

  result += max;
  result += " ";
  result += min;

  return result;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));