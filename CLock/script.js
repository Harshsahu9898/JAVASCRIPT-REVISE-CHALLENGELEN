const button = document.getElementById('stop-btn')

function showtime(){
    const currenttime = new Date();//it will show the current time
    const time = `${currenttime.getHours()}:${currenttime.getMinutes()}:${currenttime.getSeconds()}`
    document.getElementById("time").innerText = time;
}

// setTimeout(() => console.log("hi"),5000);//it will run for 5 secondss then display hi
// setInterval(() => console.log("hi"),5000);//after every 5 seconds it will display hi continously
// so i have to refresh time after every 1 seconds so
// for this we can use set interval that real time can work in a workflow in a continous manner
let interval = setInterval(showtime,1000);//change time after every second and 1000 milliseconds

button.addEventListener('click',() => {
    clearInterval(interval);//it is an inbuilt function which is introduced to stop the interval of the button
})


