import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TimerInOutRoutingModule } from './timer-in-out-routing.module';
import { TimerParentComponent } from './components/timer-parent/timer-parent.component';
import { TimerOptionComponent } from './components/timer-option/timer-option.component';
import { TimerDetailsComponent } from './components/timer-details/timer-details.component';
import { TimerCounterComponent } from './components/timer-counter/timer-counter.component';
import { TimerDisplayComponent } from './components/timer-display/timer-display.component';


@NgModule({
  declarations: [TimerParentComponent, TimerOptionComponent, TimerDetailsComponent, TimerCounterComponent, TimerDisplayComponent],
  imports: [
    CommonModule,
    TimerInOutRoutingModule,
    FormsModule
  ]
})
export class TimerInOutModule { }
