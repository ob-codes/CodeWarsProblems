function countSheeps(arrayOfSheep) {
  let result = 0;
  let count=0;
  arrayOfSheep.map(el => el === true? count++ : 0);

  return count;
}

console.log(countSheeps([true,  true,  true,  false, true,  true,  true,  true ,
  true,  false, true,  false, true,  false, false, true , true,  true,  true,  true ,
  false, false, true,  true ]));