import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
  },
  {
    path: 'timerInOut',
    loadChildren: () => import('./timer-in-out/timer-in-out.module').then(m => m.TimerInOutModule)
  },
  {
    path: 'timerSubject',
    loadChildren: () => import('./timer-subject/timer-subject.module').then(m => m.TimerSubjectModule)
  },
  {
    path: 'students',
    loadChildren: () => import('./students/students.module').then(m => m.StudentsModule)
  },
  {
    path: 'dynamicLoading',
    loadChildren: () => import('./dynamic-loading/dynamic-loading.module').then(m => m.DynamicLoadingModule)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
