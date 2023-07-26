function bouncingBall(h,  bounce,  window) {
  let result = 0;

  if ((h <= 0) || (bounce <= 0 || bounce >= 1) || (window >= h))
    return -1;
  
  if (h > window)
    result++;
  return result + bouncingBall(h*bounce,  bounce,  window) +1;
}

console.log(bouncingBall(3.0, 0.66, 1.5));
console.log(bouncingBall(30.0, 0.66, 1.5));
console.log(bouncingBall(3.0, 1.0, 1.5));