import React from "react";
import "./Weather.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="container">
      <div className="weather-app-wrapper">
        <Weather defaultCity="Singapore" />
        <footer>
          Open sourced on {""}
          <a
            href="https://github.com/aishah849/react-weather-project"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          {""} and hosted by {""}
          <a
            href="https://luminous-sundae-7301a5.netlify.app"
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
