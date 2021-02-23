import {NgModule} from '@angular/core';
import {OverviewDetailsContainerRoutingModule} from './overview-details-container-routing.module';
import {OverviewDetailsContainerComponent} from './overview-details-container.component';
import {ItemDetailsComponent} from '../item-details/item-details.component';
import {DayDetailsListComponent} from '../day-details-list/day-details-list.component';
import {DayDetailItemComponent} from '../day-detail-item/day-detail-item.component';
import {MaterialModule} from '../material/material.module';
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
