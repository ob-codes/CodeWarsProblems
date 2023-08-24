function fakeBin(x){
  let result = "";
  
  x.split("").forEach((element) => {
    result += element >= 5 ? '1' : '0';
  });

  return result;
}

console.log(fakeBin('45385593107843568'));

