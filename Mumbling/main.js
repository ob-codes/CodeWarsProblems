function accum(params) {
  let result = "";

  params.split("").forEach((element, idx) => {
    for (let i = 0; i <= idx; i++) {
      if (i === 0)
        result += element.toUpperCase();  
      else
        result += element.toLowerCase();
    }

    result += "-";
  });
  
  return result.slice(0, -1);
}

console.log(accum("abcd"));
console.log(accum("cwAt"));