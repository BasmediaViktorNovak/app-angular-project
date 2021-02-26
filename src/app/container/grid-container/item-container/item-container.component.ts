import {Component, OnInit, Input} from '@angular/core';
import {CoordinatesTown} from '../model-clasess/coordinates-town';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  @Input() item: CoordinatesTown;

  constructor() {
  }

  ngOnInit(): void {
  }

}
