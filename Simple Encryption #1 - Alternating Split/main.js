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

function decrypt(str, times) {
  let temp = [], arr = [];

  if (str === "" || str === null || times <= 0)
    return str;

  while (times) {
    times--;
    arr = str.split("")

    let positionFromStart = 1;
    let positionFromCenter = 0;
    let count = (arr.length %2 !== 0) ? arr.length/2 -1 : arr.length/2;

    for (let idx = 0; idx < arr.length; idx++) {
      if (idx < count) {
        temp[idx+positionFromStart] = arr[idx];
        positionFromStart++;
      }      
      else {
        temp[positionFromCenter] = arr[idx];
        positionFromCenter+=2;
      }      
    }
    str = temp.join("");
  }

  return temp.join("");
}

console.log(encrypt("This is a test!", 2)); // "s eT ashi tist!"

console.log(encrypt("This is a test!", 1)); // "hsi  etTi sats!"
console.log(decrypt("20314", 1));
console.log(decrypt("hsi  etTi sats!", 1)); //"This is a test!"
console.log(decrypt(" Tah itse sits!", 3)); //"This is a test!"
console.log(decrypt("hskt svr neetn!Ti aai eyitrsig", 1)) //"This kata is very interesting!"