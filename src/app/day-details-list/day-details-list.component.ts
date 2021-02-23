import {Component, OnInit} from '@angular/core';
import {Data} from '../interfaces/data';
import {WeatherService} from '../services/weather.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-day-details-list',
  templateUrl: './day-details-list.component.html',
  styleUrls: ['./day-details-list.component.css']
})
export class DayDetailsListComponent implements OnInit {

  weatherData: Data[];
  itemWeatherData: Data;

  constructor(private weatherService: WeatherService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.weatherService.getData().subscribe(items => this.weatherData = items.slice(0, 7));
    this.selectedWeatherItem(+this.activateRoute.snapshot.paramMap.get('id'));
  }

  selectedWeatherItem(id: number): void {
    this.weatherService.getItemData(id).subscribe(item => this.itemWeatherData = item);
    this.weatherService.dayItemSubject.next(this.itemWeatherData);
  }


}
