function showTemperature(response) {
    console.log(response)
    console.log(response.data.main.temp);
    let degrees = document.querySelector("#degrees");
    degrees.innerHTML = Math.round(response.data.main.temp);
    
    let city = document.querySelector("#city");
    city.innerHTML=response.data.name;
    
    let sky = document.querySelector("#element");
    sky.innerHTML= response.data.weather[0].main;
    
    let hum =document.querySelector("#humid");
    hum.innerHTML = (response.data.main.humidity) + "% Humidity";


    celsiusTemp = response.data.main.temp;

}

function search(city) {
let apiKey = "de561b681be5798e182b6fa0a38a5264";
weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
axios.get(weatherUrl).then(showTemperature);

}


// the pullCity function is catching the data of what was typed in the box. 
// location is equal to the data typed in the box. the form box is selected using doc.query.
// the data typed into the form box is declared as a 'value'. This value can be checked by logging it in the
// the console.log. ie --> console.log(location.value) shows the "value" of what was typed into the form box after browser refresh.
// 
function pullCity(event) {
    event.preventDefault();
    let location = document.querySelector("#locate-city")
 search(location.value);
}

search("Soufrière");

// this is selecting the form and button.
let form = document.querySelector("#searchbox");
form.addEventListener("submit", pullCity);


callTime();
function callTime() {
let currentTime = new Date(); {

console.log(currentTime.getDate());
let days = [ "Sunday" , "Monday", "Tuesday","Wednesday", "Thursday" , "Friday" , "Saturday"]

let date = days[currentTime.getDay()];
let hours =currentTime.getHours();
let minutes = currentTime.getMinutes();

let h3 = document.querySelector("h3");
h3.innerHTML = `${date} ⎟ ${hours}:${minutes}`;
}}


function showfTemp (event) {
    event.preventDefault();
    let fTemp = (celsiusTemp * 9)/5 + 32;
let degrees = document.querySelector("#degrees");
degrees.innerHTML= Math.round(fTemp);

}

function showcTemp(event) {
    event.preventDefault();
    let degrees = document.querySelector("#degrees");
    degrees.innerHTML= Math.round(celsiusTemp);}

let celsiusTemp = null;

let farlink = document.querySelector("#flink");
farlink.addEventListener("click", showfTemp)

let cellink = document.querySelector("#clink");
cellink.addEventListener("click", showcTemp)
