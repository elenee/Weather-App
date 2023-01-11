import React from "react";
import "./Card.css";
import Detail from "./Detail";

function Card({ weather }) {
  return (
    <div className="weather-container">
      <div className="top">
        <div className="top-text">
          <p className="city">{weather?.data?.name}</p>
          <p className="desc">{weather?.data?.weather[0]?.description}</p>
        </div>
        <div className="icon">
          <img
            src={
              process.env.PUBLIC_URL +
              `/icons/${weather?.data?.weather[0]?.icon}.png`
            }
          />
        </div>
      </div>
      <div className="bottom">
        <p className="temperature">
          {Math.round(weather?.data?.main?.temp) - 273}°C
        </p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <Detail
            label={"Feels like"}
            value={`${Math.round(weather?.data?.main?.feels_like) - 273}°C`}
          />
          <Detail label={"Wind"} value={`${weather?.data?.wind?.speed} m/s`} />
          <Detail
            label={"Humidity"}
            value={`${weather?.data?.main?.humidity}%`}
          />
          <Detail
            label={"Pressure"}
            value={`${weather?.data?.main?.pressure} hPa`}
          />
        </div>
      </div>
    </div>
  );
}

export default Card;
