function isValidWalk(walk) {
  let result=false, x=0, y=0;
  
  if (walk.length != 10)
    return false;

  walk.forEach(element => {
    switch (element) {
      case 'n': y +=1; break;
      case 'e': x +=1; break;
      case 'w': x -=1; break;
      case 's': y -=1; break;
      default: break;
    }
  });
  
  if (x===0 && y===0)
    result=true;

  return result;
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']));
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s']));