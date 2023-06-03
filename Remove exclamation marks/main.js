function removeExclamationMarks(s) {
  return s.split("").filter(x => x !== '!').join("");
}

console.log(removeExclamationMarks("Hello World!"));