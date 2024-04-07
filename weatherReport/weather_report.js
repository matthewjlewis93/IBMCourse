const lat = "32.72408";
const lon = "-97.16635";
const APIkey = "1978e536b0eedbbf8e9eed2c96acd0b9"; 

const city = document.getElementById('city').value;
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIkey}&units=metric`;

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`;

function showWeatherDetails(event) {
    event.preventDefault();

}