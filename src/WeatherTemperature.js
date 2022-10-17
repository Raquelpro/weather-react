import React, {useState} from "react";


export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");
    function showFarenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
}

    if (unit === 'celsius') {
    return (
        <div className="WeatherTemperature">
        <span className="units">{Math.round(props.celsius)}
        <a href="/">°C</a> | {""}<a href="/" onclick={showFarenheit}>°F</a>
      </span> 
      </div>
    );
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32;
        return (
            <div className="WeatherTemperature">
            <span className="units">{Math.round(fahrenheit)}
            <a href="/" onclick={showCelsius}>°C</a> {""}|<a href="/" >°F</a>
          </span> 
          </div>   
        )
    }
}