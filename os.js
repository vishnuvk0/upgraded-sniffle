const os = require('os');

var tm = os.totalmem();
var fm = os.freemem();

    // console.log('Total Memory: ' + tm);
    // console.log('Free Memory: ' + fm);

//Template String = using es6

//template string append tm and fm to the console.log

console.log(`Total Memory: ${tm}`);
console.log(`Free Memory: ${fm/1000}`);