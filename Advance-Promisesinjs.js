// synchtonous and asynchronous task
// here all the things are in sync means first a is executed then b is executed then result will give us the answer
let a = 10;
let b = 30;

let result = a+b;

console.log(result);//it works in a sync so it is a synchronous task

// but some task take time to return the answer which is called as asychronous task

// asynchronous task

//if i will add await after fetch then i is not allowed then we have to passs an asynchronous function
async function getData(){
let resultfromserver = await fetch(//fetch function will fetch the data by going to this url given below
    "https://jsonplaceholder.typicode.com/posts"//it willl return me a promise which is pending
);
console.log(await resultfromserver.json());//adding .json and await will give us the answer
}
//if i want to wait till i get result then we will get result and it return promise means when result will be coming then it will notfy user
getData();
//if i am writing any function then we can add three things if the result is resolved then then will run and if any error will occur doring execution the catch is called and finally runs everytime  whether the function is resolved or been rejected
fetch("https://jsonplaceholder.typicode.com/posts")
.then((data)=>{console.log(data);})//we an also attach callbacks to your function that we can get any function if we want
.catch((error)=>{console.log(error);});
console.log(result);//this code is not so clean so we can use asynchronous function where we can use asynchronous function and add built in promises