import React from "react";
import "./Weather.css";

export default function Weather() {
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
        
        <h1>Glasgow</h1>
        <ul>
            <li>Wednesday 07:00</li>
            <li>Mostly cloudy </li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
             <div className="clearfix">
                <img src="https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg"
                alt="Mostly Cloudy"
                className="float-left"/>
        
                <span className="temp float-left">6</span>
                <span className="unit float-left">°C</span>

              </div>
            </div>
        </div>
            <div className="col-6">
                <ul>
                    <li>Percipitation: 15%</li>
                    <li>Humidity: 62%</li>
                    <li>Wind: 13 km/h</li>
                </ul>
            </div>
    </div>;
}