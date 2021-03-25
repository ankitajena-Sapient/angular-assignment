import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-timer-counter',
  templateUrl: './timer-counter.component.html',
  styleUrls: ['./timer-counter.component.scss']
})
export class TimerCounterComponent implements OnInit {
  @Input() startCounter = 0;
  @Input() pauseCounter = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
