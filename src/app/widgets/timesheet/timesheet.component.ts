import { Component, OnInit } from '@angular/core';
import { EventType } from 'src/app/models/event-type';
import { TimesheetTaskEvent } from 'src/app/models/timesheet-task-event';
import { DayReport } from 'src/app/models/day-report';
import { EventService } from 'src/app/services/event/event.service';
import { TaskService } from 'src/app/services/task/task.service';
import { CalendarService } from 'src/app/services/calendar/calendar.service';

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
  weekReports: Array<DayReport> = [];

  workEventType = EventType;

  constructor(private eventService: EventService,
    private taskService: TaskService,
    private calendarService: CalendarService) { }

  ngOnInit() {
    const today = new Date();
    const firstDayToDisplay = new Date(new Date().setDate(new Date().getDate() - 6));
    // console.log('firstDayToDisplay ', firstDayToDisplay)

    this.eventService.getReportsToDisplay(firstDayToDisplay, today).subscribe(data => {
      this.weekReports = data;
      this.onSelectedDate(today);
    });

  }

  onSelectedDate = (selectedDay: Date) => {
    this.selectedDay = selectedDay;
    const currentDayReport = this.weekReports.find(r => this.calendarService.isSameDay(r.date, selectedDay));

    this.workHoursTasks = this.taskService.getTimesheetEventsByType(currentDayReport.tasks, EventType.WorkHours);
    this.additionalHoursTasks = this.taskService.getTimesheetEventsByType(currentDayReport.tasks, EventType.AdditionalHours);
    this.expensesTasks = this.taskService.getTimesheetEventsByType(currentDayReport.tasks, EventType.Expenses);
    console.log('additionalHoursTasks', this.additionalHoursTasks)

    if (currentDayReport.tasks.length !== 0) {
      const workDayStartAndEndHours = this.taskService.getWorkStartEnd(currentDayReport.tasks);
      this.workDayStart = workDayStartAndEndHours[0];
      this.workDayEnd = workDayStartAndEndHours[1];
    }
  }
}
