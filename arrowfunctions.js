// Arrow Functions

// 1. Syntax

const sayHello = () =>{//arrow functions
    console.log('say hello')
}
sayHello()

// const add = (a,b) =>{
//     return a+b;
// }
// returning automatically
const addV2 = (a,b) => a+b;//one liner function
console.log(addV2(3,4))
// 2. 'arguments' keyword is not present in arrow functions

const addNumbers=(...numbers) =>{
    let ans = 0;
    for(let i =0;i<numbers.length;i++){
        ans+=numbers[i]
    }
    return ans;
}

console.log(addNumbers(1,33,4,5,6));
 
// 3. Hoisting-->defining the function at anytime javascript score it before only to work the function whether the function may be defined before or after
// hoisting work for normal functions but not for arrow functions

// function sayHey = () => {
//     console.log("helloworld")
// }
// sayHey()
// 4. This keyword

const obj = {
    value: 20,
    myFunction: function(){
        console.log(this);
    },
};
obj.myFunction();
