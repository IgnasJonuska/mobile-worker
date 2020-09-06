import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetHeaderComponent } from './timesheet/timesheet-header/timesheet-header.component'
import { RouterModule } from '@angular/router';
import { WeekComponent } from './timesheet/week/week.component';
import { TasksOfTheDayComponent } from './timesheet/tasks-of-the-day/tasks-of-the-day.component';

@NgModule({
  declarations: [
    TimesheetComponent,
    TimesheetHeaderComponent,
    WeekComponent,
    TasksOfTheDayComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TimesheetComponent
  ]
})
export class WidgetsModule { }
