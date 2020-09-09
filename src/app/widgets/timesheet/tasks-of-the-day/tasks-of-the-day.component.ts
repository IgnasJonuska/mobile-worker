import { Component, OnInit, Input } from '@angular/core';
import { TimesheetTaskEvent } from '../../../models/timesheet-task-event';
import { EventType } from '../../../models/event-type';
import { EventService } from 'src/app/services/event/event.service';

@Component({
  selector: 'app-tasks-of-the-day',
  templateUrl: './tasks-of-the-day.component.html',
  styleUrls: ['./tasks-of-the-day.component.css']
})
export class TasksOfTheDayComponent implements OnInit {

  @Input() workStart: Date;
  @Input() workEnd: Date;
  @Input() tasks: Array<TimesheetTaskEvent> = [];
  @Input() taskGroupType: EventType;
  @Input() groupName: string;
  @Input() totalName: string;

  taskTypes = EventType;

  constructor() { }

  ngOnInit(): void {
  }

}
