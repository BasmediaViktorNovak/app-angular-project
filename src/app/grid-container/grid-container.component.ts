import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {PageEvent} from '@angular/material/paginator';
import {DataWeather} from '../model-clasess/data';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})

export class GridContainerComponent implements OnInit {

  items: Array<DataWeather> = new Array<DataWeather>();
  pageSlice: Array<DataWeather> = new Array<DataWeather>();

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getListDataWeather();
  }

  private getListDataWeather(): void {
    this.weatherService.getListDataWeather().subscribe(items => {
      this.items = items;
      this.pageSlice = this.items.slice(0, 4);
    });
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
