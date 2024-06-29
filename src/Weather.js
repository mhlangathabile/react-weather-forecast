import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [loading, setLoading] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      city: response.data.name,
    });

    setLoading(true);
  }

  if (loading) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="Search"
                placeholder="Enter city..."
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="Submit"
                placeholder="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <h1>Bangkok, Thailand</h1>
        <ul>
          <li>Wednesday 18:00</li>
          <li>{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img src="" alt="Cloudy" className="float-left" />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation : 0%</li>
              <li>Humidity : {weatherData.humidity}%</li>
              <li>Wind : {weatherData.wind}km/hr</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "40b745c14eadad7b7c4e6e4bf3b70103";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
