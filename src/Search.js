import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <input
          type="text"
          className="form-control city-value"
          placeholder="Enter a city name"
          required
          autocomplete="off"
        />
        <input type="submit" value="Search" id="submit" />
      </form>
    </div>
  );
}
