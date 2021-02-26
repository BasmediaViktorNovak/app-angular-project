export class DataTimeWeather {
  idWeather: number;
  dt: string;
  temperatureDay?: number;
  mainTemperatureMin?: number;
  mainTemperatureMax?: number;
  weatherMain: string;
  weatherDescription: string;
  weatherIcon: string;
  windSpeed: number;
  windDeg: number;

  constructor(idWeather: number, dataTimeWeatherResponse: any) {
    this.idWeather = idWeather;
    this.dt = new Date(dataTimeWeatherResponse.dt * 1000).toLocaleDateString('en-US');
    this.weatherMain = dataTimeWeatherResponse.weather[0].main;
    this.weatherDescription = dataTimeWeatherResponse.weather[0].description;
    this.weatherIcon = dataTimeWeatherResponse.weather[0].icon;
    this.windSpeed = dataTimeWeatherResponse.wind_speed;
    this.windDeg = dataTimeWeatherResponse.wind_deg;
    this.temperatureDay = dataTimeWeatherResponse.temp.day;
    this.mainTemperatureMin = dataTimeWeatherResponse.temp.min;
    this.mainTemperatureMax = dataTimeWeatherResponse.temp.max;

  }
}






