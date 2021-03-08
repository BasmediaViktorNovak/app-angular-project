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
  changeComponent: any;
  isChangeComponent = true;
  countElementsTown: number;

  items: Array<CoordinatesTown> = new Array<CoordinatesTown>();
  pageSlice: Array<CoordinatesTown> = new Array<CoordinatesTown>();


  constructor(private weatherService: WeatherService) {
  }

  ngOnInit(): void {
    this.weatherService.renderingComponentSubj.next(ItemContainerComponent);
    this.weatherService.renderingComponentSubj.subscribe(renderComp => this.changeComponent = renderComp);
    this.weatherService.getCountElementsTown().subscribe(count => this.countElementsTown = count);
    this.weatherService.getPaginatorElementsTown().subscribe(items => this.weatherService.coordinatesTownArraySubj.next(items));
  }

  public OnPageChange($event: PageEvent): void {
    this.weatherService.getPaginatorElementsTown($event.pageIndex, $event.pageSize)
      .subscribe(items => this.weatherService.coordinatesTownArraySubj.next(items));
  }

  changeStyleGrid(): void {
    this.isChangeComponent = !this.isChangeComponent;
    this.changeComponent = this.isChangeComponent ? ItemListContainerComponent : ItemContainerComponent;
    this.weatherService.renderingComponentSubj.next(this.changeComponent);
  }


}
