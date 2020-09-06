import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { TimesheetHeaderComponent } from './timesheet/timesheet-header/timesheet-header.component'
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TimesheetComponent,
    TimesheetHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class WidgetsModule { }
