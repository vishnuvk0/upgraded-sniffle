function sayHello(name) {
    console.log("Hello " + name);
}


setTimeout(sayHello("John"), 1000);
//sayHello("Vishnu");
//    in node we don't have the window object or document object
//    but we can create a new object and assign it to the window object
// console.log(); //console is a global object