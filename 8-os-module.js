//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
/*
Built-in Modules
    OS
    PATH
    FS
    HTTP
*/
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++
//OS Built-in modules

//import the os modules
const os = require('os');

//access the os modules 
// console.log(os.userInfo());


// console.log(os.hostname());

//Method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs);

//



