import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix">
            <img src="" alt="Cloudy" className="float-left" />
            <div className="float-left">
              <span className="temperature">26</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation : 0%</li>
            <li>Humidity : 85%</li>
            <li>Wind : 11km/hr</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
