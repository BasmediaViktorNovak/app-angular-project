import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {PageEvent} from '@angular/material/paginator';
import {Data} from '../interfaces/data';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})

export class GridContainerComponent implements OnInit {


  items: Data[] = [];
  pageSlice: Data[];

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.weatherService.getData().subscribe(items => {
      this.items = items;
      this.pageSlice = this.items.slice(0, 4);
    });
  }

  OnPageChange($event: PageEvent): void {
    const startIndex = $event.pageIndex * $event.pageSize;
    let endIndex = startIndex + $event.pageSize;
    if (endIndex > this.items.length) {
      endIndex = this.items.length;
    }
    this.pageSlice = this.items.slice(startIndex, endIndex);
  }


}
