/*
- Parameter: string
- Return: string
- Example: "Hey fellow warriors" --> "Hey wollef sroirraw"
- Pseudo=code:
  a.
  b.
  c.
*/
//codewars (6Kyu)
function spinWords(params) {
  let result = [], temp=[];

  params.split(" ").forEach(element => {
    temp = [];

    if (element.length >= 5) {
      //element.split("").forEach(el => temp.unshift(el));

      result.push(element.split("").reverse().join(""));
    }
    else
      result.push(element);    
  });

  return result.join(" ");
}
console.log(spinWords("Hey fellow warriors"));//"Hey wollef sroirraw"
console.log(spinWords("This is a test"));//"This is a test"
console.log(spinWords("This is another test"));//"This is rehtona test"