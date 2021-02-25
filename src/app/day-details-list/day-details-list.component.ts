import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {ActivatedRoute} from '@angular/router';
import {DataTimeWeather} from '../model-clasess/data';

@Component({
  selector: 'app-day-details-list',
  templateUrl: './day-details-list.component.html',
  styleUrls: ['./day-details-list.component.css']
})
export class DayDetailsListComponent implements OnInit {

  weatherData: Array<DataTimeWeather> = new Array<DataTimeWeather>();
  itemWeatherData: DataTimeWeather;


  constructor(private weatherService: WeatherService,
              private activateRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    // this.weatherService.getListCoordinatesTown().subscribe(items => this.weatherData = items.slice(0, 5));
    // this.weatherData = this.weatherService.getDataTown();
    // this.selectedWeatherItem(+this.activateRoute.snapshot.paramMap.get('id'));
    this.weatherService.getWeekDayWeatherForCoords(+this.activateRoute.snapshot.paramMap.get('id')).subscribe(items => this.weatherData = items);
  }

  selectedWeatherItem(id: number): void {
    // this.weatherService.getItemData(id).subscribe(item => this.itemWeatherData = item);
    // this.weatherService.dayItemSubject.next(this.itemWeatherData);
  }


}
