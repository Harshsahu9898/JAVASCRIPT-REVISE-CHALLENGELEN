// high order function : the function which contains an function as an argument and also accept it
function add(a,b,callback){
    let result = a+b
    callback(result)
}
// 1. 1st way of getting callback function
// add(2,4,function(val){
//     console.log(val)
// })

// 2. 2nd way
// function showresult(result){
//     console.log(result);
// }
// add(2,4,showresult);

// 3. 3rd way

add(2,4,val=>console.log(val));//using arrow function


// we can even return a function from a function 

function add(a,b,cb){
    let result = a+b;
    cb(result);

    return () => console.log(result);
}
let resultFunction = add(2,4, ()=>{});
resultFunction();