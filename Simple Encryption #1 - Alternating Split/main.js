function encrypt(str, times) {
  if (str === "" || str === null || times <= 0)
  return str;

  while (times) {
    let temp1 = "", temp2 = "";
    times--;
    str.split("")
      .forEach((element, idx) => {
        if (idx % 2 !== 0){
          temp1 += element
        }
        else{
          temp2 += element;
        }
      });
    str = temp1 + temp2;
  }

  return str;
}

