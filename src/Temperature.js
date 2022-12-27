import React from "react";

export default function Temperature() {
  let currentTemp = 21;
  return (
    <div className="Temperature">
      <h1 className="current-temperature">{currentTemp}</h1>
      <span className="unit">°C </span>
    </div>
  );
}
