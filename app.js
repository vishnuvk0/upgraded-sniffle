//it is possible that we define sayHello in two different files,
//we shoudn't define functions or variables in the global scope
// we should define them in the local scope (window)
//make sure you don't use the global scope to define functions
//modules are a way to organize code

//console.log(module);
    //^this will print the module object

const logger = require('./logger');
//we want to use the logger.js file in the same directory, so we load it using reuqire

//instead of using a var, use a const so we don't over write the variable


log('1.\nHello from app.js');

//^this exports an object instead of a single function


// const logger2 = require('./logger');
// log('2. Hello from app.js');
