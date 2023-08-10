import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function WeatherApp() {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="weather">
        <div
          style={{ display: "flex", alignItems: "center", marginTop: "-30px" }}
        >
          <img
            src={require("../../assets/images/left.png")}
            style={{
              marginTop: "20px",
              width: "35px",
              marginRight: "10px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
            alt=""
          ></img>
          <p className="app-title"> Weather App</p>
        </div>
        <div className="title-line"></div>
        <div className="weather-info">
          <img className="icon" src={state.imagePath} alt=""></img>
          <h1>{Math.round(state.temp)}°C</h1>
          <h2 style={{ marginTop: "-40px" }}>
            {state.description.toUpperCase()}
          </h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-25px",
            }}
          >
            <img
              src={require("../../assets/images/location.png")}
              style={{
                width: "20px",
                marginRight: "5px",
              }}
              alt=""
            ></img>
            <h2>
              {state.city}, {state.country}
            </h2>
          </div>
          <div className="details">
            <div className="col">
              <img
                src={require("../../assets/images/humidity.png")}
                alt=""
              ></img>
              <div className="humidity">
                <p>{state.humidity}%</p>
                <p>Humidity</p>
              </div>
            </div>
            <div className="col">
              <img
                src={require("../../assets/images/thermometer.png")}
                alt=""
              ></img>
              <div className="wind">
                <p>{Math.round(state.feelsLike)}°C</p>
                <p>Feels like</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
