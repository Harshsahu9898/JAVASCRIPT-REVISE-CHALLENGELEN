// here we can directly type what we need without selecting any # or other element 
// we can also add classess and also access the classes 
const el = document.getElementById("username");
console.log(el.id);//we can add id or set attribute also
el.setAttribute("harsh","123");
el.innerText="harshu";
// el.classList.add('red-color');//by javascript we can inject the color to the text that we want to add
// el.classList.remove("red-color");
// to style the elements using javascript we should write
el.style.textDecoration="underline";
el.style.color = "tomato";
// console.log(el.innerText);
// console.log(el.classList);
el.parentElement.style.background = "grey";
console.log(el.parentElement);//we can acces the parent element and also can apply styles to it
// we can also remove the element from the dom 
// By
el.remove();//it can remove whole dom