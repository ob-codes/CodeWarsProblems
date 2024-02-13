//codewars 6Kyu
class Num {
  constructor(x) {
    this.result = "";
    this.str = x.toString();
  }
  tellResult(){
    for (let i = 0; i < this.str.length; i++) {
      const element = this.str[i]; 
      let temp = '';

      switch (element) {
        case '1': temp = 'one'; break;
        case '2': temp = 'two'; break;
        case '3': temp = 'three'; break;
        case '4': temp = 'four'; break;
        case '5': temp = 'five'; break;
        case '6': temp = 'six'; break;
        case '7': temp = 'seven'; break;
        case '8': temp = 'eight'; break;
        case '9': temp = 'nine'; break;
        case '0': temp = 'zero'; break;
      }
      this.result += temp;
      
      if (i < this.str.length -1) 
        this.result += '.';
    }

    return this.result;    
  }
}

let num1 = new Num(786);
console.log(num1.tellResult());