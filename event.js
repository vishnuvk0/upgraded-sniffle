const eventEmitter = require('events'); //this is a class (container for properties)

//now we have to create an instance of this class:

const emitter = new eventEmitter();

    // emitter.on('message', () => {
    //     console.log('message event has been emitted');
    // }
    // );

    // emitter.emit('message'); //this doesnt rly make sense. this just basically makes a noise/signal that event has happened

    //nothing will happen if we do just above. we have to add a listener too - see line 7

/*
sometimes we want to add additional arguments to our event listeners
*/


emitter.on('message', function(arg) 
{
    console.log('listener called', arg);
});

emitter.emit('message', { id: 1, url: 'http://' });