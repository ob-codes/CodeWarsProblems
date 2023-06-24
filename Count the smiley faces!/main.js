//return the total number of smiling faces in the array
function countSmileys(arr) {
  let countArr = [];
  let allowed = [":)", ";)", ":-)", ";-)", ":~)", ";~)",":D", ";D", ":-D", ";-D", ":~D", ";~D"];

  countArr = arr.filter(element => {
    return allowed.includes(element);
  });

  return countArr.length;
}

console.log(countSmileys([]));
console.log(countSmileys([':D',':~)',';~D',':)']));
console.log(countSmileys([':)',':(',':D',':O',':;']));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));