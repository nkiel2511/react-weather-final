import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
    let [weatherData, setWeatherData] = useState({ ready: false });

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temp: response.data.main.temp,
            wind: response.data.wind.speed,
            city: response.data.name,
            date: "Wednesday 07:00",
            humidity: response.data.main.humidity,
            iconUrl: "https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg",
            description: weatherData.data.weather[0].description
        });
    }

    let city = "Glasgow"
    let apiKey = "7ff3c5ef4330987abab23faeo62t9ee4";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric';
    axios.get(apiUrl).then(handleResponse);

    if (weatherData.ready) {
    return <div className="Weather">
        <form>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city ..." className="form-control" autoFocus="on"/>
            </div>
            <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary w-100" />
             </div>
        </div>
        </form>
        
        <h1>{weatherData.city}</h1>
        <ul>
            <li>{weatherData.date}</li>
            <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
             <div className="clearfix">
                <img src={weatherData.iconUrl}
                alt={weatherData.description}
                className="float-left"/>
        
        
                <span className="temp float-left">{Math.round(weatherData.temp)}</span>
                <span className="unit float-left">°C</span>

              </div>
            </div>
        </div>
            <div className="col-6">
                <ul>
                    <li>Humidity: {weatherData.humidity}</li>
                    <li>Wind: {weatherData.wind}</li>
                </ul>
            </div>
    </div>
    ;
} else {

    let city = "Glasgow"
    let apiKey = "7ff3c5ef4330987abab23faeo62t9ee4";
    let apiUrl = 'https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric';
    axios.get(apiUrl).then(handleResponse);

    return "Loading ..."

}
}