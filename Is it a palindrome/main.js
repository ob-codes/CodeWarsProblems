function isPalindrome(x) {
  return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
}

console.log(isPalindrome("a"), true);
console.log(isPalindrome("hello"), false);
console.log(isPalindrome("Madam"), true);