import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from '../services/weather-service/weather.service';
import {CoordinatesTown} from '../model-clasess/coordinates-town';
import {DataTimeWeather} from '../model-clasess/data-time-weather';

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
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getSingleCoordinatesTown();
    this.getWeekDayWeatherForCoords();
  }

  getSingleCoordinatesTown(): void {
    this.weatherService.getSingleCoordinatesTown(+this.route.snapshot.paramMap.get('id'))
      .subscribe(item => this.weatherService.town.next(new CoordinatesTown(item)));
  }

  getWeekDayWeatherForCoords(): void {
    this.weatherService.getWeekDayWeatherForCoords(+this.route.snapshot.paramMap.get('id'))
      .subscribe(item => {
        // @ts-ignore
        item.daily.map((val, idx) => this.weatherListDay.push(new DataTimeWeather(idx + 1, val)));
        this.weatherService.listDataTimeWeatherSubj.next(this.weatherListDay);
      });
  }


  navigateOnMainPage(): void {
    this.router.navigateByUrl('/');
  }
}
