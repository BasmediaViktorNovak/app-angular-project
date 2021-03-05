import {Component, OnInit} from '@angular/core';
import {CoordinatesTown} from '../../../model-clasess/coordinates-town';
import {WeatherService} from '../../../services/weather-service/weather.service';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  pageSliceSubj: Array<CoordinatesTown> = new Array<CoordinatesTown>();

  constructor(private weatherService: WeatherService) {
    this.weatherService.coordinatesTownArraySubj.subscribe(items => this.pageSliceSubj = items);
  }

  ngOnInit(): void {
  }

}
