import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {WeatherService} from '../services/weather-service/weather.service';

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
    this.weatherService.updateDateWeatherTimeNext(+this.route.snapshot.paramMap.get('id'));
  }

  navigateOnMainPage(): void {
    this.router.navigateByUrl('/');
  }
}
