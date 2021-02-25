import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {PageEvent} from '@angular/material/paginator';
import {CoordinatesTown} from '../model-clasess/data';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})

export class GridContainerComponent implements OnInit {

  items: Array<CoordinatesTown> = new Array<CoordinatesTown>();
  pageSlice: Array<CoordinatesTown> = new Array<CoordinatesTown>();

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getListDataWeather();
  }

  private getListDataWeather(): void {

    this.weatherService.getListCoordinatesTown().subscribe(i => {
      this.items = i;
      this.pageSlice = this.items.slice(0, 4);
    });
    // this.items = this.weatherService.getListDataWeather();
    // this.pageSlice = this.items.slice(0, 4);

  }

  OnPageChange($event: PageEvent): void {
    const startIndex = $event.pageIndex * $event.pageSize;
    let endIndex = startIndex + $event.pageSize;
    if (endIndex > this.items.length) {
      console.log(this.items.length);
      endIndex = this.items.length;
    } else {
    }
    this.pageSlice = this.items.slice(startIndex, endIndex);
  }


}
