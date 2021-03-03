import {Component, OnInit} from '@angular/core';
import {WeatherService} from '../../services/weather-service/weather.service';
import {PageEvent} from '@angular/material/paginator';
import {CoordinatesTown} from '../../model-clasess/coordinates-town';
import {ItemContainerComponent} from './item-container/item-container.component';
import {ItemListContainerComponent} from './item-list-container/item-list-container.component';

@Component({
  selector: 'app-grid-container',
  templateUrl: './grid-container.component.html',
  styleUrls: ['./grid-container.component.css']
})

export class GridContainerComponent implements OnInit {

  items: Array<CoordinatesTown>;
  pageSlice: Array<CoordinatesTown>;
  countElementsTown: number;
  changeComponent: any;
  isChangeComponent = true;


  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.renderingComponentSubj.subscribe(renderComp => this.changeComponent = renderComp);
    this.weatherService.getCountElementsTown().subscribe(count => this.countElementsTown = count);
    this.weatherService.getPaginatorElementsTown().subscribe(s => this.pageSlice = s);
    this.weatherService.pageSliceSubj.next(this.pageSlice);
  }

  public OnPageChange($event: PageEvent): void {
    this.weatherService.getPaginatorElementsTown($event.pageIndex, $event.pageSize).subscribe(s => this.pageSlice = s);
    this.weatherService.pageSliceSubj.next(this.pageSlice);
  }

  changeStyleGrid(): void {
    this.isChangeComponent = !this.isChangeComponent;
    if (this.isChangeComponent) {
      this.changeComponent = ItemListContainerComponent;
    } else {
      this.changeComponent = ItemContainerComponent;
    }
    this.weatherService.renderingComponentSubj.next(this.changeComponent);
  }


}
