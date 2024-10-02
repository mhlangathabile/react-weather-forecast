import React from "react";

export default function WeatherTempterature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="temperature">{Math.round(props.celsius)}</span>
      <span className="unit">°C | °F</span>
    </div>
  );
}