import { Component, OnInit, Input } from '@angular/core';
import {Data} from '../interfaces/data';

@Component({
  selector: 'app-item-container',
  templateUrl: './item-container.component.html',
  styleUrls: ['./item-container.component.css']
})
export class ItemContainerComponent implements OnInit {

  @Input() item: Data;

  constructor() { }

  ngOnInit(): void {
  }

}
