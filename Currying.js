// common interview question asked in interview
// function add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(2, 3, 4));

// if all three parameters are present then only we will add so first parameter is got by the api and b is by the another upi and c is user given parameter so to solve this particular problem we are going to use currying by returning a closure which will take some parameter and return us the element that is required by us
// so now

// basically the below part is called as currying or currying a function present below
// function add(a){
//     return function(b){
//         return function(c){
//             return a+b+c;
//         };
//     };
// }

// const add = (a) =>(b) => (c)=>  a+b+c;//same work in modified form
// // in this if any one argument will be removed then the function will not return answer which is called as currying in simple terms
// console.log(add(2)(4)(5));//calling all the functions seperately will give us the result of addition of all the functions 

// AUTOEMAIL USING CURRYING
// Example of Currying
// function sendAutoEmail(to){
//     return function(subject){
//         return function(body){
//             console.log(`sending email to ${to} with subject ${subject}: ${body}`);
//         };
//     };
// }

// modified form of above function 
const sendAutoEmail = (to) => (subject) => (body) => `sending email to ${to} with subject ${subject}: ${body}`;

let step1 = sendAutoEmail("harshsahu9898@gmail.com");
let step2 = step1("New Order Confirmation");

step2("Hey Harsh , Here is something for you please check the details!!");
