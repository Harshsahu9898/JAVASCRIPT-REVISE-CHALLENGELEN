// like we solved using id now we will do it by class
const elements = document.getElementsByClassName('block')
for(let i = 0;i<elements.length;i++){
    // convert the whole element in blue background
    elements.item(i).style.background="blue";
}   
const element = document.querySelector(".block-remove")
element.remove()
console.log(elements);