function citySearch(submit) {
  submit.preventDefault();
  let cityName = document.querySelector("#entercity");
  let yourCity = document.querySelector("#city");
  yourCity.innerHTML = cityName.value;
  function getData(response) {
    console.log(response);

    celsiusDegrees = response.data.main.temp;
    let showCelsius = document.querySelector("#degrees");
    showCelsius.innerHTML = Math.round(celsiusDegrees);
    let showHumidity = document.querySelector("#hum");
    showHumidity.innerHTML = Math.round(response.data.main.humidity);
    let windSpeed = document.querySelector("#windspeed");
    windSpeed.innerHTML = Math.round(response.data.wind.speed);
    let weatherDescription = document.querySelector("#weather-description");
    weatherDescription.innerHTML = response.data.weather[0].description;
  }

  let apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getData);
}
function fahDegrees(event) {
  event.preventDefault();
  let showFahrenheit = document.querySelector("#degrees");
  showFahrenheit.innerHTML = Math.round((celsiusDegrees * 9) / 5 + 32);
}
let fDegrees = document.querySelector("#fah");
fDegrees.addEventListener("click", fahDegrees);

function celDegrees(event) {
  event.preventDefault();
  let makeCelsiusAgain = document.querySelector("#degrees");
  makeCelsiusAgain.innerHTML = Math.round(celsiusDegrees);
}
let cDegrees = document.querySelector("#cel");
cDegrees.addEventListener("click", celDegrees);

let celsiusDegrees = null;

let search = document.querySelector("#search-form");
search.addEventListener("submit", citySearch);

let now = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let actualDay = document.querySelector("#day");
actualDay.innerHTML = days[now.getDay()];
let theHour = now.getHours();
if (theHour < 10) {
  theHour = `0${theHour}`;
}
let actualHour = document.querySelector("#hour");
actualHour.innerHTML = `${theHour}`;
let theMinutes = now.getMinutes();
if (theMinutes < 10) {
  theMinutes = `0${theMinutes}`;
}
let actualMinutes = document.querySelector("#minutes");
actualMinutes.innerHTML = `${theMinutes}`;
