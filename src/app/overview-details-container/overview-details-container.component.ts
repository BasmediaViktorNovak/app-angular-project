import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WeatherService} from '../services/weather.service';
import {Data} from '../interfaces/data';

@Component({
  selector: 'app-overview-details-container',
  templateUrl: './overview-details-container.component.html',
  styleUrls: ['./overview-details-container.component.css']
})

export class OverviewDetailsContainerComponent implements OnInit {

  weatherItemData: Data;

  constructor(private route: ActivatedRoute,
              private weatherService: WeatherService
  ) {
  }

  ngOnInit(): void {
    this.getData();
    this.getListDataWeather();
  }

  getData(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.weatherService.getItemData(id).subscribe(item => this.weatherItemData = item);
  }

  getListDataWeather(): void {
    this.weatherService.getColorComponentId(+this.route.snapshot.paramMap.get('id'));
  }

}
