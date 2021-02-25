import {Injectable} from '@angular/core';
import {concat, forkJoin, from, Observable, of, Subject, timer} from 'rxjs';
import {CoordinatesTown, DataTimeWeather, TotalDataWeather} from '../model-clasess/data';
import {ARRAY_TOWN} from '../array-town/array-town';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {concatMap, delay, map, mergeMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  dayItemSubject: Subject<DataTimeWeather> = new Subject<DataTimeWeather>();

  totalWeatherDataArray: Array<TotalDataWeather> = new Array<TotalDataWeather>();

  coordinatesTown: Array<CoordinatesTown> = new Array<CoordinatesTown>();
  dataTimeWeather: Array<DataTimeWeather> = new Array<DataTimeWeather>();

  coordinatesTownObs: Observable<CoordinatesTown> = new Observable<CoordinatesTown>();
  dataTimeWeatherObs: Observable<DataTimeWeather> = new Observable<DataTimeWeather>();


  constructor(private http: HttpClient) {

    this.getDataTownObs();
  }


  getDataTown(): void {
    for (const itemTown of ARRAY_TOWN) {
      this.getCoordinatesTown(itemTown).subscribe(item => {
        console.log('item', item);
        this.coordinatesTown.push(item);
        this.getDataWeatherDays(item.coordLat, item.coordLon).subscribe(itemWeatherDay => {
            console.log('itemWeatherDay', itemWeatherDay);
            this.dataTimeWeather.push(new DataTimeWeather(itemWeatherDay));
          }
        );
      });
    }
  }

  getCoordinatesTown(nameTown: string): Observable<CoordinatesTown> {
    return this.http.get<CoordinatesTown>(
      `http://api.openweathermap.org/data/2.5/weather?q=${nameTown}&appid=08288f94e8758e1982d73e4865e2895f`
    );
  }

  getDataWeatherDays(lat: string, lon: string): Observable<DataTimeWeather> {
    const urlForGetWeatherDaysTown = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&appid=08288f94e8758e1982d73e4865e2895f`;
    return this.http.get<DataTimeWeather>(urlForGetWeatherDaysTown);
  }


  getDataTownObs(): void {
    const arrayTownObs = new Array<Observable<CoordinatesTown>>();
    for (const itemTown of ARRAY_TOWN) {
      arrayTownObs.push(this.getCoordinatesTown(itemTown));
    }
    const weatherArrByTown = new Observable<DataTimeWeather>();

    concat(...arrayTownObs)
      .pipe(
        mergeMap(item => this.getDataWeatherDays(item.coordLat, item.coordLon))
      );

    /*.subscribe(item => {
      this.coordinatesTown.push(new CoordinatesTown(item));

      this.getDataWeatherDays(item.coordLat, item.coordLon)
        .subscribe(weather => {
          this.dataTimeWeather.push(new DataTimeWeather(weather));
        });
    }*/

    /*concat(...arrayTownObs)
      .subscribe(item => {
        this.coordinatesTown.push(new CoordinatesTown(item));
      });

    this.coordinatesTown.map(val => {
      this.getDataWeatherDays(val.coordLat, val.coordLon)
        .subscribe(weather => {
          this.dataTimeWeather.push(new DataTimeWeather(weather));
        });
    });*/


    /*   .pipe(
        tap(item => {
            this.coordinatesTown.push(new CoordinatesTown(item));
          }
        ),
        delay(1000),
        mergeMap(item =>
        {
          console.log(item);
          this.getDataWeatherDays(item.coord.coordLat, item.coord.coordLon);
          return Observable.call(item);
        })
      ).subscribe(itemWeather => this.dataTimeWeather.push(new DataTimeWeather(itemWeather)));
*/
  }


  getListCoordinatesTown(): Observable<Array<CoordinatesTown>> {
    return of(this.coordinatesTown);
  }


  getItemData(id: number): Observable<DataTimeWeather> {
    return of(this.dataTimeWeather.find(item => +item.dt === id));
  }


}
