//challenge 1

function citySearch(submit) {
  submit.preventDefault();
  let cityName = document.querySelector("#entercity");
  let yourCity = document.querySelector("#city");
  yourCity.innerHTML = cityName.value;
  function getData(response) {
    console.log(response);

    let showCelsius = document.querySelector("#degrees");
    showCelsius.innerHTML = Math.round(response.data.main.temp);
    let showHumidity = document.querySelector("#hum");
    showHumidity.innerHTML = Math.round(response.data.main.humidity);

    //function fahDegrees(event) {
    //event.preventDefault();
    //let showFahrenheit = document.querySelector("#degrees");
    //showFahrenheit.innerHTML = 66;
    //}

    //let cDegrees = document.querySelector("#cel");
    //cDegrees.addEventListener("click", celDegrees);
    //let fDegrees = document.querySelector("#fah");
    //fDegrees.addEventListener("click", fahDegrees);
  }
  let apiKey = "0ebc654fccbc00189d5408f3d6f15b08";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(getData);
}
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
  "Saturday"
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

//challenge 2

//bonus
