import {Component, OnInit, Input} from '@angular/core';
import {TotalDataWeather} from '../model-clasess/data';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  @Input() item: TotalDataWeather;
  // todayDay: DataTimeWeather;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    console.log('item-container', this.item);
    // this.weatherService.getTodayWeather(this.item).subscribe(today => this.todayDay = today);
  }

}
