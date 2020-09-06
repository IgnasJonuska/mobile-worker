import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-timesheet-header',
  templateUrl: './timesheet-header.component.html',
  styleUrls: ['./timesheet-header.component.css']
})
export class TimesheetHeaderComponent implements OnInit {

  @Input() selectedDay: Date;

  @Output() calendarIconSelected = new EventEmitter<Date>();
  today: Date = new Date();

  constructor() { }

  ngOnInit() {
  }

  selectToday = () => {
    this.calendarIconSelected.emit(this.today);
  }

}
