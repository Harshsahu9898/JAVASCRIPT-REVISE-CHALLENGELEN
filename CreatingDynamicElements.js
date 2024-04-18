// we can create any dynamic elements also that we can run anything by our wish if we want to put inside the dom automatically or manually by ourself
const button = document.getElementById('clickButton');
const container = document.getElementById('my-container');

let count =1 ;
button.addEventListener("click",()=>{
    const el = document.createElement('h1');//this is for creating
    el.innerText = "harsh sahu";
    // container.innerText = el;
    // container.innerHTML="<h1>harsh</h1>";
    //we can add manually anything dynamically using this
    el.innerText=count;
    container.appendChild(el);//for getting multiple time rendering we can pass append child to the container
    count++;

});