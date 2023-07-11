function findNextSquare(sq) {
  // Return the next square if sq is a perfect square, -1 otherwise
  let result = -1;

  let num = Math.sqrt(sq);
  if (Number.isInteger(num))
    result = Math.pow((++num), 2);

  return result;
}

console.log(findNextSquare(144));