//FS nonblocking method.

const fs = require("fs");

console.log(fs);

//readFile, writeFile
console.log('Starting');

fs.readFile("./content/first.txt",'utf-8', (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  fs.readFile("./content/second.txt",'utf-8', (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;
    fs.writeFile('./content/result-async.txt', `Here is the result: ${first}, ${second} hello world `,(err, result)=>{
        if(err){
            console.log(err);
            return; 
        }
        console.log('Done with this task');
        
    });
  });
  
});
console.log('Starting next task');

