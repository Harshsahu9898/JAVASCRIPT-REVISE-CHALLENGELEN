// alert will create a popup which acts like a alert in javascript page
alert("hey all");
// we can create a prompt alert which is also an alert but we can pass value into it
prompt("whats your name");
// we can also console log the value which will come into a prompt method by typing into it
const value =prompt("whats your name?")
console.log(value);
// WINDOW OBJECT
// there are two types of objects in dom means to access the windows we will write
console.log(window);//window object contains what to be done with the browser and when
// by default window object is there and all things will be stored in the windows object itself so bydefault it will be there because all the process is running in the windows object itself
// window.console.log(window); we can write like this for all functions
// any interaction with browser should be done with window object only

// DOCUMENT OBJECT->it can be used to interact with dom or document object model
    document.title = "harshu";
console.log(document);
console.log(document.body);//display the body of dom
// document.write("this is hacked by harsh");//we can do debugging or can able to write anything in the screen
// DOM CAN BE MANIPULATED BY JAVASCRIPT
const name = prompt("whats your name?");
document.write("hello"+name);
