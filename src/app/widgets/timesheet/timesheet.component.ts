import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/models/event-type';
import { TimesheetTaskEvent } from 'src/app/models/timesheet-task-event';

@Component({
  selector: 'app-timesheet',
  templateUrl: './timesheet.component.html',
  styleUrls: ['./timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  selectedDay: Date = new Date();
  workDayStart: Date;
  workDayEnd: Date;
  workHoursTasks: Array<TimesheetTaskEvent> = [];
  expensesTasks: Array<TimesheetTaskEvent> = [];
  additionalHoursTasks: Array<TimesheetTaskEvent> = [];

  workEventType = EventType;

  constructor() { }

  ngOnInit() {
    const today = new Date();
    const firstDayToDisplay = new Date(new Date().setDate(new Date().getDate() - 6));
  }


}
