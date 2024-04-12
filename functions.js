// functions
function sayHello(){
    console.log("hello harsh")
}
// sayHello()

function add(a,b){//a and b are arguments
    console.log(a+b)
}
// add(5,4)//5 and 4 are parameters

function multiply(a,b){
    // console.log(num1*num2)
    return a*b//evaluate a and b and return the value and it can be used anywhere
}

// multiply(23,2); 
// let x = multiply(23,2);
// console.log("the multiplication is",x)

// add multiple numbers/ add unlimited numbers
function addmultiples(){
    let ans = 0;
    for(let i =0 ;i<arguments.length;i++){
        ans += arguments[i];
    }
    return ans
}
// let result = addmultiples(1,2,3,4,5);
// console.log(result);

function addmultiplenumbersv2(...numbers){//spread operator is a numbers
    let ans = 0;
    for(let i=0;i<numbers.length;i++){
        ans += numbers[i]
    }
    return ans;
}
let result=addmultiplenumbersv2(1,2,3,4,5);
console.log(result);