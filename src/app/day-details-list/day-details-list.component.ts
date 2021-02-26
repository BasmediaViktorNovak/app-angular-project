import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {ActivatedRoute} from '@angular/router';
import {DataTimeWeather} from '../model-clasess/data';

@Component({
  selector: 'app-day-details-list',
  templateUrl: './day-details-list.component.html',
  styleUrls: ['./day-details-list.component.css']
})
export class DayDetailsListComponent implements OnInit {

  weatherListDay: Array<DataTimeWeather> = new Array<DataTimeWeather>();
  idWeather: number;

  constructor(private weatherService: WeatherService) {
    this.weatherService.listDataTimeWeatherSubj.subscribe(items => {
      this.weatherListDay = items;
      this.selectedWeatherItem();
    });
  }

  ngOnInit(): void {
  }

  selectedWeatherItem(idWeather: number = 1): void {
    this.idWeather = idWeather;
    this.weatherService.todayWeather.next(this.weatherListDay.find(item => item.idWeather === idWeather));
  }


}
