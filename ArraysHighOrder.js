// const students = ['harsh','sujal','kabir','samir']
// // for(let i = 0 ;i<students.length;i++){
// //     console.log(students[i]);
// // }
// // dummy function used for printing an array
// function print(n){
//     console.log(n);
// }
// //basically for each function takes every array elements and then pass it into the array by traversing throughout the array
// students.forEach(print);
// // we can also pass an arrow function and then console logged into it
// // for each is a highorder function which is a type of function that accepts function as an argument
// students.forEach((val) => console.log(val));
// // the basic difference between .map and .foreach is that .map returns a new array but foreach doesnt return anything
// students.map(val => console.log(val));

const numbers = [1,2,3,4,5,6,7];
// if we want to print in same array
// numbers.forEach(num => console.log(num*2));
// // if we want to print double of an original array then
// // let newArr=[];//so here we have to create new array for returning an array
// numbers.forEach((num)=>newArr.push(num*2))
// console.log(newArr);
// for each cannot return anything means if we are passing a function then it will not return anything but map can return anything
function double(n){
    return n*2;
}
// basically map is something which loop in an array and return an array
let newArr = numbers.map(double);
console.log(newArr);
// it will return the number or element  in array by a single function called find
let ans = numbers.find(num => num=== 2*2);
console.log(ans);
// it will return the index of the number that we have searched for
let ans1 = numbers.findIndex(num => num=== 2*2);
console.log(numbers[ans1]);
// include is an highorder function that returns boolean value if true then returns true else it will return false
numbers.includes(4);
console.log(numbers);
// .filter will filter out all the even numbers from the array
const newarray = numbers.filter((num)=>num%2==0);
console.log(newarray);

let slicefunction  = numbers.slice(1,5);//it will start from 1 and end till n-1 means 5 will be printed 2,3,4,5 will be classified
console.log(slicefunction);
 let splicefunction = numbers.splice(1,4);//return the splice numbers
 console.log(splicefunction);//by deleting other array return the single array
 console.log(numbers);