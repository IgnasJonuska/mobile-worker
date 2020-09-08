import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApprovalState } from 'src/app/models/approval-state';
import { CalendarService } from '../../../services/calendar/calendar.service';

@Component({
  selector: 'app-week',
  templateUrl: './week.component.html',
  styleUrls: ['./week.component.css']
})
export class WeekComponent implements OnInit {

  @Input() date: Date;
  @Input() approvalState: ApprovalState;
  @Input() selectedDay: Date;

  @Output() daySelected = new EventEmitter<Date>();

  constructor(public calendarService: CalendarService) { }

  ngOnInit() {
  }

  selectDay = () => {
    this.daySelected.emit(this.date);
  }

}
