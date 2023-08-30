const sequenceSum = (begin, end, step) => {
  let sum = 0;

  if (begin > end)
    return sum;

  for (let i=begin; i<=end; ) {
    sum += i;
    i += step;
  }
  
  return sum;
};

console.log(sequenceSum(2, 6, 2))