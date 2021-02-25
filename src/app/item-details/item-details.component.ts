import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {DataTimeWeather} from '../model-clasess/data';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: DataTimeWeather;

  constructor(private weatherService: WeatherService,
              private route: ActivatedRoute) {
    this.weatherService.dayItemSubject.subscribe(dayItem => this.item = dayItem);
  }

  ngOnInit(): void {
    // this.weatherService.getWeekDayWeatherForCoords(+this.route.snapshot.paramMap.get('id')).subscribe(item => this.item = item);
  }

}
