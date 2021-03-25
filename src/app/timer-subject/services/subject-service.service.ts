import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  public timerInput = new Subject<number>();

  public startCount = new Subject<number>();

  public pauseCount = new Subject<number>();

  public resetCount = new Subject<Array<string>>();

  public excludeSelectedZone = new Subject<any>();
  constructor() { }
}
