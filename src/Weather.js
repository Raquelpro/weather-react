import React, { useState} from "react";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
function handleResponse(response) {
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: "Wednesday 07:00",
    description: response.data.weather[0].description,
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    wind: response.data.wind.speed,
    city: response.data.name
  });
}

if (weatherData.ready) {
  return (
    <div className="Weather">
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form className="mb-5">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                />
              </div>
              <div className="col-3">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Submit"
                />
              </div>
            </div>
          </form>
          <div className="container text-center">
            <div className="col-md-6 offset-md-3">
              <h1>{weatherData.city}</h1>
              <ul>
                <li>
                  Last updated at: <span>{weatherData.date}</span>
                </li>
                <li className="text-capitalize">{weatherData.description}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="clearfix weather-temperature">
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon"
                />
                <strong></strong>
                <span className="units">{Math.round(weatherData.temperature)}
                  <a href="/">°C</a> |<a href="/">°F</a>
                </span>
              </div>
            </div>

            <div className="col-md-3 offset-md-3">
              <ul>
                <li>Precipitation: 0%</li>
                <li>
                  Humidity: <span>{weatherData.humidity}</span>
                </li>
                <li>
                  Wind: <span>{weatherData.wind}</span>km/hr
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <div className="weather-forcast"></div>
        <div className="row"></div>
        <small>
          <a href="https://github.com/Raquelpro/weather-react" target="_blank" rel="noreferrer">
            Open-source code
          </a>
          , by Raquel Provvidente
        </small>
      </div>
    </div>
  </div>  
);
} else {
  const apiKey = "3ed26e20a2e7286d23126eb51e31f310";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);  

  return "Loading...";
}  
}