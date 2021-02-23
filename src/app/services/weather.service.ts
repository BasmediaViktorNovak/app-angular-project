import {Injectable} from '@angular/core';
import {Data} from '../interfaces/data';
import {Observable, of} from 'rxjs';
import {DataService} from '../data/data.service';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  private selectedComponentColor: string;

  constructor() {
  }



  getData(): Observable<Data[]> {
    return of(DataService);
  }

  getItemData(id: number): Observable<Data> {
    return of(DataService.find(item => item.id === id));
  }

  getColorComponentId(id: number): void {
    if (DataService.find(i => i.id === id)) {
      this.selectedComponentColor = 'red';
    }
  }

  getSelectedColor(): Observable<string> {
      console.log('Selected', this.selectedComponentColor);
      return of(this.selectedComponentColor);
  }

}
