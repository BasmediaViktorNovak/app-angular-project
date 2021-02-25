import {Injectable} from '@angular/core';
import {concat, forkJoin, from, Observable, of, Subject, timer} from 'rxjs';
import {CoordinatesTown, DataTimeWeather} from '../model-clasess/data';
import {ARRAY_TOWN} from '../array-town/array-town';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {concatMap, delay, filter, find, map, mergeMap, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  dayItemSubject: Subject<DataTimeWeather> = new Subject<DataTimeWeather>();


  coordinatesTown: Array<CoordinatesTown> = new Array<CoordinatesTown>();
  coordinateTownSingle: CoordinatesTown;
  dataTimeWeather: Array<DataTimeWeather> = new Array<DataTimeWeather>();


  coordinatesTownObs: Observable<CoordinatesTown> = new Observable<CoordinatesTown>();
  dataTimeWeatherObs: Observable<DataTimeWeather> = new Observable<DataTimeWeather>();


  constructor(private http: HttpClient) {
  }


  getCountElementsTown(): Observable<number> {
    return of(ARRAY_TOWN.length);
  }

  getPaginatorElementsTown(pageIndex: number = 0, numberOfElements: number = 4): Observable<Array<CoordinatesTown>> {
    const startIndex = pageIndex * numberOfElements;
    let endIndex = startIndex + numberOfElements;
    endIndex = endIndex > ARRAY_TOWN.length ? ARRAY_TOWN.length : endIndex;

    const dataArray = new Array<CoordinatesTown>();
    ARRAY_TOWN.slice(startIndex, endIndex).map(value => {
      this.http.get<CoordinatesTown>(`http://api.openweathermap.org/data/2.5/weather?q=${value}&appid=08288f94e8758e1982d73e4865e2895f`)
        .subscribe(item => {
          dataArray.push(new CoordinatesTown(item));
        });
    });
    return of(dataArray);
  }




  getWeekDayWeatherForCoords(idTown: number): Observable<Array<DataTimeWeather>> {
    const res = this.coordinatesTown.find(x => x.id === idTown);
    console.log('coordinateTownSingle', res);
    const dataTimeWeather = new Array<DataTimeWeather>();
    this.http.get<CoordinatesTown>(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.coordinateTownSingle.coordLat}&
        lon=${this.coordinateTownSingle.coordLon}&exclude=minutely,hourly&appid=08288f94e8758e1982d73e4865e2895f`)
      .subscribe(item => {
        dataTimeWeather.push(new DataTimeWeather(item));
      });

    // this.getCoordinatesTownArray().pipe(
    //   // filter(x => x.id === itemCoordinates.id),
    //   delay(500),
    // ).subscribe(itemArray => {
    //   console.log('itemArray', itemArray);
    // });
    return of(dataTimeWeather);
  }


  // getDataTown(): void {
  //   for (const itemTown of ARRAY_TOWN) {
  //     this.getCoordinatesTown(itemTown).subscribe(item => {
  //       console.log('item', item);
  //       this.coordinatesTown.push(item);
  //       this.getDataWeatherDays(item.coordLat, item.coordLon).subscribe(itemWeatherDay => {
  //           console.log('itemWeatherDay', itemWeatherDay);
  //           this.dataTimeWeather.push(new DataTimeWeather(itemWeatherDay));
  //         }
  //       );
  //     });
  //   }
  // }

  // getDataTimeWeatherArray(coordinatesTown: Array<CoordinatesTown>): Observable<Array<TotalDataTimeWeather>> {
  //   const dataTimeWeather = new Array<TotalDataTimeWeather>();
  //
  //   coordinatesTown.map(value => {
  //     this.http.get<CoordinatesTown>(`https://api.openweathermap.org/data/2.5/onecall?lat=${value.coordLat}&lon=${value.coordLon}&exclude=minutely,hourly&appid=08288f94e8758e1982d73e4865e2895f`)
  //       .subscribe(item => {
  //         dataTimeWeather.push(new TotalDataTimeWeather(value, item));
  //       });
  //   });
  //
  //   return of(dataTimeWeather);
  // }


  // getListTotalDataTimeWeather(): Observable<Array<TotalDataTimeWeather>> {
  //   return of(this.totalDataTimeWeather);
  // }

  // getDataTownObs(): void {
  //   this.getCoordinatesTownArray().pipe(delay(2000)).subscribe(ii => {
  //     this.getDataTimeWeatherArray(ii).pipe(delay(2000)).subscribe(ij => this.totalDataTimeWeather = ij);
  //   });
  // }


  getItemData(id: number): Observable<DataTimeWeather> {
    return of(this.dataTimeWeather.find(item => +item.dt === id));
  }


}
