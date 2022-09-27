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

    dailyForecast(response.data.coord);
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

//...... 7 day forecast JS begins here. 
//wrapped column in <div> id called "sevenday". Created and named a function below;
// 
function showSevenDay(response) {
    let sevenForecast = document.querySelector("#sevenday");

    let thePrediction = "";
    thePrediction = thePrediction + `<div class="row" id="row-1">
    <div class="col" id="day">TODAY</div>
    <div class="col" id="hitemp">20°</div>
    <div class="col" id ="icon">
      <img src=" http://openweathermap.org/img/wn/03d@2x.png" width="30" id="icon"></div>
    <div class="col" id="lowtemp">12°</div>`;

     let weekDay = ["WED", "THU", "FRI", "SAT"];
weekDay.forEach(function(day){  
    thePrediction = thePrediction + `<div class="row" id="row-1">
    <div class="col" id="day">${day}</div>
    <div class="col" id="hitemp">20°</div>
    <div class="col" id ="icon">
      <img src=" http://openweathermap.org/img/wn/03d@2x.png" width="30" id="icon"></div>
    <div class="col" id="lowtemp">12°</div>`;

});


     
 sevenForecast.innerHTML = thePrediction;
console.log(thePrediction);
}

function dailyForecast(coordinates) { 
    console.log(coordinates);

let apiKey = "73a00877081bd43422bdee0f3022beb5";
let dailyUrl =`https://api.openweathermap.org/data/3.0/onecall?lat=${coordinates.lat}&lon=${coordinates.lon}&appid=${apiKey}&units=metric`;

console.log(dailyUrl);

}



search("Soufrière");
showSevenDay();

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
