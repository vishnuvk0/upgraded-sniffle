
    console.log(__dirname);
    console.log(__filename);
    var url = 'http://mylogger.io/logs';

    function log(message)
    {
        //send an HTTP request
        console.log(message);
    }

    //to make app.js use the logger.js we have to use exports!
    //exports is a property of the module object that is created when a module is created

    module.exports = log;

    //you can also put:
    //module.exports.log = log;
    // or
    //exports.log = log;

    //BUT YOU CAN NOT DO
    //exports = log; -> you can not change that reference, this will overwrite the exports object


