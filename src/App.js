import React from "react";
import "./Weather.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <Weather />
        <footer>
          Open sourced on {""}
          <a
            href="https://github.com/aishah849/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          {""} and hosted by {""}
          <a
            href="https://storied-bonbon-baacab.netlify.app"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          . Coding by Aishah Al-Rashid.
        </footer>
      </div>
    </div>
  );
}
