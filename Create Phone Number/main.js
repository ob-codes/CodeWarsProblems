/*
1. Params: array of numbers
2. Return: string
3. Example: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0] => "(123) 456-7890";
4. Pseudo-code:
a. Put '(' at the start and keep 1st three digits 
b. Put ') ' right before 4th digit & keep next three digits
d. Insert '-' right before 7th digit & keep the remaining digits
*/
//codewars (6Kyu)
function createPhoneNumber(params) {
  let result= "";
  
  for (let i = 0; i < params.length; i++) {
    if (i === 0) 
      result += '(';
    else if (i === 3) 
      result += ') ';
    else if (i === 6) 
      result += '-';

    result += params[i];    
  }

  return result;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));//"(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));//"(111) 111-1111"