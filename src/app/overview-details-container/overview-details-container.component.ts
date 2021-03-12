import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from '../services/weather-service/weather.service';
import {CoordinatesTown} from '../model-clasess/coordinates-town';
import {DataTimeWeather} from '../model-clasess/data-time-weather';
import {mergeMap} from 'rxjs/operators';

@Component({
  selector: 'app-overview-details-container',
  templateUrl: './overview-details-container.component.html',
  styleUrls: ['./overview-details-container.component.css']
})

export class OverviewDetailsContainerComponent implements OnInit {


  constructor(private route: ActivatedRoute,
              private weatherService: WeatherService,
              private router: Router
  ) {
  }

  ngOnInit(): void {
    this.weatherService.onUpdateDataWeather(+this.route.snapshot.paramMap.get('id')).subscribe(
      weather => {
        const arrays: Array<DataTimeWeather> = new Array<DataTimeWeather>();
        // @ts-ignore
        weather.daily.map((element, idx) => arrays.push(new DataTimeWeather(idx + 1, element)));
        this.weatherService.listDataTimeWeatherSubj.next(arrays);
      }
    );
  }

  navigateOnMainPage(): void {
    this.router.navigateByUrl('/');
  }
}
