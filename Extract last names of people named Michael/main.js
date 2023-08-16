function getMichaelLastName(str){
  let result = [];
  
  let arr = str.split(" ");
  
  arr.forEach((element, idx) => {
    if (element === "Michael"){
      let nextElementFirstChar = arr[idx+1].charAt(0);

      if (nextElementFirstChar >= 'A' && nextElementFirstChar <= 'Z') {  //check if its capital
        let nextElementLastChar = arr[idx +1].charAt(arr[idx +1].length -1);
        
        if (nextElementLastChar < 'a' || nextElementLastChar > 'z') {
          arr[idx +1] = arr[idx +1].slice(0, -1);
        }
        result.push(arr[idx+1]);
      }        
    }
  });
   
  return result;
}
const inputText = "Michael Bor, how are you? - Cool, how is John Williamns and Michael Jordan? I don't know but Michael Johnson is fine. Michael do you still score points with LeBron James, Michael Green AKA Star and Michael Wood?";

console.log(getMichaelLastName(inputText));