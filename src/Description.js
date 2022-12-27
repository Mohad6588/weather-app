import React from "react";
export default function Description() {
  let weatherData = {
    "feels-like": 19,
    humidity: 85,
    wind: 4,
  };
  return (
    <div className="Description">
      <div>
        <label for="feels-like">Feels like:{weatherData["feels-like"]} </label>
        <span id="feels-like">°C</span>
      </div>
      <div>
        <label for="humidity">Humidity:{weatherData.humidity} </label>
        <span id="humidity">%</span>
      </div>
      <div>
        <label for="wind">Wind: {weatherData.wind}</label>{" "}
        <span id="wind"> m/s</span>
      </div>
    </div>
  );
}
