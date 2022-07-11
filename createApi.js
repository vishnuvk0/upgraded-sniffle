function sayHello(name) {
    console.log("Hello " + name);
}

//1)

// setTimeout(sayHello("John"), 1000);
// setInterval(sayHello("John"), 1000);
// clearInterval(interval);
// clearTimeout(timeout);

// ^ all of these belong to window object

// window.console.log

// var message = '';

//^this is accessible to window object but not globabllly

//if i did: console.log(global.message), it would say undefined


//    in node we don't have the window object or document object
//    but we can create a new object and assign it to the window object
// console.log(); //console is a global object





// function that calls  rest api at url auth.tesla.com/api/1/vehicles/<vehicle_id>/command/door_lock

// function lockDoor(vehicle_id) {
//     var url = 'https://auth.tesla.com/api/1/vehicles/' + vehicle_id + '/command/door_lock';
//     var options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'Bearer ' + '<access_token>'
//         }
//     };
//     fetch(url, options)
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log(error));
// }