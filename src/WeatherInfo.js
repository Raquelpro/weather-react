import React from "react";
import FormatedDate from "./FormatedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
        <div className="WeatherInfo">
        <div className="container text-center">
            <div className="col-md-6 offset-md-3">
              <h1>{props.data.city}</h1>
              <ul>
                <li>
                  Last updated at: <FormatedDate date={props.data.date} />
                </li>
                <li className="text-capitalize">{props.data.description}</li>
              </ul>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="clearfix weather-temperature">
              <div className="float-left">
                <WeatherIcon code={props.data.icon} />
                </div>
                <strong></strong>
                <span className="units">{Math.round(props.data.temperature)}
                  <a href="/">°C</a> |<a href="/">°F</a>
                </span>
              </div>
            </div>
            <div className="col-md-3 offset-md-3">
              <ul>
                <li>Precipitation: 0%</li>
                <li>
                  Humidity: <span>{props.data.humidity}</span>
                </li>
                <li>
                  Wind: <span>{props.data.wind}</span>km/hr
                </li>
              </ul>
            </div>
          </div>
          </div>
    );
}