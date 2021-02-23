import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ContainerComponent} from './container/container.component';
import {HeaderContainerComponent} from './header-container/header-container.component';
import {GridContainerComponent} from './grid-container/grid-container.component';
import {ItemContainerComponent} from './item-container/item-container.component';
import {MaterialModule} from './material/material.module';
import {HeaderContainerModule} from './header-container/header-container.module';
import {OverviewDetailsContainerComponent} from './overview-details-container/overview-details-container.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { DayDetailsListComponent } from './day-details-list/day-details-list.component';
import { DayDetailItemComponent } from './day-detail-item/day-detail-item.component';


@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    HeaderContainerComponent,
    GridContainerComponent,
    ItemContainerComponent,
    OverviewDetailsContainerComponent,
    ItemDetailsComponent,
    DayDetailsListComponent,
    DayDetailItemComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HeaderContainerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
