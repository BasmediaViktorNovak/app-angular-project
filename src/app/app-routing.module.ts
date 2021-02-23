import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from './container/container.component';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./container/container.module')
      .then(m => m.ContainerModule)
  },
  {
    path: 'overview-details/:id',
    loadChildren: () => import('./overview-details-container/overview-details-container-module.module')
      .then(m => m.OverviewDetailsContainerModule)
  },
  {path: '**', component: ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
