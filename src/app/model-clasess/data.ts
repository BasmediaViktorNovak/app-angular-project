export class DataTimeWeather {
  dt: string;
  mainTemperature?: number;
  temperatureDay?: number;
  mainTemperatureMin?: number;
  mainTemperatureMax?: number;
  weatherMain: string;
  weatherDescription: string;
  weatherIcon: string;
  windSpeed: number;
  windDeg: number;

  constructor(dataTimeWeatherResponse: any) {
    debugger;
    this.dt = new Date(dataTimeWeatherResponse.dt * 1000).toLocaleDateString('en-US');
    this.mainTemperature = dataTimeWeatherResponse.temp;
    this.temperatureDay = dataTimeWeatherResponse.temp.day;
    this.mainTemperatureMin = dataTimeWeatherResponse.temp.min;
    this.mainTemperatureMax = dataTimeWeatherResponse.temp.max;
    this.weatherMain = dataTimeWeatherResponse.weather[0].main;
    this.weatherDescription = dataTimeWeatherResponse.weather[0].description;
    this.weatherIcon = dataTimeWeatherResponse.weather[0].icon;
    this.windSpeed = dataTimeWeatherResponse.wind_speed;
    this.windDeg = dataTimeWeatherResponse.wind_deg;
  }
}

export class CoordinatesTown {
  id: number;
  nameCity: string;
  coordLon: string;
  coordLat: string;

  constructor(townData: any) {
    this.id = townData.id;
    this.nameCity = townData.name;
    this.coordLat = townData.coord.lat;
    this.coordLon = townData.coord.lon;
  }
}


export class TotalDataWeather {
  coordinatesTown: CoordinatesTown;
  currentWeather: DataTimeWeather;
  arrayDateTime: Array<DataTimeWeather> = new Array<DataTimeWeather>();

  constructor(coordinatesTown: CoordinatesTown, dataTimeWeather: any) {
    this.coordinatesTown = new CoordinatesTown(coordinatesTown);
    this.currentWeather = new DataTimeWeather(dataTimeWeather.current);
    for (const itemDay of dataTimeWeather.daily) {
      this.arrayDateTime.push(new DataTimeWeather(itemDay));
    }
  }
}



