function greet (name, owner) {
  // Add code here
  if (name === owner) 
    return "Hello boss";
  else
    return "Hello guest";
}

greet('Daniel', 'Daniel');