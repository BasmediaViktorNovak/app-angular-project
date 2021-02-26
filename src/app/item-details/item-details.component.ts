import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {CoordinatesTown, DataTimeWeather} from '../model-clasess/data';
import {ActivatedRoute} from '@angular/router';

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
