import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../interfaces/data';
import {WeatherService} from '../services/weather.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-day-detail-item',
  templateUrl: './day-detail-item.component.html',
  styleUrls: ['./day-detail-item.component.css']
})
export class DayDetailItemComponent implements OnInit {
  @Input() item: Data;
  selectedItem: Data;
  color: string;

  constructor(public weatherService: WeatherService,
              private activatedRoute: ActivatedRoute) {
    this.weatherService.dayItemSubject.subscribe(dayItem => this.selectedItem = dayItem);
  }

  ngOnInit(): void {
    this.seletedFunction();
  }

  seletedFunction(): void {
    const id = +this.activatedRoute.snapshot.paramMap.get('id');
    this.weatherService.getItemData(id).subscribe(item => this.selectedItem = item);
  }


}
