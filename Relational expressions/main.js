function Relational(value) {
  this.value = value;
  let temp = false;
}

Relational.prototype = {
  passed: function() {
    this.temp = true;
    return this.temp;
  },

  equals: function(input) {
    if (this.value === input) 
      this.temp = true;
    return `${this.value} = ${input}`;
  },
  notEquals: function(input) {
    if (this.value != input) 
      this.temp = true;
    return `${this.value} != ${input}`;
  },

  lessThan: function(input) {
    if (this.value < input) 
      this.temp = true;
    return `${this.value} < ${input}`;
  },
  lessThanOrEqualTo: function(input) {
    if (this.value <= input) 
      this.temp = true;
    return `${this.value} <= ${input}`;
  },

  greaterThan: function(input) {
    if (this.value > input) 
      this.temp = true;
    return `${this.value} > ${input}`;
  },
  greaterThanOrEqualTo: function(input) {
    if (this.value >= input) 
      this.temp = true;
    return `${this.value} >= ${input}`;
  }
}

let tp = new Relational(1).lessThan(2).lessThan(3).passed();
console.log(tp);