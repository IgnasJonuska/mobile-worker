import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DummyTimesheetComponent } from './dummy-timesheet.component';

describe('DummyTimesheetComponent', () => {
  let component: DummyTimesheetComponent;
  let fixture: ComponentFixture<DummyTimesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DummyTimesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DummyTimesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});