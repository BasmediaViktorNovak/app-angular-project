import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {DataTimeWeather} from '../../model-clasess/data-time-weather';
import {ARRAY_TOWN} from '../../array-town/array-town';
import {HttpClient} from '@angular/common/http';
import {CoordinatesTown} from '../../model-clasess/coordinates-town';
import {ItemContainerComponent} from '../../container/grid-container/item-container/item-container.component';


@Injectable({providedIn: 'root'})

export class WeatherService {

  /*URL - components*/
  private domainName = 'http://api.openweathermap.org';
  private parameters = '/data/2.5';
  private somewhereAnchor = '&appid=08288f94e8758e1982d73e4865e2895f';

  /*Variables*/
  renderingComponentSubj: BehaviorSubject<any> = new BehaviorSubject<any>(ItemContainerComponent);
  coordinatesTownArraySubj: BehaviorSubject<Array<CoordinatesTown>> = new BehaviorSubject<Array<CoordinatesTown>>([]);
  coordinatesTownSingleSubj: Subject<CoordinatesTown> = new Subject<CoordinatesTown>();
  todayWeather: Subject<DataTimeWeather> = new Subject<DataTimeWeather>();
  listDataTimeWeatherSubj: Subject<Array<DataTimeWeather>> = new Subject<Array<DataTimeWeather>>();

  constructor(private http: HttpClient) {
    this.subscribingOnUpdateDataWeather();
  }

  getCountElementsTown(): Observable<number> {
    return of(ARRAY_TOWN.length);
  }

  getArrayCoordinateForNameTown(value: string): Observable<CoordinatesTown> {
    return this.http.get<CoordinatesTown>(this.domainName + this.parameters + `/weather?q=${value}` + this.somewhereAnchor);
  }

  getSingleCoordinatesTownForID(idTown: number): Observable<CoordinatesTown> {
    return this.http.get<CoordinatesTown>(this.domainName + this.parameters + `/weather?id=${idTown}` + this.somewhereAnchor);
  }

  getWeekDayWeatherCoordinates(coordLat: string, coordLon: string): Observable<DataTimeWeather> {
    return this.http.get<DataTimeWeather>(this.domainName +
      this.parameters +
      `/onecall?lat=${coordLat}&lon=${coordLon}&exclude=minutely,hourly` +
      this.somewhereAnchor);
  }

  getPaginatorElementsTown(pageIndex: number = 0, numberOfElements: number = 4): Observable<Array<CoordinatesTown>> {
    const startIndex = pageIndex * numberOfElements;
    let endIndex = startIndex + numberOfElements;
    endIndex = endIndex > ARRAY_TOWN.length ? ARRAY_TOWN.length : endIndex;

    const coordinatesTown: Array<CoordinatesTown> = new Array<CoordinatesTown>();
    ARRAY_TOWN.slice(startIndex, endIndex)
      .map(value =>
        this.getArrayCoordinateForNameTown(value)
          .subscribe(item => coordinatesTown.push(new CoordinatesTown(item))));
    return of(coordinatesTown);
  }


  subscribingOnUpdateDataWeather(): void {
    this.coordinatesTownSingleSubj.subscribe(elem => {
      this.getWeekDayWeatherCoordinates(elem.coordLat, elem.coordLon).subscribe(weather => {
        const arrays: Array<DataTimeWeather> = new Array<DataTimeWeather>();
        // @ts-ignore
        weather.daily.map((element, idx) => {
          arrays.push(new DataTimeWeather(idx + 1, element));
        });
        this.listDataTimeWeatherSubj.next(arrays);
      });
    });
  }


  updateDateWeatherTimeNext(idTown: number): void {
    const item = this.coordinatesTownArraySubj.value;
    if (typeof item !== 'undefined' && item.length > 0) {
      this.coordinatesTownSingleSubj.next(item.find(x => x.id === idTown));
    } else {
      this.getSingleCoordinatesTownForID(idTown).subscribe(elements => this.coordinatesTownSingleSubj.next(new CoordinatesTown(elements)));
    }
  }


}
