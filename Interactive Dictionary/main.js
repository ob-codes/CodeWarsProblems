class Dictionary{
  constructor(){
    this.value = "";
    this.description = "";
  }
  newEntry(inputValue, inputDescription){
    this.value = inputValue;
    this.description = inputDescription;
  }
  look(input){
    if (this.value == input)
      return this.description;
    else
    return `Can't find entry for ${input}`;
  }
}

let d = new Dictionary();

d.newEntry("ugkaurref", "o gbbgqfgjifr i");
console.log(d.look("ugkaurref"));