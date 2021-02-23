import {Injectable} from '@angular/core';
import {Data} from '../interfaces/data';
import {Observable, of, Subject} from 'rxjs';
import {DataService} from '../data/data.service';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {


  dayItemSubject = new Subject<any>();

  constructor() {
  }

  getData(): Observable<Data[]> {
    return of(DataService);
  }

  getItemData(id: number): Observable<Data> {
    return of(DataService.find(item => item.id === id));
  }



}
