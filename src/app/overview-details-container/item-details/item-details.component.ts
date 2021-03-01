import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather-service/weather.service';
import {CoordinatesTown} from '../../model-clasess/coordinates-town';
import {DataTimeWeather} from '../../model-clasess/data-time-weather';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  town: CoordinatesTown;
  todayWeather: DataTimeWeather;

  constructor(private weatherService: WeatherService) {
    this.weatherService.town.subscribe(town => this.town = town);
    this.weatherService.todayWeather.subscribe(item => this.todayWeather = item);
  }

  ngOnInit(): void {
  }

}
