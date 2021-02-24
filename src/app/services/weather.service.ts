import {Injectable} from '@angular/core';
import {Observable, of, Subject} from 'rxjs';
import * as ApiDataWeather from '../json/weather_14.json';
import {DataWeather} from '../model-clasess/data';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  dayItemSubject: Subject<DataWeather> = new Subject<DataWeather>();
  weatherDataArray: Array<DataWeather> = new Array<DataWeather>();


  constructor() {
  }

  getListDataWeather(): Observable<Array<DataWeather>> {
    for (const item of ApiDataWeather['default']) {
      this.weatherDataArray.push(new DataWeather(item));
    }
    return of(this.weatherDataArray);
  }

  getItemData(id: number): Observable<DataWeather> {
    return of(this.weatherDataArray.find(item => item.id === id));
  }


}
