function multiTable(number) {
  let result = "";
  
  for(let i=1;i<=10;i++){
    result += `${i} * ${number} = ${i*number}\n`;   
  }
  
  return result.trim();
}

console.log(multiTable(5));
/*
'1 * 5 = 5\n
2 * 5 = 10\n
3 * 5 = 15\n
4 * 5 = 20\n
5 * 5 = 25\n
6 * 5 = 30\n
7 * 5 = 35\n
8 * 5 = 40\n
9 * 5 = 45\n
10 * 5 = 50'
*/