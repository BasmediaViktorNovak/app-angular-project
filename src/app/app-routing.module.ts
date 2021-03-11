import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContainerComponent} from './container/container.component';
import {CustomPreloadingService} from './services/custom-preloading-service/custom-preloading.service';
import {AuthGuard} from './auth/auth-guard/auth.guard';


const routes: Routes = [
  {
    path: '',
    data: {preload: true, loadAfter: 5000},
    loadChildren: () => import('./container/container.module')
      .then(m => m.ContainerModule)
  },
  {
    path: 'overview-details/:id',
    data: {preload: true, loadAfter: 5000},
    loadChildren: () => import('./overview-details-container/overview-details-container.module')
      .then(m => m.OverviewDetailsContainerModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [AuthGuard],
    canLoad: [AuthGuard]
  },
  {
    path: 'auth',
    data: {preload: true, loadAfter: 5000},
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {path: '**', component: ContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: CustomPreloadingService})],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
