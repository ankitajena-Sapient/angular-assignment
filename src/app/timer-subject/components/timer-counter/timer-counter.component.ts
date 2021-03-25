import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SubjectService } from '../../services/subject-service.service';

@Component({
  selector: 'app-timer-subject-counter',
  templateUrl: './timer-counter.component.html',
  styleUrls: ['./timer-counter.component.scss']
})
export class TimerCounterComponent implements OnInit {
  startCounter = 0;
  pauseCounter = 0;
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.subjectService.startCount.subscribe((response: number) => this.startCounter = response);
    // tslint:disable-next-line: deprecation
    this.subjectService.pauseCount.subscribe((response: number) => this.pauseCounter = response);
  }

}
