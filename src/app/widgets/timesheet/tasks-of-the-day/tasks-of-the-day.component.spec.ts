import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksOfTheDayComponent } from './tasks-of-the-day.component';

describe('TasksOfTheDayComponent', () => {
  let component: TasksOfTheDayComponent;
  let fixture: ComponentFixture<TasksOfTheDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksOfTheDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksOfTheDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
