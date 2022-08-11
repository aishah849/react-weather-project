import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
  return (
    <div className="WeatherForecast">
      <div className="Row">
        <div className="col">
          <div className="WeatherForecast-day">Thurs</div>
          <WeatherIcon code="02d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-max">19º</span>
            <span className="WeatherForecast-min">10º</span>
          </div>
        </div>
      </div>
    </div>
  );
}
