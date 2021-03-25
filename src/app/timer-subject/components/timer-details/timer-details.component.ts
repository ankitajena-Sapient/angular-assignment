import { Component, Input, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject-service.service';

@Component({
  selector: 'app-timer-subject-details',
  templateUrl: './timer-details.component.html',
  styleUrls: ['./timer-details.component.scss']
})
export class TimerDetailsComponent implements OnInit {
  eventArray: Array<string> = [];
  constructor(private subjectService: SubjectService) { }

  ngOnInit(): void {
    // tslint:disable-next-line: deprecation
    this.subjectService.resetCount.subscribe((response: Array<string>) => this.eventArray = response);
  }

}
