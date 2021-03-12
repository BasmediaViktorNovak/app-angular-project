import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {ManageWeatherComponent} from './manage-weather/manage-weather.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    children: [
      {path: 'manage-weather', component: ManageWeatherComponent},
      {path: '', component: AdminDashboardComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
