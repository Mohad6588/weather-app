import React from "react";

export default function City() {
  let cityData = {
    name: "Paris",
    country: "France",
    date: "Friday 15:05",
    description: "Sunny",
  };
  return (
    <div className="City">
      <h2 className="city-name">{cityData.name}</h2>
      <h4 className="country-name">{cityData.country}</h4>
      <p className="day-time">{cityData.date}</p>
      <p className="wheather-description">{cityData.description}</p>
    </div>
  );
}
