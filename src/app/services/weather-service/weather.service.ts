import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {DataTimeWeather} from '../../model-clasess/data-time-weather';
import {ARRAY_TOWN} from '../../array-town/array-town';
import {HttpClient} from '@angular/common/http';
import {CoordinatesTown} from '../../model-clasess/coordinates-town';
import {ItemContainerComponent} from '../../container/grid-container/item-container/item-container.component';


@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  domainName = 'http://api.openweathermap.org';
  parameters = '/data/2.5';
  somewhereAnchor = '&appid=08288f94e8758e1982d73e4865e2895f';

  todayWeather: Subject<DataTimeWeather> = new Subject<DataTimeWeather>();
  town: Subject<CoordinatesTown> = new Subject<CoordinatesTown>();
  listDataTimeWeatherSubj: Subject<Array<DataTimeWeather>> = new Subject<Array<DataTimeWeather>>();

  pageSliceSubj: BehaviorSubject<Array<CoordinatesTown>> = new BehaviorSubject<Array<CoordinatesTown>>([]);


  dataTimeWeatherSingle: DataTimeWeather;
  coordinatesTown: Array<CoordinatesTown> = new Array<CoordinatesTown>();

  renderingComponentSubj: BehaviorSubject<any> = new BehaviorSubject<any>(ItemContainerComponent);


  constructor(private http: HttpClient) {
  }


  getCountElementsTown(): Observable<number> {
    return of(ARRAY_TOWN.length);
  }

  getPaginatorElementsTown(pageIndex: number = 0, numberOfElements: number = 4 ): Observable<Array<CoordinatesTown>> {
    const startIndex = pageIndex * numberOfElements;
    let endIndex = startIndex + numberOfElements;
    endIndex = endIndex > ARRAY_TOWN.length ? ARRAY_TOWN.length : endIndex;

    const dataArray = new Array<CoordinatesTown>();
    ARRAY_TOWN.slice(startIndex, endIndex).map(value => {
      this.http.get<CoordinatesTown>(this.domainName
        + this.parameters + `/weather?q=${value}` + this.somewhereAnchor)
        .subscribe(item => {
          dataArray.push(new CoordinatesTown(item));
        });
    });
    this.coordinatesTown = dataArray;
    return of(dataArray);
  }


  getSingleCoordinatesTown(idTown: number): Observable<CoordinatesTown> {
    return this.http.get<CoordinatesTown>(this.domainName
      + this.parameters + `/weather?id=${idTown}` + this.somewhereAnchor);
  }


  getWeekDayWeatherForCoords(idTown: number): Observable<DataTimeWeather> {
    // tslint:disable-next-line:one-variable-per-declaration prefer-const
    let coordinateLat = 0, coordinateLon = 0;
    if (typeof this.coordinatesTown !== 'undefined' && this.coordinatesTown.length > 0) {
      const findTown = this.coordinatesTown.find(town => town.id === idTown);
      coordinateLat = findTown.coordLat;
      coordinateLon = findTown.coordLat;
    } else {
      this.getSingleCoordinatesTown(idTown).subscribe(items => {
        coordinateLat = items.coordLat;
        coordinateLon = items.coordLon;
      });
    }
    return this.http.get<DataTimeWeather>(this.domainName + this.parameters
      + `/onecall?lat=${coordinateLat}&lon=${coordinateLon}&exclude=minutely,hourly` + this.somewhereAnchor);
  }


}
