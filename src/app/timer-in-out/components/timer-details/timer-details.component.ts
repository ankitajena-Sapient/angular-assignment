import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-details',
  templateUrl: './timer-details.component.html',
  styleUrls: ['./timer-details.component.scss']
})
export class TimerDetailsComponent implements OnInit {
  @Input() eventArray: Array<string> = [];
  constructor() { }

  ngOnInit(): void {
  }

}
