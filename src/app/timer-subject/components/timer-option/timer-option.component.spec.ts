import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerOptionComponent } from './timer-option.component';

describe('TimerOptionComponent', () => {
  let component: TimerOptionComponent;
  let fixture: ComponentFixture<TimerOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
