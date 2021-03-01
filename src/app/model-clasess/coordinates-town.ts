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
  coordLon: number;
  coordLat: number;

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
