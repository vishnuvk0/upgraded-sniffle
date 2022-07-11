//path module

const path = require('path'); //loads the path module

var pathObj = path.parse(__filename);

console.log(pathObj);