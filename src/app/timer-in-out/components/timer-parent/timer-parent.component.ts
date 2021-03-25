import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer-parent',
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
    event === true ? (this.startClicked++ , this.eventArray.push('Started at ' + this.getDate())) : this.startClicked = 0;
  }
  pauseCount(event: boolean): void{
    event === true ? (this.pauseClicked++ , this.eventArray.push('Paused at ' + this.getDate())) : this.pauseClicked = 0;
  }
  resetCount(event: boolean): void{
    if (event === true) {
      this.eventArray = [];
    }
  }
  getDate(): string {
    const currentdate = new Date();
    let hours = currentdate.getHours();
    let minutes = currentdate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? 0 + minutes : minutes;
    const dateTime = currentdate.getDate() + '-'
    + (currentdate.getMonth() + 1)  + '-'
    + currentdate.getFullYear() + ' ' + hours + ':' + minutes + ' ' + ampm;
    return dateTime;
  }

}
