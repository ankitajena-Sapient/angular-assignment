import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicLoadingRoutingModule } from './dynamic-loading-routing.module';
import { DynamicLoadingComponent } from './components/dynamic-loading/dynamic-loading.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';


@NgModule({
  declarations: [DynamicLoadingComponent],
  imports: [
    CommonModule,
    DynamicLoadingRoutingModule,
    InfiniteScrollModule
  ]
})
export class DynamicLoadingModule { }
