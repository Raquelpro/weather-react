import React from "react";
import "./App.css";

export default function Weather() {
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
                  <h1>Dallas Texas</h1>
                  <ul>
                    <li>
                      Last updated at: <span>Monday</span>
                    </li>
                    <li></li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 offset-md-4">
                  <div className="clearfix weather-temperature">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                      alt="clear"
                      id="icon"
                    />
                    <strong></strong>
                    <span className="units">
                      <a href="/">°C</a> |<a href="/">°F</a>
                    </span>
                  </div>
                </div>
  
                <div className="col-md-3 offset-md-3">
                  <ul>
                    <li>Precipitation: 0%</li>
                    <li>
                      Humidity: <span>80%</span>%
                    </li>
                    <li>
                      Wind: <span>35</span>km/hr
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
    )
}