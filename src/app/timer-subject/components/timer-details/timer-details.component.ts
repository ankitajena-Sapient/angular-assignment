import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { SubjectService } from '../../services/subject-service.service';
import { UnsubscribeDirectiveComponent } from '../../unsubscribe';

@Component({
  selector: 'app-timer-subject-details',
  templateUrl: './timer-details.component.html',
  styleUrls: ['./timer-details.component.scss']
})
export class TimerDetailsComponent extends UnsubscribeDirectiveComponent implements OnInit {
  eventArray: Array<string> = [];
  constructor(private subjectService: SubjectService) {
    super();
   }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.subjectService.resetCount.pipe(takeUntil(this.ngUnsubscribe$)).subscribe((response: Array<string>) => this.eventArray = response);
  }

}
