import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {DataWeather} from '../model-clasess/data';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: DataWeather;

  constructor(private weatherService: WeatherService) {
    this.weatherService.dayItemSubject.subscribe(dayItem => this.item = dayItem);
  }

  ngOnInit(): void {
  }

}