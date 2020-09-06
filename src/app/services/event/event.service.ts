import { Injectable } from '@angular/core';        
// import { HttpClient } from '@angular/common/http';
import { DayReport } from '../../models/day-report';
import { TaskService } from '../task/task.service';                      

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(
    // private http: HttpClient,
              private taskService: TaskService) { }

  // getReportsToDisplay =
}
