import { Injectable } from '@angular/core';
import { Event } from '../../models/event';
import { ApprovalState } from '../../models/approval-state';
import { TimesheetTaskEvent } from '../../models/timesheet-task-event';
import { EventType } from '../../models/event-type';
import { Task } from '../../models/task';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getStateOfDay = (dayTasks: Array<Task>): ApprovalState => {
    if (dayTasks.every(e => e.isApproved)) {
      return ApprovalState.Approved;
    }
    if (dayTasks.some(e => e.isRejected)) {
      return ApprovalState.Rejected;
    }
    if (dayTasks.length == 0) {
      return ApprovalState.NoTask
    }
    return ApprovalState.Pending;
  }

  getWorkStartEnd = (dayTasks: Array<Task>): [Date, Date] => {
    const dayWorkHoursEvents = this.getEventsFromTasks(dayTasks).filter(e => e.isHoursEventType);
    const dayStart = new Date(Math.min.apply(null, dayWorkHoursEvents.map(e => e.start)));
    const dayEnd = new Date(Math.max.apply(null, dayWorkHoursEvents.map(e => e.end)));

    return [dayStart, dayEnd];
  }

  private getEventsFromTasks = (dayTasks: Array<Task>): Array<Event> => {
    return dayTasks.reduce((acc, dayTask) => acc.concat(dayTask.events), []);
  }

  getTimesheetEventsByType = (dayTasks: Array<Task>, type: EventType): Array<TimesheetTaskEvent> => {
    const dayEvents = this.getEventsFromTasks(dayTasks);
    switch (type) {
      case EventType.AdditionalHours:
        const additionalHoursEvents: Array<TimesheetTaskEvent> = dayEvents.filter(e => e.isAdditionalHoursEventType).map(e => {
          return {
            name: e.eventTypeName,
            amount: moment(e.end).diff(moment(e.start), 'hours')
          };
        });
        return additionalHoursEvents;

      case EventType.Expenses:
        const expensesEvents: Array<TimesheetTaskEvent> = dayEvents.filter(e => e.isExpenseType).map(e => {
          return {
            name: e.eventTypeName,
            amount: e.price * e. quantity,
            quantity: e.quantity
          };
        });
        return expensesEvents;

      case EventType.WorkHours:
        var millisecondsPerHour = 1000 * 60 * 60;
        const workHoursEvents: Array<TimesheetTaskEvent> = dayEvents.filter(e => e.isHoursEventType).map(e => {
          return {
            name: e.eventTypeName,
            amount: (Math.abs(e.end.getTime() - e.start.getTime())) / millisecondsPerHour
          };
        });
        return workHoursEvents;
    }
  }
}
