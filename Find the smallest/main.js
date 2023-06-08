class SmallestIntegerFinder {
  findSmallestInt(args) {
    let res = 0;
    res = Math.min(...args);
    return res;
  }
}
let sif = new SmallestIntegerFinder();
console.log(sif.findSmallestInt([78,56,232,12,8]));