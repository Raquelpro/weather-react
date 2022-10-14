import React from "react";
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Dallas"/>
        <footer>
        <a href="https://github.com/Raquelpro/weather-react" target="_blank" rel="noreferrer">
            Open-source code
          </a>
          , by Raquel Provvidente 
        </footer>
      </div>
    </div>
  );
}

export default App;
