import React from "react";

export default function FormattedDate(props) {
  let date = props.date.getDate();

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let month = months[props.date.getMonth()];

  let year = props.date.getFullYear();

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];

  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    hours = `0${minutes}`;
  }

  return (
    <div>
      <ul className="current-time">
        <li>
          {date} {month} {year}
        </li>
        <li>
          {day} {hours}:{minutes}HRS
        </li>
      </ul>
    </div>
  );
}
