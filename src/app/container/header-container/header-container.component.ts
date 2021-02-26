import {Component, Input, OnInit} from '@angular/core';
import {AdItem} from './banner/ad-item';
import {AdService} from './banner/ad.service';
import {AdComponent} from './banner/ad.component';


@Component({
  selector: 'app-header-container',
  template: `<div class="container-title"><app-ad-banner [ads]="ads"></app-ad-banner></div>`,
  styleUrls: ['./header-container.component.css']
})

export class HeaderContainerComponent implements OnInit, AdComponent {

  @Input() data: any;

  ads: AdItem[];

  constructor(private adService: AdService) {}

  ngOnInit(): void {
    this.ads = this.adService.getAds();
  }

}
