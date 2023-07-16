function Relational(value) {
  this.value = value;
  let temp = false;
}

Relational.prototype = {
  passed: function() {
    this.value = this.temp;
    return this.value;
  },

  equals: function(input) {
    if (this.value === input) 
      this.temp = true;
    else
      this.temp = false;

    this.value += `= ${input}`;
    return this;
  },
  notEquals: function(input) {
    if (this.value != input) 
      this.temp = true;
    else
      this.temp = false;

    this.value += `!= ${input}`;
    return this;
  },

  lessThan: function(input) {
    if (this.value < input) 
      this.temp = true;
    else
      this.temp = false;

    this.value += `< ${input}`;
    return this;
  },
  lessThanOrEqualTo: function(input) {
    if (this.value <= input) 
      this.temp = true;
    else
      this.temp = false;

    this.value += `<= ${input}`;
    return this;
  },

  greaterThan: function(input) {
    if (this.value > input) 
      this.temp = true;
    else
      this.temp = false;

    this.value += `> ${input}`;
    return this;
  },
  greaterThanOrEqualTo: function(input) {
    if (this.value >= input) 
      this.temp = true;
    else
      this.temp = false;

    this.value += `>= ${input}`;
    return this;
  }
}

let tp = new Relational(1).lessThan(2).lessThan(3).passed();
console.log(tp);
//10 != 5 != 5:
let tp2 = new Relational(10).notEquals(5).notEquals(5).passed();
console.log(tp2);