import {NgModule} from '@angular/core';
import {ContainerRoutingModule} from './container-routing.module';
import {MaterialModule} from '../material/material.module';
import {CommonModule} from '@angular/common';
import {HeaderContainerComponent} from '../header-container/header-container.component';
import {ContainerComponent} from './container.component';
import {ItemContainerComponent} from '../item-container/item-container.component';
import {GridContainerComponent} from '../grid-container/grid-container.component';
import {HeaderContainerModule} from '../header-container/header-container.module';
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    ContainerComponent,
    HeaderContainerComponent,
    GridContainerComponent,
    ItemContainerComponent
  ],
    imports: [
        ContainerRoutingModule,
        MaterialModule,
        CommonModule,
        HeaderContainerModule,
        FormsModule
    ],
  providers: []
})
export class ContainerModule {
}
