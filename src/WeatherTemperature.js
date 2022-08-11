import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <span className="float-left">
        {" "}
        <span className="current-temperature">{Math.round(props.celsius)}</span>
        <span className="units">
          <span>ºC</span> |
          <span>
            <a href="/" onClick={showFahrenheit}>
              ºF
            </a>
          </span>
        </span>
      </span>
    );
  } else {
    return (
      <span className="float-left">
        {" "}
        <span className="current-temperature">{Math.round(fahrenheit())}</span>
        <span className="units">
          <span>
            <a href="/" onClick={showCelsius}>
              ºC
            </a>
          </span>{" "}
          |<span>ºF</span>
        </span>
      </span>
    );
  }
}
