import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {PageEvent} from '@angular/material/paginator';
import {CoordinatesTown} from '../model-clasess/coordinates-town';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})

export class GridContainerComponent implements OnInit {

  items: Array<CoordinatesTown> = new Array<CoordinatesTown>();
  pageSlice: Array<CoordinatesTown> = new Array<CoordinatesTown>();
  countElementsTown: number;

  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.getCountElementsTown().subscribe(count => this.countElementsTown = count);
    this.weatherService.getPaginatorElementsTown().subscribe(s => this.pageSlice = s);
  }

  public OnPageChange($event: PageEvent): void {
    this.weatherService.getPaginatorElementsTown($event.pageIndex, $event.pageSize).subscribe(s => this.pageSlice = s);
  }


}
