import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "17 July 2022",
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      iconUrl: "http://openweathermap.org/img/wn/04n@2x.png",
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather-app">
        <form className="mb-3">
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoComplete="off"
                autoFocus="on"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-100"
              />
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Current"
                className="btn btn-light w-100"
              />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="col-4">
            <div className="clearfix weather-temperature">
              <img
                src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"
              />
              <span className="float-left">
                <span className="current-temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="units">
                  <span>℃</span> |<span>℉</span>
                </span>
              </span>
            </div>
          </div>
          <div className="col-3">
            <ul className="weather-details">
              <li className="description">{weatherData.description}</li>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
          <div className="col-5">
            <div className="overview">
              <h1>{weatherData.city}</h1>
              <ul className="current-time">
                <li>{weatherData.date}</li>
                <li>Sunday 3:00 am</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "f617fc313f1abac3b9f67f0a1a41e6c4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
