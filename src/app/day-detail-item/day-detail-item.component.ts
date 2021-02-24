import {Component, Input, OnInit} from '@angular/core';
import {WeatherService} from '../services/weather.service';
import {ActivatedRoute} from '@angular/router';
import {DataWeather} from '../model-clasess/data';

@Component({
  selector: 'app-day-detail-item',
  templateUrl: './day-detail-item.component.html',
  styleUrls: ['./day-detail-item.component.css']
})
export class DayDetailItemComponent implements OnInit {
  @Input() item: DataWeather;
  selectedItem: DataWeather;
  id: number;

  constructor(public weatherService: WeatherService,
              private activatedRoute: ActivatedRoute) {
    this.weatherService.dayItemSubject.subscribe(dayItem => this.selectedItem = dayItem);
  }

  ngOnInit(): void {
    this.selectedFunction();
  }

  selectedFunction(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.weatherService.getItemData(id).subscribe(item => this.selectedItem = item);
  }


}
