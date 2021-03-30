import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer-option',
  templateUrl: './timer-option.component.html',
  styleUrls: ['./timer-option.component.scss']
})
export class TimerOptionComponent implements OnInit , OnDestroy{

  constructor() { }
  timeLeft: number;
  interval: any;
  isStart: boolean;
  initialTimer: number;
  disableInput: boolean;
  @Output() timeLeftOutput = new EventEmitter<number>();
  @Output() startCount = new EventEmitter<boolean>();
  @Output() pauseCount = new EventEmitter<boolean>();
  @Output() resetCount = new EventEmitter<boolean>();
  ngOnInit(): void {
    this.isStart = false;
    this.disableInput = false;
  }

  startTimer(): void {
    if (this.timeLeft !== undefined && this.timeLeft > 0){
      this.startCount.emit(true);
      this.isStart = true;
    }
    if (this.isStart) {
      this.disableInput = true;
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
      this.isStart = false;
      this.pauseCount.emit(true);
    }
    clearInterval(this.interval);
  }
  resetClicked(): void {
    this.disableInput = false;
    if (this.timeLeft !== undefined && this.timeLeft > 0){
      this.isStart = false;
    }
    this.startCount.emit(false);
    this.pauseCount.emit(false);
    this.resetCount.emit(true);
    clearInterval(this.interval);
    this.timeLeft = this.initialTimer;
    this.emitTimer(this.timeLeft);
  }
  emitTimer(timer: number): void{
    this.timeLeft = timer;
    this.timeLeftOutput.emit(timer);
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
