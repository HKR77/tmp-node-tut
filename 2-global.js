/*
//GLOBALS - NO WINDOW!!!

// __dirname    - path to current directory.
// __filename   - file name
// require      - function to use modules (commonJS)
// module       - info about current module (file)
// process      - info about env where the program is being executed.
*/

// console.log(__dirname);
// console.log('***********************//********************************');
// console.log(__filename);
// console.log('***********************//********************************');
// console.log(require);
// console.log('***********************//********************************');
// console.log(module);
// console.log('***********************//********************************');
// console.log(process);

function timer(){
    const now = new Date();
    console.log(now.toLocaleTimeString());
}
const intervalId = setInterval(timer, 1000);

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval cleared.");
}, 10000);

