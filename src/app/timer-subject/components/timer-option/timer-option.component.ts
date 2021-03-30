import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubjectService } from '../../services/subject-service.service';

@Component({
  selector: 'app-timer-subject-option',
  templateUrl: './timer-option.component.html',
  styleUrls: ['./timer-option.component.scss']
})
export class TimerOptionComponent implements OnInit , OnDestroy{

  constructor(private subjectService: SubjectService) { }
  timeLeft: number;
  interval: any;
  isStart: boolean;
  initialTimer: number;
  startClicked = 0;
  pauseClicked = 0;
  disableInput: boolean;
  eventArray: Array<string> = [];
  ngOnInit(): void {
    this.isStart = false;
    this.disableInput = false;
  }

  startTimer(): void {
    if (this.timeLeft !== undefined && this.timeLeft > 0){
      this.startClicked++;
      this.subjectService.startCount.next(this.startClicked);
      this.eventArray.push('Started at ' + this.getDate());
      this.subjectService.resetCount.next(this.eventArray);
      this.isStart = true;
      this.disableInput = true;
    }
    if (this.isStart) {
      this.interval = setInterval(() => {
        if (this.timeLeft > 0) {
          this.timeLeft--;
          this.emitTimer(this.timeLeft);
        }
      }, 1000);
    }
  }

  pauseTimer(): void {
    if (this.timeLeft !== undefined && this.timeLeft > 0){
      this.pauseClicked++;
      this.isStart = false;
      this.subjectService.pauseCount.next(this.pauseClicked);
      this.eventArray.push('Paused at ' + this.getDate());
      this.subjectService.resetCount.next(this.eventArray);
    }
    clearInterval(this.interval);
  }
  resetClicked(): void {
    if (this.timeLeft !== undefined && this.timeLeft > 0){
      this.isStart = false;
    }
    this.pauseClicked = 0;
    this.startClicked = 0;
    this.eventArray = [];
    this.disableInput = false;
    this.subjectService.startCount.next(this.startClicked);
    this.subjectService.pauseCount.next(this.pauseClicked);
    this.subjectService.resetCount.next(this.eventArray);
    clearInterval(this.interval);
    this.timeLeft = this.initialTimer;
    this.emitTimer(this.timeLeft);
  }
  emitTimer(timer: number): void{
    this.timeLeft = timer;
    this.subjectService.timerInput.next(timer);
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

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
