function friend(arr) {
  let result = [];

  arr.forEach((element, idx) => {
    if (element.length === 4)
      result.push(element);
  });

  return result;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));