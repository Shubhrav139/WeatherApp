import React from "react";
import axios from "axios";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import { cityValidation } from "../Validation/validationSchema";
import { toast } from "react-hot-toast";

export default function Home() {
  const navigate = useNavigate();

  let imagePaths = {
    Clouds: require("../../assets/images/clouds.png"),
    Thunderstorm: require("../../assets/images/thunderstorm.png"),
    Drizzle: require("../../assets/images/drizzle.png"),
    Rain: require("../../assets/images/rain.png"),
    Snow: require("../../assets/images/snow.png"),
    Haze: require("../../assets/images/mist.png"),
    Clear: require("../../assets/images/clear.png"),
  };

  const checkWeather = (city) => {
    let data = {};
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=172437b7ca96ca9c1bf604acbe3da004&units=metric`
      )
      .then((result) => {
        console.log(result.data);
        let imagePath = imagePaths[result.data.weather[0].main];

        data = {
          ...data,
          city: result.data.name,
          country: result.data.sys.country,
          temp: result.data.main.temp,
          weather: result.data.weather[0].main,
          description: result.data.weather[0].description,
          humidity: result.data.main.humidity,
          feelsLike: result.data.main.feels_like,
          imagePath: imagePath,
        };

        navigate("/weather-app", { state: data });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message, {
          id: "error",
          duration: 2500,
        });
      });
  };

  return (
    <div className="container">
      <div className="home">
        <p className="app-title" style={{ marginTop: "-5px" }}>
          Weather App
        </p>
        <div className="title-line"></div>
        <div className="custom-form">
          <Formik
            enableReinitialize={true}
            validateOnMount={true}
            validateOnChange={true}
            validateOnBlur={true}
            validationSchema={cityValidation}
            initialValues={{
              city: "",
            }}
            onSubmit={(value) => {
              checkWeather(value.city);
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <div className="row">
                  <div className="col-12">
                    <Field
                      type="text"
                      name="city"
                      placeholder="Enter city name"
                      className={
                        "form-control" +
                        (errors.city && touched.city ? " is-invalid" : "")
                      }
                    />
                    <ErrorMessage
                      name="city"
                      component="div"
                      className="form_invalid"
                    />
                  </div>
                </div>
                <div className="col-12 p-3">
                  <button type="submit" value="SEARCH" className="btn">
                    Search
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}
