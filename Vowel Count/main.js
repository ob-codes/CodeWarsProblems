function getCount(str) {
  let count = 0;
  let str2 = "";

  str2 = str.split("");
  str2.forEach(x => {
    if (x==='a' || x==='e' || x==='i' || x==='o' || x==='u')
      count++;
  });

  return count;
}

console.log(getCount("abracadabra"));