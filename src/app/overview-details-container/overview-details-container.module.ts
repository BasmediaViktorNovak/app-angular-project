import {NgModule} from '@angular/core';
import {ItemDetailsComponent} from './item-details/item-details.component';
import {OverviewDetailsContainerComponent} from './overview-details-container.component';
import {DayDetailsListComponent} from './day-details-list/day-details-list.component';
import {DayDetailItemComponent} from './day-details-list/day-detail-item/day-detail-item.component';
import {OverviewDetailsContainerRoutingModule} from './overview-details-container-routing.module';
import {MaterialModule} from '../material-angular-ui/material.module';
import {CommonModule} from '@angular/common';




@NgModule({
  declarations: [
    OverviewDetailsContainerComponent,
    ItemDetailsComponent,
    DayDetailsListComponent,
    DayDetailItemComponent
  ],
  imports: [
    OverviewDetailsContainerRoutingModule,
    MaterialModule,
    CommonModule
  ],
  providers: []
})
export class OverviewDetailsContainerModule {
}
