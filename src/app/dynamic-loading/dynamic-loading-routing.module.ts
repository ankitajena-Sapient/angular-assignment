import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicLoadingComponent } from './components/dynamic-loading/dynamic-loading.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicLoadingComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicLoadingRoutingModule { }
