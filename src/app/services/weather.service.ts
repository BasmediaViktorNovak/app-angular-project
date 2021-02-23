import {Injectable} from '@angular/core';
import {Data} from '../interfaces/data';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class WeatherService {

  private selectedComponentColor: string;

  constructor() {
  }

  items: Data[] = [
    {id: 11, name: 'Dr Nice'},
    {id: 12, name: 'Narco'},
    {id: 13, name: 'Bombasto'},
    {id: 14, name: 'Celeritas'},
    {id: 15, name: 'Magneta'},
    {id: 16, name: 'RubberMan'},
    {id: 17, name: 'Dynama'},
    {id: 18, name: 'Dr IQ'},
    {id: 19, name: 'Magma'},
    {id: 20, name: 'Tornado'}
  ];

  getData(): Observable<Data[]> {
    return of(this.items);
  }

  getItemData(id: number): Observable<Data> {
    return of(this.items.find(item => item.id === id));
  }

  getColorComponentId(id: number): void {
    if (this.items.find(i => i.id === id)) {
      this.selectedComponentColor = 'red';
    }
  }

  getSelectedColor(): Observable<string> {
      return of(this.selectedComponentColor);
  }

}
