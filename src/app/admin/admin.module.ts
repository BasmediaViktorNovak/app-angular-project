import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin/admin.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import {ManageWeatherComponent} from './manage-weather/manage-weather.component';
import {MatTableModule} from '@angular/material/table';
import {MaterialModule} from '../material-angular-ui/material.module';


@NgModule({
  declarations: [
    AdminComponent,
    AdminDashboardComponent,
    ManageWeatherComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MaterialModule
  ]
})
export class AdminModule {
}
