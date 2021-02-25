import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../services/weather.service';
import {DataTimeWeather} from '../model-clasess/data';
import {Location} from '@angular/common';

@Component({
  selector: 'app-overview-details-container',
  templateUrl: './overview-details-container.component.html',
  styleUrls: ['./overview-details-container.component.css']
})

export class OverviewDetailsContainerComponent implements OnInit {

  weatherItemData: DataTimeWeather;

  constructor(private route: ActivatedRoute,
              private weatherService: WeatherService,
              private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getData();
    this.getListDataWeather();
  }

  getData(): void {
    // this.weatherService.getItemData(+this.route.snapshot.paramMap.get('id')).subscribe(item => this.weatherItemData = item);
    console.log(+this.route.snapshot.paramMap.get('id'));

  }

  getListDataWeather(): void {
  }

  OnMainPage(): void {
    this.location.go('/');
  }
}
