import { useState, useEffect, useContext } from "react";
import { LoaderContext } from "../../contexts/LoaderContextProvider";
import axios from "axios";
import bgimg from "../../assets/images/bg/bg1.jpg";
import WeatherLoader from "../commons/WeatherLoader";

function Card() {
  const { isLoading, setIsLoading } = useContext(LoaderContext);
  const [weather, setWeather] = useState({ temp: "", type: "", country: "" });
  const [location, setLocation] = useState("");

  const handleSubmit = () => {
    setIsLoading(true);
    axios
      .get(
        `${process.env.REACT_APP_WEATHER_API}?q=${location}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        const result = response.data;
        setWeather({
          temp: (result.main.temp - 273).toFixed(2),
          type: result.weather[0].description.toLowerCase(),
          country: location.toUpperCase() + ", " + result.sys.country,
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card sm:w-96 bg-base-100 shadow-xl image-full m-auto">
      <figure>
        <img src={bgimg} alt="background" />
      </figure>
      <div className="card-body m-auto text-center">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <WeatherLoader />
          </div>
        ) : (
          <>
            <h2 className="card-title justify-center text-2xl">
              {weather.country}
            </h2>
            <p className="text-2xl">{weather.type}</p>
            <p className="text-5xl">{weather.temp}°C</p>
          </>
        )}
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Enter City</span>
          </label>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs text-black"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <button
            className="btn btn-primary my-2"
            onClick={() => {
              handleSubmit();
            }}
          >
            Search 🔎
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
