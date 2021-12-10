const inputField = document.getElementById("location");
const submitBtn = document.getElementById("submitBtn");

const locationName = document.getElementById("locationName");
const currentStatus = document.getElementById("currentStatus");
const temp = document.getElementById("temp");
const pressure = document.getElementById("pressure");
const humidity = document.getElementById("humidity");

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  const location = inputField.value;

  const API_KEY = "0864352cf2a76992a73ec09e2d90a6b7";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      locationName.innerHTML = `Name: ${data.name}`;
      currentStatus.innerHTML = `Current Status: ${data.weather[0].description}`;
      temp.innerHTML = `Temp: ${data.main.temp} K`;
      pressure.innerHTML = `Pressure: ${data.main.pressure} hPA`;
      humidity.innerHTML = `Humidity: ${data.main.humidity}%`;
    })
    .catch((error) => {
      console.log(error);
    });
});
