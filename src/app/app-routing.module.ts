import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {OverviewDetailsContainerComponent} from './overview-details-container/overview-details-container.component';
import {ContainerComponent} from './container/container.component';


const routes: Routes = [
  {path: '', component: ContainerComponent},
  {path: 'overview-details/:id', component: OverviewDetailsContainerComponent},
  {path: '**', component: ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
