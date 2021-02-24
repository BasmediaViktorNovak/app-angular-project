export class DataWeather {
  id: number;
  nameCity: string;
  temp: number;
  tempMax: number;
  tempMin: number;
  dateTime: string;
  weatherMain: string;
  weatherDescription: string;
  windDeg: number;
  windSpeed: number;

  constructor(weatherResponse: any) {
      this.id = weatherResponse.city.id;
      this.nameCity = weatherResponse.city.name;
      this.temp = weatherResponse.main.temp;
      this.tempMax = weatherResponse.main.temp_max;
      this.tempMin = weatherResponse.main.temp_min;
      this.dateTime = weatherResponse.time;
      this.weatherMain = weatherResponse.weather[0].main;
      this.weatherDescription = weatherResponse.weather[0].description;
      this.windDeg = weatherResponse.wind.deg;
      this.windSpeed = weatherResponse.wind.speed;
  }
}
