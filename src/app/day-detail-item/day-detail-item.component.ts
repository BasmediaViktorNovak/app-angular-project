import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../interfaces/data';
import {WeatherService} from '../services/weather.service';

@Component({
  selector: 'app-day-detail-item',
  templateUrl: './day-detail-item.component.html',
  styleUrls: ['./day-detail-item.component.css']
})
export class DayDetailItemComponent implements OnInit {
  @Input() item: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
