// // closures are something in which the variable declares in outermost function can be accesed by innermost function and innermost function is called in outermost function and outermost function is call outside the function in the program
// function main(harsh){//by taking name as an attribute also we can call a function through a function
//     // var harsh = "i am harsh sahu";
//     function displaymyname(){
//         console.log(harsh);
//     }
//     // displaymyname();//here the function which is called inside is called as a closure
//     return displaymyname;//if we are returning this function then it is called internally

// }

// // if we are returning any function then the main function is called by returning into a main function
// let consolename = main("harsh");
// consolename();
// consolename();
// consolename();

// we can also create an adder or an utility function to get the addition of these numbers
// function adder(num){


//     function add(b){
//         console.log(num+b);//function in which num is added to 5
//     }



//     return add;
// }
// const toadd5 = adder(5); 
// // we can also create another function which will add to 10
// const addto10 = adder(10);

// toadd5(12);//this function will add 5 to whatever number we want to get addition of
// addto10(23);

// // CREATING A TEXT SIZER

// const myname = document.getElementById("my-name");
// const btn = document.getElementById("clickButton");
// function maketextsizer(size){
//     function changesize(){
//         myname.style.fontSize = `${size}px`; //to get the font size data from the element
//     }
//     return changesize;
// }
// const size12 = maketextsizer(12);
// const size20 = maketextsizer(20);

// btn.addEventListener("click",size12);

// CREATING A COUNTER

const myname = document.getElementById("my-name");
const btn = document.getElementById("clickButton");

function makecounter(){
    let count = 1;

    function increment(){
        console.log(count++);
    }
    return increment;
}
const counter1 = makecounter();

counter1();
counter1();//it will count the elements
