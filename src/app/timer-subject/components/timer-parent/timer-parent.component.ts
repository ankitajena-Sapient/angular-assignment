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
  updateTimer(event: number): void{
    this.timeLeft = event;
  }
  startCount(event: boolean): void{
    event === true ? (this.startClicked++ , this.eventArray.push('Started at' + this.getDate())) : this.startClicked = 0;
  }
  pauseCount(event: boolean): void{
    event === true ? (this.pauseClicked++ , this.eventArray.push('Paused at' + this.getDate())) : this.pauseClicked = 0;
  }
  resetCount(event: boolean): void{
    if (event === true) {
      this.eventArray = [];
    }
  }
  getDate(): string {
    const currentdate = new Date();
    const datetime =  currentdate.getDate() + '-'
                + (currentdate.getMonth() + 1)  + '-'
                + currentdate.getFullYear() + ' '
                + currentdate.getHours() + ':'
                + currentdate.getMinutes() + ':'
                + currentdate.getSeconds();
    return datetime;
  }

}
