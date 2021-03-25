import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimerParentComponent } from './timer-parent.component';

describe('TimerParentComponent', () => {
  let component: TimerParentComponent;
  let fixture: ComponentFixture<TimerParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimerParentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimerParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
