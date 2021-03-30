import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-subject-parent',
  templateUrl: './timer-parent.component.html',
  styleUrls: ['./timer-parent.component.scss']
})
export class TimerParentComponent implements OnInit {

  constructor() { }
  timeLeft = 0;
  startClicked = 0;
  pauseClicked = 0;
  eventArray: Array<string> = [];
  ngOnInit(): void {
  }

}
