import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {PageEvent} from '@angular/material/paginator';
import {CoordinatesTown} from '../model-clasess/data';
import {delay} from 'rxjs/operators';

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
    this.weatherService.getCoordinatesTownArray().pipe(delay(500)).subscribe(itemArray => {
      this.items = itemArray;
      this.pageSlice = this.items.slice(0, 4);
    });
  }

  public OnPageChange($event: PageEvent): void {
    const startIndex = $event.pageIndex * $event.pageSize;
    let endIndex = startIndex + $event.pageSize;
    if (endIndex > this.items.length) {
      endIndex = this.items.length;
    } else {
    }
    this.pageSlice = this.items.slice(startIndex, endIndex);
  }


}
