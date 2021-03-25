import { Component, Input, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject-service.service';

@Component({
  selector: 'app-timer-subject-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent implements OnInit {
  timeLeft: number;
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.subjectService.timerInput.subscribe((response: number) => this.timeLeft = response);
  }

}
