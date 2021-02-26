import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {DataTimeWeather} from '../model-clasess/data-time-weather';

@Component({
  selector: 'app-day-detail-item',
  templateUrl: './day-detail-item.component.html',
  styleUrls: ['./day-detail-item.component.css']
})
export class DayDetailItemComponent implements OnInit {
  @Input() item: DataTimeWeather;

  constructor(public weatherService: WeatherService) {
  }

  ngOnInit(): void {
  }
}
