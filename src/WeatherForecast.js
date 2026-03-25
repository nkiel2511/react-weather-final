import React from "react";
import WeatherIcon from "./WeatherIcon.js"
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "7ff3c5ef4330987abab23faeo62t9ee4";
  let city = props.city.city;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
  
    return (
     <div className="WeatherForecast">
        <div className="row">
                  <div className="col">
                    <WeatherIcon code="01d" size={36} />
                    <div className="WeatherForecast-day">Thu</div>
                    <div className="WeatherForecast-temp">
                      <span className="WeatherForecast-temp-max">19</span>
                      <span className="WeatherForecast-temp-min">10</span> 
                    </div>
                   </div>
        </div>
     </div>
    );
}