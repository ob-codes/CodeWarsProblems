function replace(str) {
  let temp = [];
  
  str.split("").map(el => {
    switch (el) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U':
        temp.push('!');
        break;
    default:
      temp.push(el);
        break;
    }
  });

  return temp.join("");
}

console.log(replace("Hi!"));//"Hi!!"
console.log(replace("aeiou"));//"!!!!!"
console.log(replace("ABCDE"));//"!BCD!"