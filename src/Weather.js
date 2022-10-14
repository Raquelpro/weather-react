import React, { useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./App.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
function handleResponse(response) {
  setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    date: new Date(response.data.dt * 1000),
    description: response.data.weather[0].description,
    iconUrl: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    wind: response.data.wind.speed,
    city: response.data.name,
  });
}

function search() {
const apiKey = "351f91287b21e3eaef97ef1db4d5e2ba";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse); 
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}


function handleCityChange(event) {
setCity(event.target.value)
}

if (weatherData.ready) {
  return (
    <div className="Weather">
    <div className="container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form onSubmit={handleSubmit} className="mb-5">
            <div className="row">
              <div className="col-9">
                <input
                  type="search"
                  placeholder="Type a city.."
                  className="form-control"
                  onChange={handleCityChange}
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
          <WeatherInfo data={weatherData}/>
        </div>
  </div>
  </div>  
  </div>
);
} else {
  search();
  return "Loading...";
}  
}