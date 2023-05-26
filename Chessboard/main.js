function printHash(){
  
  for(let i=0;i<8;i++){
    let pattern="";
    for (let j = 0; j < 4; j++) {
      if(i%2!==0) 
        pattern += "# ";
      else
        pattern += " #";  
    }
    console.log(pattern);
  }
}

printHash();