import "../../styles/WeatherLoader.css";

function WeatherLoader() {
  return (
    <div class="weather-loader wrapper">
      <div class="weather-loader cloud">
        <div class="weather-loader cloud_left"></div>
        <div class="weather-loader cloud_right"></div>
      </div>
      <div class="weather-loader rain">
        <div class="weather-loader drop"></div>
        <div class="weather-loader drop"></div>
        <div class="weather-loader drop"></div>
        <div class="weather-loader drop"></div>
        <div class="weather-loader drop"></div>
      </div>
      <div class="weather-loader surface">
        <div class="weather-loader hit"></div>
        <div class="weather-loader hit"></div>
        <div class="weather-loader hit"></div>
        <div class="weather-loader hit"></div>
        <div class="weather-loader hit"></div>
      </div>
    </div>
  );
}

export default WeatherLoader;
