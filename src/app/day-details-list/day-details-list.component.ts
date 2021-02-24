import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {ActivatedRoute} from '@angular/router';
import {DataWeather} from '../model-clasess/data';

@Component({
  selector: 'app-day-details-list',
  templateUrl: './day-details-list.component.html',
  styleUrls: ['./day-details-list.component.css']
})
export class DayDetailsListComponent implements OnInit {

  weatherData: Array<DataWeather> = new Array<DataWeather>();
  itemWeatherData: DataWeather;

  constructor(private weatherService: WeatherService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.weatherService.getListDataWeather().subscribe(items => this.weatherData = items.slice(0, 5));
    this.selectedWeatherItem(+this.activateRoute.snapshot.paramMap.get('id'));
  }

  selectedWeatherItem(id: number): void {
    this.weatherService.getItemData(id).subscribe(item => this.itemWeatherData = item);
    this.weatherService.dayItemSubject.next(this.itemWeatherData);
  }


}
