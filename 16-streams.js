//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//+to create the big file.

// const {writeFileSync } = require('fs');

// for(let i = 0; i < 10000; i++){
//     writeFileSync('./content/big.txt', `hello world ${i} \n`, {flag: 'a'})
// }

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const { createReadStream } = require("fs");

// const stream = createReadStream('./content/big.txt', {encoding:'utf-8', highWaterMark: 10000});
//==WE can control the size of data being read at once by changing the highWaterMark parameter.
const stream = createReadStream("../content/big.txt");

stream.on("data", (result) => {
  console.log("start reading the chunk");
  console.log(result);
  // the result will show that we are reading th data in chunks instead of reading the entire file.
});

stream.on('error', (error)=>{
    console.log(error);
    
});
