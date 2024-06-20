   const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityname= document.getElementById('city-name');
const citytime= document.getElementById('city-time');
const citytemp = document.getElementById("city-temp")
async function getData(cityname){
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=26dd3459ea9d40589c062013242504&q=${cityname}&aqi=yes`

    );
    return await promise.json()
}
button.addEventListener("click",async(input)=>{
    const value  = input.value;
    // getData(value);
    const result = await getData(value);
    cityname.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`
});
alert('ok');

