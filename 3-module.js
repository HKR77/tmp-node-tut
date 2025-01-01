//Module
//CommonJS, every file is module (by default)
//Modules - Encapsulated code (only share minimum)
//==================================================================

const names = require("./4-1st-module");
const sayHi = require("./5-utility");
const data = require("./6-alternative-flavor");

console.log(names);

sayHi("Gray");
sayHi(names.Tony);
sayHi(names.Natsu);

console.log(data);

//=========================================================
//
require("./7-mind-grenade");
