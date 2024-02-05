/*
- Parameter: url (string)
- Return: domain name (string)
- Example:  url = "http://github.com/carbonfive/raygun" -> domain name = "github"
- Pseudo-code:
  a. Split the string using '.'
  b. Check if first word contain 'www', then 2nd word is the answer
  c. Check if first word contain 'http', then split the word using '://' and answer is 2nd word
  d. If first word not contain 'www' & 'http', then first word is the answer
*/
//codewars (5Kyu)
function domainName(url) {
  let result = "";
  
  return result;
}

console.log(domainName("http://github.com/carbonfive/raygun"));//-> domain name = "github"
console.log(domainName("http://www.zombie-bites.com"));//-> domain name = "zombie-bites"
console.log(domainName("https://www.cnet.com"));//-> domain name = cnet
console.log(domainName("anoy1f1lf5y-7vget.fr/default.html"));//-> domain name = anoy1f1lf5y-7vget
console.log(domainName("www.xakep.ru"));//"xakep"
