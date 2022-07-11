var url = 'http://mylogger.io/logs';

function log(message)
{
    //send an HTTP request
    console.log(message);
}

//to make app.js use the logger.js we have to use exports!
//exports is a property of the module object that is created when a module is created

module.exports = log;
// module.exports.endpoint = url;

//console.log(module);
