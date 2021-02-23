import {Component, Input, OnInit} from '@angular/core';
import {Data} from '../interfaces/data';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  @Input() item: Data;

  constructor() {
  }

  ngOnInit(): void {
  }

}
