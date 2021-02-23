import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../interfaces/data';
import {WeatherService} from "../services/weather.service";

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  item: Data;

  constructor(private weatherService: WeatherService) {
    this.weatherService.dayItemSubject.subscribe(dayItem => this.item = dayItem);
  }

  ngOnInit(): void {
  }

}
