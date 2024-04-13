// Arrays
// if we want to store multiple things in one variable then arrays is used
const students = ['harsh','kabir','rahul','sahu'];//in const we can change the values that is already existing but we cannot able to assign a new variable
// we can also change array values
students[0]="harshu";//we can mutate means change an array elements
console.log(students[0]);//for getting data for a single element
console.log(students);//all values in an array is printed

const students = ['harsh','kabir','rahul','sahu'];//in const we can change the values that is already existing but we cannot able to assign a new variable
// students.push("harshu");//it is a built in function which can be accesed anytime in an array or we can add any value in an arrray directly using push function 
// we can also push multiple values at the end of an array
students.push('h','a','r','s','h')
students.pop();//it can remove the last value present in an array
students.reverse();//it can reverse the whole array
students.reverse();//it can reverse the whole array
console.log(students);

// arrays are homogenous in most of the cases means whole array is integer 
// but in case of javascript we have heterogeneous array of multiple kinds means integer boolean strring
// we can even have objects inside an array

const myArr = ['harsh',7,true,false];
myArr.push('kabir');
myArr.push({age: 18});//we can also push objects inside array in javascript

console.log(myArr);
// we can also able to find the index of an array if index is not there then it will return -1
console.log(myArr.indexOf("kabir"))
