// it will provide an event to the particular button or any script means if we will click then it will perform some event on it
// best way to do in production and all the ways
// we can also create a function 
function handleButtonClick(){
    console.log("That Button is Clicked");
    alert("Hey I am clicked");
}
// in this case one problem is there if we are giving id to some function then function override should be happened beause id is assigned and only one id should be passed so not possible to run two files
const el = document.getElementById("clickButton");
el.onclick = function(){
    console.log("Hey I am Clicked");
};

// Most preffered way of attaching event listeners is
// in this case both the functions is called and no override will occur
// we can even have multiple event listeners
const el = document.getElementById("clickButton");
function dosomething(){
    console.log("i am clicked");
}
el.addEventListener('click',dosomething); 

// when i click on the button i want to change the particular text to red then
const el = document.getElementById("clickButton");
const nameblock = document.getElementById("Name-Block")

el.addEventListener('click',()=>{
    // nameblock.style.color = 'red';
    // console.log(nameblock.style.color);
    if(nameblock.style.color==="red"){//for toggling we can pass this if else statement
        nameblock.style.color="blue";
    }
    else{
        nameblock.style.color = 'red';
    }
});


// if i want to delete all the elements in one click then
const allChildren = document.querySelector("body").children;

for(let i = 0 ;i< allChildren.length;i++){
    allChildren.item(i).addEventListener("click",()=>{
        allChildren.item(i).remove();
    })
}