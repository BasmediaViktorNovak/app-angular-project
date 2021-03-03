import {Component, Input} from '@angular/core';
import {DataTimeWeather} from '../../../model-clasess/data-time-weather';

@Component({
  selector: 'app-day-detail-item',
  templateUrl: './day-detail-item.component.html',
  styleUrls: ['./day-detail-item.component.css']
})
export class DayDetailItemComponent  {
  @Input() item: DataTimeWeather;

  constructor() {
  }

}
