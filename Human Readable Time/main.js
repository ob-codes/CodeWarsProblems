/*
1. Parameter: seconds (number)
2. Return: time in HH:MM:SS format
3. Example: 3600 = > 01:00:00, 0 => 00:00:00
4. Pseudo-code:
  a. Convert input seconds into hours
  b. Convert residual seconds in minutes, 
  c. Keep residual seconds as is
  d. Combine hr, min and secs in HH:MM:SS format
*/
//codewars (5Kyu)
function humanReadable(seconds) {
  let result = "", arr=[];

  hr = parseInt(seconds/3600);
  min = parseInt(seconds/60 - hr*60);
  sec = parseInt(seconds - min*60 - hr*3600);

  hr =  hr.toString().padStart(2, 0);
  min = min.toString().padStart(2, 0);
  sec = sec.toString().padStart(2, 0);

  result = `${hr}:${min}:${sec}`;

  return result;
}
console.log(humanReadable(359999));//=> 99:59:59
console.log(humanReadable(3600));//=> 01:00:00
console.log(humanReadable(0));//=> 00:00:00