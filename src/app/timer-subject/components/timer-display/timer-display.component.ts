import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject-service.service';
import { takeUntil } from 'rxjs/operators';
import { UnsubscribeDirectiveComponent } from '../../unsubscribe';

@Component({
  selector: 'app-timer-subject-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent extends UnsubscribeDirectiveComponent implements OnInit {
  timeLeft: number;
  constructor(private subjectService: SubjectService) {
    super();
  }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.subjectService.timerInput.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((response: number) => this.timeLeft = response);
  }

}
