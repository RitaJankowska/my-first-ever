function citySearch(submit) {
  submit.preventDefault();
  let cityName = document.querySelector("#entercity");
  let yourCity = document.querySelector("#city");
  yourCity.innerHTML = cityName.value;
  function getForecast(coordinates) {
    console.log(coordinates);
    let apiKey = "005d6aa9a4f3cb75ao04a8bb4ft840c8";
    let apiURL = `https://api.shecodes.io/weather/v1/forecast?lon=${coordinates.lon}&lat=${coordinates.lat}&key=${apiKey}`;
    console.log(apiURL);
    axios.get(apiURL).then(displayForecast);
  }
  function getData(response) {
    console.log(response);
    getForecast(response.data.coord);
    celsiusDegrees = response.data.main.temp;
    let showCelsius = document.querySelector("#degrees");
    showCelsius.innerHTML = Math.round(celsiusDegrees);
    let showHumidity = document.querySelector("#hum");
    showHumidity.innerHTML = Math.round(response.data.main.humidity);
    let windSpeed = document.querySelector("#windspeed");
    windSpeed.innerHTML = Math.round(response.data.wind.speed);
    let weatherDescription = document.querySelector("#weather-description");
    weatherDescription.innerHTML = response.data.weather[0].description;
    bigIcon = response.data.weather[0].icon;
    let iconSign = document.querySelector("#weather-icon");

    if (bigIcon === "01d" || bigIcon === "01n") {
      iconSign.setAttribute("src", "SRC/pics/icons/sunny.svg");
    }
    if (bigIcon === "02d" || bigIcon === "02n") {
      iconSign.setAttribute("src", "SRC/pics/icons/partlycloudy.svg");
    }
    if (
      bigIcon === "03d" ||
      bigIcon === "04d" ||
      bigIcon === "03n" ||
      bigIcon === "04n"
    ) {
      iconSign.setAttribute("src", "SRC/pics/icons/cloudy.svg");
    }
    if (bigIcon === "09d" || bigIcon === "09n") {
      iconSign.setAttribute("src", "SRC/pics/icons/rain_heavy.svg");
    }
    if (bigIcon === "10d" || bigIcon === "10n") {
      iconSign.setAttribute("src", "SRC/pics/icons/rainy.svg");
    }
    if (bigIcon === "11d" || bigIcon === "11n") {
      iconSign.setAttribute("src", "SRC/pics/icons/thunderstorm.svg");
    }
    if (bigIcon === "50d" || bigIcon === "50n") {
      iconSign.setAttribute("src", "SRC/pics/icons/mist.svg");
    }
    if (bigIcon === "13d" || bigIcon === "13n") {
      iconSign.setAttribute("src", "SRC/pics/icons/snow.svg");
    }
  }

  let apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getData);}


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

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let day = date.getDay();
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[day];
}
function displayForecast(response) {
  console.log(response);
  let forecast = response.data.daily;
  let forecastElement = document.querySelector("#forecast");

  let forecastHTML = ` <div class="row">`;

  forecast.forEach(function (forecastDay, index) {
    if (index < 5) {
      forecastHTML =
        forecastHTML +
        `<div class="col-2">
              ${formatDay(forecastDay.time)}
              <br />
              <img class="icon 1" id="small-icon" src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/${forecastDay.condition.icon}.png" />
              <br />
              <br />
              <span id="fore-temp-max">${Math.round(
                forecastDay.temperature.maximum
              )}</span>℃ | <span class="fore-temp-min">${Math.round(
          forecastDay.temperature.minimum
        )}</span><span class="min-temp">℃</span>
            </div>`;
            //let smallIcons = forecastDay.condition.icon;
            //let myIcons = document.querySelector("#small-icon");
            //if (smallIcons === "broken-clouds-day"){myIcons.setAttribute("src", "SRC/pics/icons/partlycloudy.svg");}

      
    }
});
  forecastHTML = forecastHTML + `</div>`;
  forecastElement.innerHTML = forecastHTML;
}
