import {Component, OnInit} from '@angular/core';
import {CoordinatesTown} from '../../../model-clasess/coordinates-town';
import {WeatherService} from '../../../services/weather-service/weather.service';

@Component({
  selector: 'app-item-list-container',
  templateUrl: './item-list-container.component.html',
  styleUrls: ['./item-list-container.component.css']
})
export class ItemListContainerComponent implements OnInit {
  pageSliceSubj: CoordinatesTown[];

  constructor(private weatherService: WeatherService) {
    this.weatherService.coordinatesTownArraySubj.subscribe(items => this.pageSliceSubj = items);
  }

  ngOnInit(): void {
  }

}
