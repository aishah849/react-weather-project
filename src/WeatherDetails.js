import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherDetails(props) {
  return (
    <div className="row">
      <div className="col-4">
        <div className="clearfix weather-temperature">
          <span className="float-left">
            <WeatherIcon code={props.data.icon} />
          </span>
          <span className="float-left">
            <span className="current-temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="units">
              <span>℃</span> |<span>℉</span>
            </span>
          </span>
        </div>
      </div>
      <div className="col-3">
        <ul className="weather-details">
          <li className="description">{props.data.description}</li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {Math.round(props.data.wind)}km/h</li>
        </ul>
      </div>
      <div className="col-5">
        <div className="overview">
          <h1>{props.data.city}</h1>
          <FormattedDate date={props.data.date} />
        </div>
      </div>
    </div>
  );
}
