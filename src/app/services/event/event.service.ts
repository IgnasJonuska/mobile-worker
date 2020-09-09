import { Injectable } from '@angular/core';        
import { HttpClient } from '@angular/common/http';
import { DayReport } from '../../models/day-report';
import { TaskService } from '../task/task.service';                      
import { CalendarService } from '../calendar/calendar.service';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient,
              private taskService: TaskService,
              private calendarService: CalendarService) { }

   getReportsToDisplay = (startDate: Date, endDate: Date): Observable<Array<DayReport>> => {
    return this.http.get<Array<DayReport>>('assets/data-mock.json')
    .pipe(map(response => {
      response.forEach(dayReport => {
        dayReport.date = new Date(dayReport.date);
      });
      return response;
    }),
    map(response => response.filter(r => this.calendarService.isLaterDay(r.date, startDate)
       && this.calendarService.isEarlierDay(r.date, endDate))),
    map(response => {
      response.forEach(dayReport => {
        dayReport.firstTaskStart = new Date(dayReport.firstTaskStart);
        dayReport.lastTaskEnd = new Date(dayReport.lastTaskEnd);
        dayReport.tasks.forEach(t => {
          t.start = new Date(t.start);
          t.end = new Date(t.end);
          t.events.filter(e => e.isWorkHour).forEach(e => {
            e.start = new Date(e.start);
            e.end = new Date(e.end);
          });
        });
      });
      return response;
    }));
}
}