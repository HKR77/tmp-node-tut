//FileSystem in-built module.
// there are two flavours availabe in FS Module. [blocking, non-blocking]

const { readFileSync, writeFileSync } = require("fs"); // just destructuring the object retrined by require function.
// const FileSystem = require('fs');

console.log('Starting');


const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `Here is the result: ${first}, ${second} hello world `, {flag: 'a'}
);

console.log('Done with this task');
console.log('Starting the next one');


