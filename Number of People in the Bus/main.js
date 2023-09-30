function number(nums) {
  let onBoarded = 0, offBoarded = 0;

  nums.forEach(element => {
    onBoarded += element[0];
    offBoarded += element[1];
  });

  return onBoarded - offBoarded;
}

console.log(number([[10,0],[3,5],[5,8]])); //5