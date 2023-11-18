function wave(str) {
  let result=[];
  
  for (let i=0; i<str.length; i++) {
    if (str[i] === " ")
      continue;
    result.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i+1));
  }

  return result;
}

console.log(wave("hello"));// => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave("two words"));//[ 'Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS' ]