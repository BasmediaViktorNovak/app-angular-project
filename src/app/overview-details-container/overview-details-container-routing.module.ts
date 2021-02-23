import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {OverviewDetailsContainerComponent} from './overview-details-container.component';


const routes: Routes = [
  {path: '', component: OverviewDetailsContainerComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class OverviewDetailsContainerRoutingModule {
}
