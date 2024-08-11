function BallConstructor(type) {
  if (arguments.length != 0)
    this.type = type;
  else
    this.type = `regular`;
}

let myBall1 = new BallConstructor('heavy');
let myBall2 = new BallConstructor();

console.log(myBall1.type); //heavy
console.log(myBall2.type); //regular