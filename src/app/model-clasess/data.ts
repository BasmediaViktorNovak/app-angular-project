export class DataTimeWeather {
  dt: string;
  temperatureDay?: number;
  mainTemperatureMin?: number;
  mainTemperatureMax?: number;
  weatherMain: string;
  weatherDescription: string;
  weatherIcon: string;
  windSpeed: number;
  windDeg: number;

  constructor(dataTimeWeatherResponse: any) {
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



export class CoordinatesTown {
  id: number;
  nameCity: string;
  currentWeatherMain: string;
  currentWeatherDescription: string;
  currentTemperatureMainTemp: number;
  currentTemperatureMainTempMin: number;
  currentTemperatureMainTempMax: number;
  currentWindSpeed: number;
  currentWindDeg: number;
  currentDateTime: string;
  coordLon: string;
  coordLat: string

  constructor(townData: any) {
    this.id = townData.id;
    this.nameCity = townData.name;
    this.currentWeatherMain = townData.weather[0].main;
    this.currentWeatherDescription = townData.weather[0].description;
    this.currentTemperatureMainTemp = townData.main.temp;
    this.currentTemperatureMainTempMin = townData.main.temp_min;
    this.currentTemperatureMainTempMax = townData.main.temp_max;
    this.currentWindSpeed = townData.wind.speed;
    this.currentWindDeg = townData.wind.deg;
    this.currentDateTime = new Date(townData.dt * 1000).toLocaleDateString('en-US');
    this.coordLat = townData.coord.lat;
    this.coordLon = townData.coord.lon;
  }
}



