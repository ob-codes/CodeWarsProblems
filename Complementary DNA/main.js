function DNAStrand(dna) {
  let result="";

  dna.split("").forEach(el => {
    if (el === 'A')
      result+='T';
    else if (el === 'T')
      result+='A';
    else if (el === 'G')
      result+='C';
    else if (el === 'C')
      result+='G';
  });
  
  return result;
}

console.log(DNAStrand("ATTGC")); //--> "TAACG"
console.log(DNAStrand("GTAT")); //--> "CATA"