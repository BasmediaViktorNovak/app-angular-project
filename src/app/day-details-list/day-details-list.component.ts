import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Data} from '../interfaces/data';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-day-details-list',
  templateUrl: './day-details-list.component.html',
  styleUrls: ['./day-details-list.component.css']
})
export class DayDetailsListComponent implements OnInit {

  weatherData: Data[];
  @Output() selectedItem: EventEmitter<Data> = new EventEmitter<Data>();

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getData().subscribe(items => this.weatherData = items.slice(0, 5));
  }


}
