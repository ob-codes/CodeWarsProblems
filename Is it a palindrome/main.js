function isPalindrome(x) {
  return x === x.split('').reverse().join('');
}

console.log(isPalindrome("a"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Madam"), true);