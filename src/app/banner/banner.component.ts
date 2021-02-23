import { Component, Input } from '@angular/core';
import { AdComponent } from './ad.component';

@Component({
  template: `
      <h1 class="header-text">{{data.title}}</h1>
      <div class="header-under-text">{{data.body}}</div>`,
  styleUrls: ['./banner.component.css']
})

export class HeroJobAdComponent implements AdComponent {
  @Input() data: any;
}
