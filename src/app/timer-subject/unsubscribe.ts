import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  template: ''
})
export class UnsubscribeDirectiveComponent implements OnDestroy {
  protected ngUnsubscribe$ = new Subject();
  ngOnDestroy(): void {
    this.ngUnsubscribe$.next();
    this.ngUnsubscribe$.complete();
  }
}
