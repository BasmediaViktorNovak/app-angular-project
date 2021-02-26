import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../services/weather.service';
import {Location} from '@angular/common';
import {CoordinatesTown, DataTimeWeather} from '../model-clasess/data';

@Component({
  selector: 'app-overview-details-container',
  templateUrl: './overview-details-container.component.html',
  styleUrls: ['./overview-details-container.component.css']
})

export class OverviewDetailsContainerComponent implements OnInit {

  town: CoordinatesTown;
  todayWeather: DataTimeWeather;
  weatherListDay: Array<DataTimeWeather> = new Array<DataTimeWeather>();


  constructor(private route: ActivatedRoute,
              private weatherService: WeatherService,
              private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getTown();
    this.getListWeatherDay();
  }

  getTown(): void {
    this.weatherService.getSingleCoordinatesTown(+this.route.snapshot.paramMap.get('id'))
      .subscribe(item => {
          this.weatherService.town.next(new CoordinatesTown(item));
        }
      );
  }

  getListWeatherDay(): void {
    this.weatherService.getWeekDayWeatherForCoords(+this.route.snapshot.paramMap.get('id'))
      .subscribe(item => {
        item['daily'].map((val, idx) => this.weatherListDay.push(new DataTimeWeather(idx + 1, val)));
        this.weatherService.listDataTimeWeatherSubj.next(this.weatherListDay);
      });
  }


  OnMainPage(): void {
    this.location.go('/');
  }
}
