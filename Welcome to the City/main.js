function sayHello( name, city, state ) {
  let fullName = name.reduce((cur, acc) => cur + ' ' + acc, '').trim();
  
  return `Hello, ${fullName}! Welcome to ${city}, ${state}!`
}

console.log(sayHello(['John', 'Smith'], 'Phoenix', 'Arizona'));//Hello, John Smith! Welcome to Phoenix, Arizona!
console.log(sayHello(['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'));//'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'