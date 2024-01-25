//codewars (8Kyu)
function enough(cap, on, wait) {
  if (cap - on - wait > 0)
    return 0;
  else
    return (on + wait) - cap;
}

console.log(enough(10, 5, 5));//0
console.log(enough(100, 60, 50));//10
console.log(enough(20, 5, 5));//0