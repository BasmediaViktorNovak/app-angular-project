import { Component, OnInit, Input } from '@angular/core';
import {DataWeather} from '../model-clasess/data';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  @Input() item: DataWeather;

  constructor() { }

  ngOnInit(): void {
  }

}
