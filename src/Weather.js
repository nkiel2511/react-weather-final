import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";

import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.value);

    function handleResponse(response) {
        console.log(response.data);
        setWeatherData({
            ready: true,
            temp: response.data.temperature.current,
            wind: response.data.wind.speed,
            city: response.data.city,
            date: new Date(response.data.time * 1000),
            humidity: response.data.temperature.humidity,
            icon: response.data.condition.icon,
            description: response.data.condition.description
        });
    }

    function search() {
      let apiKey = "7ff3c5ef4330987abab23faeo62t9ee4";
      let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);

    }

    function handleSubmit(event) {
        event.preventDefault();
        search(city);
        // search for a city
    }
    function handleCityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {  
    return (
    <div className="Weather">
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-9">
            <input type="search" placeholder="Enter a city ..." className="form-control" autoFocus="on" onChange={handleCityChange}/>
            </div>
            <div className="col-3">
            <input type="submit" value="search" className="btn btn-primary w-100" />
             </div>
        </div>
        </form>
        <WeatherInfo data={weatherData} />
     
    </div>
    );
    
} else {

    search();
    return "Loading ..."

}
}