const { log } = require("console");
const { readFile, writeFile } = require("fs").promises;

const start = async () => {
    try {
        const first = await readFile("./content/first.txt", 'utf8');
        log(first);
        const second = await readFile("./content/second.txt", 'utf8');
        log(second);

        await writeFile('./content/async-await.txt', `This is Awesom : ${first}, ${second}  `, {flag: 'a'});

    } catch (error) {
        log(error);
    }
 
 
};

start();

//=====================================================================================
///*Promise with util */
// const { readFile, writeFile } = require("fs");
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

// const start = async () => {
//     try {
//         const first = await readFilePromise("./content/first.txt", 'utf-8');
//         log(first);
//         const second = await readFilePromise("./content/second.txt", 'utf-8');
//         log(second);

//         await writeFilePromise('./content/async-await.txt', `This is Awesom : ${first}, ${second}`);

//     } catch (error) {
//         log(error);
//     }
 
 
// };

// start();


//==================================================================================
// async await with own function

// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// const start = async () => {
//     try {
//         const first = await getText("./content/first.txt");
//         log(first);
//         const second = await getText("./content/second.txt");
//         log(second);
//     } catch (error) {
//         log(error);
//     }
 
 
// };

// start();



//==================================================================
//promilse

// const getText = (path) => {
//     return new Promise((resolve, reject) => {
//       readFile(path, "utf-8", (err, data) => {
//         if (err) {
//           reject(err);
//         } else {
//           resolve(data);
//         }
//       });
//     });
//   };
  
  // getText("./content/first.txt")
  //   .then((result) => log(result))
  //   .catch((err) => log(err));