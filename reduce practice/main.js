const users  = [
  {firstName : 'akhsay', lastName : 'saini', age: 26},
  {firstName : 'donald', lastName : 'trump', age: 50},
  {firstName : 'elon', lastName : 'musk', age: 75},
  {firstName : 'deepika', 'lastName' : 'padukone', age: 26}
];

let output = users.reduce((acc, curr) => {
  if (curr.age === 26) {
    acc.push(curr.firstName);
  }
  return acc;
}, []);

console.log(output);