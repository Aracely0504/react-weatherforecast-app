import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setTemperature(response.data.main.temp);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city.."
                className="form-control"
                autoFocus="on"
              />{" "}
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Wednesday 07:00</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                alt="rainy"
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">{temperature}</span>
                <span className="unit">°C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation:55%</li>
              <li>Humidity:88%</li>
              <li>Wind:10 km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6782253072f7d90462731a624097fc54";
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
