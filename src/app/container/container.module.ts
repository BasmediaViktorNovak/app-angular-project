import {NgModule} from '@angular/core';
import {ContainerComponent} from './container.component';
import {HeaderContainerComponent} from './header-container/header-container.component';
import {GridContainerComponent} from './grid-container/grid-container.component';
import {ItemContainerComponent} from './grid-container/item-container/item-container.component';
import {ContainerRoutingModule} from './container-routing.module';
import {MaterialModule} from '../material-angular-ui/material.module';
import {CommonModule} from '@angular/common';
import {HeaderContainerModule} from './header-container/header-container.module';
import {FormsModule} from '@angular/forms';
import {ItemListContainerComponent} from './grid-container/item-list-container/item-list-container.component';
import {AdminModule} from '../admin/admin.module';

@NgModule({
  declarations: [
    ContainerComponent,
    HeaderContainerComponent,
    GridContainerComponent,
    ItemContainerComponent,
    ItemListContainerComponent
  ],
  imports: [
    ContainerRoutingModule,
    MaterialModule,
    CommonModule,
    HeaderContainerModule,
    FormsModule,
    AdminModule
  ],
  providers: []
})
export class ContainerModule {
}
