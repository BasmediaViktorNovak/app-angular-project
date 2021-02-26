import {NgModule} from '@angular/core';
import {HeroJobAdComponent} from './banner/banner.component';
import {AdBannerComponent} from './banner/ad-banner.component';
import {AdDirective} from './banner/ad.directive';
import {AdService} from './banner/ad.service';


@NgModule({
  declarations: [
    AdBannerComponent,
    HeroJobAdComponent,
    AdDirective
  ],
  providers: [AdService],
  entryComponents: [HeroJobAdComponent],
  exports: [AdBannerComponent]
})
export class HeaderContainerModule {}
