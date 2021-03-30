import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SubjectService } from '../../services/subject-service.service';
import { UnsubscribeDirectiveComponent } from '../../unsubscribe';

@Component({
  selector: 'app-timer-subject-counter',
  templateUrl: './timer-counter.component.html',
  styleUrls: ['./timer-counter.component.scss']
})
export class TimerCounterComponent extends UnsubscribeDirectiveComponent implements OnInit {
  startCounter = 0;
  pauseCounter = 0;
  constructor(private subjectService: SubjectService) {
    super();
   }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.subjectService.startCount.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((response: number) => this.startCounter = response);
    // tslint:disable-next-line: deprecation
    this.subjectService.pauseCount.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((response: number) => this.pauseCounter = response);
  }

}
